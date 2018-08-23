package theory.linkedList;

import java.util.Scanner;

public class Knapsack {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int N = sc.nextInt();
		int W = sc.nextInt();
		int cost[] = new int[N + 1];
		int weight[] = new int[N + 1];

		for (int i = 1; i <= N; i++) {
			cost[i] = sc.nextInt();
			weight[i] = sc.nextInt();
		}
		int max = 0;
		int dp[][] = new int[cost.length + 1][W + 1];

		for (int i = 1; i <= N; i++)
			for (int w = 1; w <= W; w++) {
				if (weight[i] > w)
					dp[i][w] = dp[i - 1][w];
				else
					dp[i][w] = Math.max(dp[i - 1][w], cost[i] + dp[i - 1][w - weight[i]]);
				if (max < dp[i][w])
					max = dp[i][w];
				// System.out.print(dp[i][w] + " ");
			}
		// for (int i = 0; i <= N; i++) {
		// System.out.println();
		// for (int j = 0; j <= W; j++)
		// System.out.print(dp[i][j] + " ");
		// }
		System.out.println(max);
	}
	/* input
	 * 5 11 
	 * 1 1 
	 * 6 2 
	 * 18 5 
	 * 22 6 
	 * 28 7
	 * 
	 */
}
