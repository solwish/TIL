package practice;

import java.util.Scanner;

public class Day6HW11054 {
	
	//DP(LIS) - 11054 (가장 긴 바이토닉 부분 수열)
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int N = sc.nextInt();
		int A[] = new int[N];
		int dp1[] = new int[N];
		int dp2[] = new int[N];

		for (int i = 0; i < N; i++)
			A[i] = sc.nextInt();

		dp1[0] = 1;
		for (int i = 1; i < N; i++) {
			dp1[i] = 1;
			for (int j = 0; j < i; j++)
				if (A[i] > A[j] && dp1[i] < dp1[j] + 1)
					dp1[i] = dp1[j] + 1;

		}
		dp2[N - 1] = 1;
		for (int i = N - 2; i >= 0; i--) {
			dp2[i] = 1;
			for (int j = N - 1; j > i; j--)
				if (A[i] > A[j] && dp2[i] < dp2[j] + 1)
					dp2[i] = dp2[j] + 1;
		}
		int max = -1;
		for (int i = 0; i < N; i++)
			if (dp1[i] + dp2[i] > max)
				max = dp1[i] + dp2[i];
		System.out.println(max - 1);// 초기값을 두번 다 1로 해줘서 -1
	}

}
