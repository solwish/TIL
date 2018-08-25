package practice;

import java.util.Scanner;

//DP(knapsack) - 12865 (Æò¹üÇÑ ¹è³¶)
public class Day7HW12865 {
	static int N, W[], V[], K;

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		N = sc.nextInt();
		K = sc.nextInt();

		W = new int[N + 1];
		V = new int[N + 1];
		int dp[][] = new int[N + 1][K + 1];

		for (int i = 1; i <= N; i++) {
			W[i] = sc.nextInt();
			V[i] = sc.nextInt();
		}
		int max = 0;
		for (int i = 1; i <= N; i++)
			for (int w = 1; w <= K; w++) {
				if (W[i] > w)
					dp[i][w] = dp[i - 1][w];
				else
					dp[i][w] = Math.max(dp[i - 1][w], V[i] + dp[i - 1][w - W[i]]);
				if (max < dp[i][w])
					max = dp[i][w];
			}
		System.out.println(max);
	}

}
