package swExpert;

import java.util.Scanner;

public class MaximumPathLength {
	static int T;
	static int N;
	static int M;

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		T = sc.nextInt();
		for (int t_case = 1; t_case <= T; t_case++) {
			N = sc.nextInt();
			M = sc.nextInt();
			int[][] d = new int[N + 1][N + 1];
			int a, b;

			for (int i = 1; i <= M; i++) {
				a = sc.nextInt();
				b = sc.nextInt();
				d[a][b] = 1;
				d[b][a] = 1;
			}

			int max = 1;
			for (int s = 1; s <= N; s++) {
				int[] pie = new int[N + 1];
				pie[s] = 1;
				max = dfs(d, s, pie, max);
			}

			System.out.println("#" + t_case + " " + max);
		}

	}

	private static int dfs(int[][] d, int v, int[] pie, int max) {

		for (int k = 1; k <= N; k++) {
			if (pie[k] == 0 && d[v][k] == 1) {
				pie[k] = pie[v] + 1;
				if (pie[k] > max)
					max = pie[k];
				max = dfs(d, k, pie, max);
			}
		}
		pie[v] = 0;
		return max;
	}
}
