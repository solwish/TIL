package practice;

import java.util.Scanner;

//DP(knapsack) - 1535
public class Day7p1535 {
	static int N, health[], pleasure[];

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		N = sc.nextInt(); // 사람수
		health = new int[N + 1]; // 체력
		pleasure = new int[N + 1]; // 기쁨
		for (int i = 1; i <= N; i++)
			health[i] = sc.nextInt();
		for (int i = 1; i <= N; i++)
			pleasure[i] = sc.nextInt();
		int max = 0;
		int dp[][] = new int[N + 1][101];

		for (int i = 1; i <= N; i++)
			for (int w = 1; w < 100; w++) {
				if (health[i] > w) // 현재 체력보다 큰경우 죽으므로 인사 못함
					dp[i][w] = dp[i - 1][w];
				else
					dp[i][w] = Math.max(dp[i - 1][w], pleasure[i] + dp[i - 1][w - health[i]]); // 현재 체력을 이상일 경우(99까지만 돌리니) 선택
																																											// 안했을때와 선택했을때 중 높은 값 선택
				if (max < dp[i][w])
					max = dp[i][w];
			}
		System.out.println(max);
	}

}
