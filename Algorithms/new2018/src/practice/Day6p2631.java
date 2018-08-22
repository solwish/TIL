package practice;

import java.io.BufferedReader;
import java.io.InputStreamReader;

public class Day6p2631 {

	// DP - 2631
	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		int N = Integer.parseInt(br.readLine());
		int A[] = new int[N];
		int dp[] = new int[N];

		for (int i = 0; i < N; i++)
			A[i] = Integer.parseInt(br.readLine());
		int max = -1;
		dp[0] = 1;
		for (int i = 1; i < N; i++) {
			dp[i] = 1;
			for (int j = 0; j < i; j++)
				if (A[i] > A[j] && dp[j] + 1 > dp[i])
					dp[i] = dp[j] + 1;
			if (max < dp[i])
				max = dp[i];
		}

		System.out.println(N - max);
	}

}
