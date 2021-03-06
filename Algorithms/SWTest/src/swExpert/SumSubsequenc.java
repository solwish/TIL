package swExpert;

import java.util.Scanner;

public class SumSubsequenc {
	static int[] A;
	static int answer = 0;
	static int N, K;

	static void permutation(int k, int sum) {
		if (k > N && sum > K)
			return;

		if (sum == K)
			answer++;
		else
			for (int i = k; i < N; i++)
				permutation(i + 1, sum + A[i]);

	}

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int T = sc.nextInt();
		for (int t_case = 1; t_case <= T; t_case++) {
			N = sc.nextInt();
			K = sc.nextInt();
			A = new int[N];
			answer = 0;

			for (int i = 0; i < N; i++) {
				A[i] = sc.nextInt();
			}

			permutation(0, 0);
			System.out.println("#" + t_case + " " + answer);
		}
	}

}
