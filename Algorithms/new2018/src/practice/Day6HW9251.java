package practice;

import java.io.BufferedReader;
import java.io.InputStreamReader;

public class Day6HW9251 {

	//DP(LCS) - 9251
	public static void main(String[] args) throws Exception {
		String s1 = new String();
		String s2 = new String();
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		s1 = br.readLine();
		s2 = br.readLine();

		int n = s1.length();
		int m = s2.length();
		int dp[][] = new int[n + 1][m + 1];
		int max = -1;
		for (int i = 0; i < n; i++)
			for (int j = 0; j < m; j++) {
				if (s1.charAt(i) == s2.charAt(j))
					dp[i + 1][j + 1] = dp[i][j] + 1;
				else
					dp[i + 1][j + 1] = Math.max(dp[i][j + 1], dp[i + 1][j]);
				if (dp[i + 1][j + 1] > max)
					max = dp[i + 1][j + 1];
			}
		System.out.println(max);
	}

}
