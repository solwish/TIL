package practice;

import java.util.Scanner;

//DP - 1149 RGB°Å¸® 
public class Day5HW1149 {
	static int min = Integer.MAX_VALUE;
	static int N, cost[][];

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		N = sc.nextInt();
		cost = new int[N][3];

		for (int i = 0; i < N; i++)
			for (int j = 0; j < 3; j++)
				cost[i][j] = sc.nextInt();

		for (int i = 1; i < N; i++) {
			cost[i][0] += Math.min(cost[i - 1][1], cost[i - 1][2]);
			cost[i][1] += Math.min(cost[i - 1][0], cost[i - 1][2]);
			cost[i][2] += Math.min(cost[i - 1][0], cost[i - 1][1]);
		}
		System.out.println(Math.min(cost[N - 1][0], Math.min(cost[N - 1][1], cost[N - 1][2])));
		// for (int i = 0; i < N; i++)
		// dp(0, i, 0);
		// System.out.println(min);
	}

	private static void dp(int depth, int color, int sum) {
		if (sum >= min)
			return;
		if (depth == N)
			min = sum < min ? sum : min;
		else
			for (int i = 0; i < 3; i++) {
				if (i != color)
					dp(depth + 1, i, sum + cost[depth][i]);
			}
	}
}
