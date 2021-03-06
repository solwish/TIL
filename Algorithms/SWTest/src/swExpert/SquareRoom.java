package swExpert;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.LinkedList;
import java.util.Queue;
import java.util.StringTokenizer;

public class SquareRoom {
	static int N;
	static int[] X = { 0, 1, 0, -1 };
	static int[] Y = { 1, 0, -1, 0 };

	static boolean isPossible(int x, int y) {
		if (0 <= x && x < N && 0 <= y && y < N) {
			return true;
		}
		return false;
	}

	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		int T = Integer.parseInt(br.readLine());

		for (int t_case = 1; t_case <= T; t_case++) {
			N = Integer.parseInt(br.readLine());
			int[][] A = new int[N][N];
			StringTokenizer s;
			Queue<Integer> Q = new LinkedList<Integer>();

			for (int i = 0; i < N; i++) {
				s = new StringTokenizer(br.readLine());
				for (int j = 0; j < N; j++) {
					A[i][j] = Integer.parseInt(s.nextToken());
				}
			}

			int spoint = Integer.MAX_VALUE;
			int max = Integer.MIN_VALUE;
			for (int i = 0; i < N; i++) {
				for (int j = 0; j < N; j++) {
					int[][] pie = new int[N][N];
					Q.offer(i);
					Q.offer(j);
					pie[i][j] = 1;
					int x, y, nx, ny;

					while (!Q.isEmpty()) {
						x = Q.poll();
						y = Q.poll();

						for (int k = 0; k < 4; k++) {
							nx = x + X[k];
							ny = y + Y[k];

							if (isPossible(nx, ny) && A[nx][ny] == A[x][y] + 1) {
								pie[nx][ny] = pie[x][y] + 1;
								if (pie[nx][ny] > max) {
									max = pie[nx][ny];
									spoint = A[i][j];
								} else if (pie[nx][ny] == max)
									spoint = (spoint > A[i][j]) ? A[i][j] : spoint;
								Q.offer(nx);
								Q.offer(ny);
							}
						}
					}
				}
			}
			System.out.println("#" + t_case + " " + spoint + " " + max);
		}
	}
}