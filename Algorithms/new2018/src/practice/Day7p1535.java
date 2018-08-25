package practice;

import java.util.Scanner;

//DP(knapsack) - 1535
public class Day7p1535 {
	static int N, health[], pleasure[];

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		N = sc.nextInt(); // �����
		health = new int[N + 1]; // ü��
		pleasure = new int[N + 1]; // ���
		for (int i = 1; i <= N; i++)
			health[i] = sc.nextInt();
		for (int i = 1; i <= N; i++)
			pleasure[i] = sc.nextInt();
		int max = 0;
		int dp[][] = new int[N + 1][101];

		for (int i = 1; i <= N; i++)
			for (int w = 1; w < 100; w++) {
				if (health[i] > w) // ���� ü�º��� ū��� �����Ƿ� �λ� ����
					dp[i][w] = dp[i - 1][w];
				else
					dp[i][w] = Math.max(dp[i - 1][w], pleasure[i] + dp[i - 1][w - health[i]]); // ���� ü���� �̻��� ���(99������ ������) ����
																																											// ���������� ���������� �� ���� �� ����
				if (max < dp[i][w])
					max = dp[i][w];
			}
		System.out.println(max);
	}

}
