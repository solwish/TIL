package swExpert;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.LinkedList;
import java.util.Queue;
import java.util.StringTokenizer;

public class Trail {
	static int[] xAxis = { 0, -1, 0, 1 };
	static int[] yAxis = { -1, 0, 1, 0 };

	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		int T = Integer.parseInt(br.readLine());

		for (int test_case = 1; test_case <= T; test_case++) {
			StringTokenizer s;
			int max = -1;
			s = new StringTokenizer(br.readLine());
			int N = Integer.parseInt(s.nextToken());
			int K = Integer.parseInt(s.nextToken());
			int top = 0;
			Queue<Integer> Q = new LinkedList<Integer>();
			int[][] A = new int[N][N];

			for (int i = 0; i < N; i++) {
				s = new StringTokenizer(br.readLine());
				for (int j = 0; j < N; j++) {
					A[i][j] = Integer.parseInt(s.nextToken());
					if (top < A[i][j])
						top = A[i][j];
				}
			}
			for (int i = 0; i < N; i++) {
				for (int j = 0; j < N; j++) {
					if (top == A[i][j]) {
						Q.offer(i);
						Q.offer(j);
					}
				}
			}

			while (!Q.isEmpty()) {
				int startX = Q.poll();
				int startY = Q.poll();
				int[][] d = new int[N][N];
				boolean didWork = false;

				d[startX][startY] = 1;
				max = dfs(K, max, N, A, startX, startY, d, didWork);
			}
			System.out.println("#" + test_case + " " + max);
		}
	}

	private static int dfs(int K, int max, int N, int[][] A, int i, int j, int[][] d, boolean work) {
		for (int z = 0; z < 4; z++) {
			int nx = i + xAxis[z];
			int ny = j + yAxis[z];
			int[][] B = new int[N][N];
			int[][] Nd = new int[N][N];
			boolean didWork = work;

			for (int q = 0; q < N; q++) {
				for (int w = 0; w < N; w++) {
					B[q][w] = A[q][w];
					Nd[q][w] = d[q][w];
				}
			}

			if (isPossible(nx, ny, N) && Nd[nx][ny] == 0) {
				if (B[nx][ny] < B[i][j]) {
					Nd[nx][ny] = Nd[i][j] + 1;
					if (max < Nd[nx][ny])
						max = Nd[nx][ny];
					max = dfs(K, max, N, B, nx, ny, Nd, didWork);
				} else {
					if (B[nx][ny] - K < B[i][j] && !didWork) {
						didWork = true;
						B[nx][ny] = B[i][j] - 1;
						Nd[nx][ny] = Nd[i][j] + 1;
						if (max < Nd[nx][ny])
							max = Nd[nx][ny];
						max = dfs(K, max, N, B, nx, ny, Nd, didWork);
					}
				}
			}
		}
		return max;
	}

	static boolean isPossible(int x, int y, int N) {
		if (x >= 0 && x < N && y >= 0 && y < N)
			return true;
		return false;
	}
}
