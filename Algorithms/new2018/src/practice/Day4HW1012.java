package practice;

import java.util.LinkedList;
import java.util.Queue;
import java.util.Scanner;

// bfs - ¿Ø±‚≥ÛπË√ﬂ
public class Day4HW1012 {
	static int M, N, K, map[][];
	static int[] dx = { 1, 0, -1, 0 };
	static int[] dy = { 0, 1, 0, -1 };
	static Queue<Integer> Q = new LinkedList<>();

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int T = sc.nextInt();

		for (int t_case = 1; t_case <= T; t_case++) {
			M = sc.nextInt();
			N = sc.nextInt();
			K = sc.nextInt();
			map = new int[M][N];
			int x, y;
			for (int i = 0; i < K; i++) {
				x = sc.nextInt();
				y = sc.nextInt();
				map[x][y] = 1;
			}
			int cnt = 0;
			while (check()) {
				cnt++;
				while (!Q.isEmpty()) {
					int tx = Q.poll();
					int ty = Q.poll();
					for (int k = 0; k < 4; k++) {
						int ux = tx + dx[k];
						int uy = ty + dy[k];
						if (ux < 0 || ux >= M || uy < 0 || uy >= N)
							continue;
						if (map[ux][uy] == 1) {
							map[ux][uy] = 0;
							Q.offer(ux);
							Q.offer(uy);
						}
					}
				}
			}
			System.out.println(cnt);
		}
	}

	private static boolean check() {
		for (int i = 0; i < M; i++)
			for (int j = 0; j < N; j++)
				if (map[i][j] == 1) {
					map[i][j] = 0;
					Q.offer(i);
					Q.offer(j);
					return true;
				}
		return false;
	}

}
