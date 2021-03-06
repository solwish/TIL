package imgonnasolve;

import java.util.Scanner;

public class HoneyHarvesting {
	static int[][] A, visited;
	static int N, M, C;
	static int max = Integer.MIN_VALUE;
	static int[] B;
	static int maxnum = 0;

	static void solve(int cnt, int num, int sx, int sy, int sum) {
		if (num > C || cnt > 2)
			return;
		if (cnt == 2) {
			if (sum > max)
				max = sum;
			return;
		}

		int tempy = 0;
		int tempx = 0;
		int temp = 0;
		int se = 0;

		for (int i = sx; i < N; i++)
			for (int j = 0; j < N; j++) {
				if (j + M - 1 < N && visited[i][j] == 0 && visited[i][j + M - 1] == 0) {
					num = 0;
					temp = 0;
					se = 0;
					for (int k = j; k < j + M; k++) {
						if (k < N) {
							B[se] = A[i][k];
							se++;
							visited[i][k] = 1;
							num += A[i][k];
							if (se == M)
								if (num > C) {
									maxnum = 0;
									permutation(0, 0, 0);
									num = 0;
									sum += maxnum;
									temp += maxnum;
								} else {
									for (int x = 0; x < M; x++) {
										sum += B[x] * B[x];
										temp += B[x] * B[x];
									}
									tempx = i;
									tempy = k;
								}
						}
					}

					solve(cnt + 1, num, i, j + M, sum);
					for (int k = tempy; k > tempy - M; k--)
						if (k < N && 0 <= k)
							visited[tempx][k] = 0;
					sum -= temp;
				}
			}
	}

	static void permutation(int k, int num, int sum) {
		if (k > M || num > C)
			return;

		if (sum > maxnum)
			maxnum = sum;
		for (int i = k; i < M; i++)
			permutation(i + 1, num + B[i], sum + B[i] * B[i]);
	}

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int T = sc.nextInt();

		for (int t_case = 1; t_case <= T; t_case++) {
			N = sc.nextInt();
			M = sc.nextInt();
			C = sc.nextInt();
			A = new int[N][N];
			visited = new int[N][N];
			max = Integer.MIN_VALUE;
			B = new int[M];

			for (int i = 0; i < N; i++)
				for (int j = 0; j < N; j++)
					A[i][j] = sc.nextInt();

			solve(0, 0, 0, 0, 0);
			System.out.println("#" + t_case + " " + max);
		}
	}

}
