package codeground;

import java.util.Scanner;

public class Ex05Review {
	static int Answer;
	static long P = 1000000007;
	public static int N, M;
	public static long[] factorial = new long[2000003];

	public static long combination(int n, int r) {
		long A = factorial[n];
		long B = factorial[n - r] * factorial[r] % P;

		return A * find(B, P - 2) % P;
	}

	public static long find(long B, long p) {
		if (p == 0)
			return 1;
		else if (p == 1)
			return B;
		else {
			long half = find(B, p / 2);

			if (p % 2 == 0)
				return (half * half) % P;
			else
				return ((half * half) % P * B) % P;
		}
	}

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		factorial[0] = 1;
		for (int i = 1; i < 2000003; i++)
			factorial[i] = i * factorial[i - 1] % P;
		int T = sc.nextInt();

		for (int test_case = 0; test_case < T; test_case++) {
			N = sc.nextInt();
			M = sc.nextInt();
			Answer = (int) (combination(M + N + 2, N + 1) - 1);

			System.out.println("Case #" + (test_case + 1));
			System.out.println(Answer);
		}
	}

}
