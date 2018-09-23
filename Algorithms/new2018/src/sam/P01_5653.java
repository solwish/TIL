package sam;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class P01_5653 {
	static int N, M, K, map[][], answer, pre_map[][];
	static int active[][], pre_active[][], life[][], pre_life[][];
	static int dx[] = { 1, 0, -1, 0 }, dy[] = { 0, 1, 0, -1 };
	static boolean check;

	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		int T = Integer.parseInt(br.readLine());

		// active : -1= 비활성/ 0= 초기상태/ 1= 활성/ 3= 죽은상태
		for (int t_case = 1; t_case <= T; t_case++) {
			answer = 0;
			check = false;
			StringTokenizer st = new StringTokenizer(br.readLine());
			N = Integer.parseInt(st.nextToken());
			M = Integer.parseInt(st.nextToken());
			K = Integer.parseInt(st.nextToken());
			map = new int[N][M];
			active = new int[N][M];
			life = new int[N][M];
			for (int i = 0; i < N; i++) {
				st = new StringTokenizer(br.readLine());
				for (int j = 0; j < M; j++) {
					map[i][j] = Integer.parseInt(st.nextToken());
					life[i][j] = map[i][j];
					if (map[i][j] > 0)
						active[i][j] = -1;
				}
			}
			bfs();
			System.out.println("#" + t_case + " " + answer);
		}
	}

	static boolean boundry(int x, int y) {
		if (x < 0 || x >= N || y < 0 || y >= M)
			return false;
		return true;
	}

	private static void bfs() {
		if (K == 0) {
			for (int i = 0; i < N; i++)
				for (int j = 0; j < M; j++) {
					if (active[i][j] != 0 && active[i][j] != 3)
						answer++;
				}
			return;
		}

		// 맵 확장 1/2만해주기
		if (check) {
			pre_map = new int[N][M];
			pre_active = new int[N][M];
			pre_life = new int[N][M];
			for (int i = 0; i < N; i++)
				for (int j = 0; j < M; j++) {
					pre_map[i][j] = map[i][j];
					pre_active[i][j] = active[i][j];
					pre_life[i][j] = life[i][j];
				}
			N += 2;
			M += 2;
			map = new int[N][M];
			active = new int[N][M];
			life = new int[N][M];

			for (int i = 1; i < N - 1; i++)
				for (int j = 1; j < M - 1; j++) {
					map[i][j] = pre_map[i - 1][j - 1];
					active[i][j] = pre_active[i - 1][j - 1];
					life[i][j] = pre_life[i - 1][j - 1];
				}
		} else {
			pre_map = new int[N][M];
			pre_active = new int[N][M];
			pre_life = new int[N][M];
			for (int i = 0; i < N; i++)
				for (int j = 0; j < M; j++) {
					pre_map[i][j] = map[i][j];
					pre_active[i][j] = active[i][j];
					pre_life[i][j] = life[i][j];
				}
			map = new int[N][M];
			active = new int[N][M];
			life = new int[N][M];

			for (int i = 0; i < N; i++)
				for (int j = 0; j < M; j++) {
					map[i][j] = pre_map[i][j];
					active[i][j] = pre_active[i][j];
					life[i][j] = pre_life[i][j];
				}
		}

		// 번식
		for (int i = 0; i < N; i++)
			for (int j = 0; j < M; j++) {
				if (map[i][j] == 0 && active[i][j] != 3) {
					int max_life = -1;
					boolean flag = false;
					for (int k = 0; k < 4; k++) {
						int ux = i + dx[k];
						int uy = j + dy[k];
						if (boundry(ux, uy) && active[ux][uy] == 1) {
							if (max_life < life[ux][uy]) {
								flag = true;
								max_life = life[ux][uy];
							}
						}
					}
					if (flag) {
						life[i][j] = max_life;
						active[i][j] = -1;
						map[i][j] = max_life;
					}
				}
			}

		// 잠복기 처리
		if (check) {
			for (int i = 1; i < N - 1; i++) {
				for (int j = 1; j < M - 1; j++) {
					if (pre_map[i - 1][j - 1] > 0 && map[i][j] > 0) {
						map[i][j]--;
						if (pre_active[i - 1][j - 1] == -1 && map[i][j] == 0) {
							active[i][j] = 1;
							map[i][j] = life[i][j];
						} else if (pre_active[i - 1][j - 1] == 1 && map[i][j] == 0) {
							active[i][j] = 3;
						}
					}
				}
			}
		} else {
			for (int i = 0; i < N; i++) {
				for (int j = 0; j < M; j++) {
					if (pre_map[i][j] > 0 && map[i][j] > 0) {
						map[i][j]--;
						if (pre_active[i][j] == -1 && map[i][j] == 0) {
							active[i][j] = 1;
							map[i][j] = life[i][j];
						} else if (pre_active[i][j] == 1 && map[i][j] == 0) {
							active[i][j] = 3;
						}
					}
				}
			}
		}
		if (check)
			check = false;
		else
			check = true;
		// // 출력부분

		// System.out.println();
		// System.out.println("active");
		// for (int i = 0; i < N; i++) {
		// for (int j = 0; j < M; j++) {
		// if (active[i][j] >= 0)
		// System.out.print(" " + active[i][j]);
		// else
		// System.out.print(" " + active[i][j]);
		// }
		// System.out.println();
		// }

		K--;
		bfs();
	}

	// static int time = 1;
}
