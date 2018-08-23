package practice;

import java.util.Scanner;

public class Day6HW11053 {

	// DP(LIS) - 11053
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int N = sc.nextInt();
		int[] A = new int[N];
		int dp[] = new int[N];
		int max = 1;// 이거 초기값으로 -1 혹은 0주면 1 1 입력했을 때, 오류
		for (int i = 0; i < N; i++)
			A[i] = sc.nextInt();

		dp[0] = 1;
		for (int i = 1; i < N; i++) {
			dp[i] = 1;
			for (int j = 0; j < i; j++)
				if (A[i] > A[j] && dp[j] + 1 > dp[i])
					dp[i] = dp[j] + 1;
			if (max < dp[i])
				max = dp[i];
		}
		System.out.println(max);
	}

}
