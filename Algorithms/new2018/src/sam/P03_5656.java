package sam;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.LinkedList;
import java.util.Queue;
import java.util.StringTokenizer;

public class P03_5656 {
	static int N, W, H, min, dx[] = { 1, 0, -1, 0 }, dy[] = { 0, 1, 0, -1 };

	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		int T = Integer.parseInt(br.readLine());

		for (int t_case = 1; t_case <= T; t_case++) {
			StringTokenizer st = new StringTokenizer(br.readLine());
			N = Integer.parseInt(st.nextToken());
			W = Integer.parseInt(st.nextToken());
			H = Integer.parseInt(st.nextToken());
			int[][] map = new int[H][W];
			min = Integer.MAX_VALUE;

			for (int i = 0; i < H; i++) {
				st = new StringTokenizer(br.readLine());
				for (int j = 0; j < W; j++)
					map[i][j] = Integer.parseInt(st.nextToken());
			}

			bfs(0, map);
			System.out.println("#" + t_case + " " + min);
		}
	}

	private static void bfs(int cnt, int[][] map) {

		// 0이면 더이상 할 필요 X
		if (min == 0)
			return;
		// 벽돌 다 부시고
		if (cnt == N) {
			int tmp = 0;
			for (int i = 0; i < H; i++)
				for (int j = 0; j < W; j++)
					if (map[i][j] != 0)
						tmp++;
			if (min > tmp)
				min = tmp;
			return;
		}

		// 벽돌 부시기
		int[][] copy = new int[H][W];
		for (int k = 0; k < H; k++)
			for (int j = 0; j < W; j++)
				copy[k][j] = map[k][j];
		for (int i = 0; i < W; i++) {
			bfs(cnt + 1, brick(i, copy));
			copy = new int[H][W];
			for (int k = 0; k < H; k++)
				for (int j = 0; j < W; j++)
					copy[k][j] = map[k][j];
		}
	}

	static Queue<Integer> Q = new LinkedList<>(); // 좌표받을 큐
	static Queue<Integer> QN = new LinkedList<>(); // 벽돌 값받을 큐

	// 벽돌 부시기
	private static int[][] brick(int r, int[][] map) {

		boolean visit[][] = new boolean[H][W];
		for (int i = 0; i < H; i++)
			if (map[i][r] != 0) {
				Q.offer(i);
				Q.offer(r);
				QN.offer(map[i][r]);
				map[i][r] = 0;
				visit[i][r] = true;
				break;
			}
		while (!Q.isEmpty()) {
			int h = Q.poll();
			int w = Q.poll();
			int power = QN.poll();

			for (int i = 1; i < power; i++) {
				for (int j = 0; j < 4; j++) {
					int ux = h + (i * dx[j]);
					int uy = w + (i * dy[j]);
					if (boundary(ux, uy) && !visit[ux][uy] && map[ux][uy] != 0) {
						Q.offer(ux);
						Q.offer(uy);
						QN.offer(map[ux][uy]);
						map[ux][uy] = 0;
						visit[ux][uy] = true;
					}
				}
			}
		}

		// 벽돌 내리기
		for (int i = H - 1; i > 0; i--)
			for (int j = 0; j < W; j++) {
				if (map[i][j] == 0) {
					for (int k = i - 1; k >= 0; k--)
						if (map[k][j] != 0) {
							map[i][j] = map[k][j];
							map[k][j] = 0;
							break;
						}
				}
			}
		return map;
	}

	static boolean boundary(int x, int y) {
		if (x < 0 || y < 0 || x >= H || y >= W)
			return false;
		return true;
	}
}
