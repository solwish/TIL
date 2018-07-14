package practice;

import java.util.Scanner;

public class Day1O1 {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);

		int TC = scanner.nextInt();

		for (int testCase = 0; testCase < TC; testCase++) {
			N = scanner.nextInt();
			Array = new int[N];
			Case = 0;
			for (int zero = 0; zero < N; zero++) {
				Array[0] = zero;
				DFS(1);
			}

			System.out.println("#" + (testCase + 1) + " " + Case);
		}
	}

	static int Array[];
	static int Case = 0;
	static int N;
	static int j;

	static void DFS(int n) {
		if (n == Array.length) {
			Case++;
		} else {
			for (int i = 0; i < N; i++) {
				for (j = 0; j < n; j++) {
					if ((i == Array[j]) || (n - i) == (j - Array[j]) || (n + i) == (j + Array[j])) {
						j = -1;
						break;
					}
				}
				if (j != -1) {
					Array[n] = i;
					DFS(n + 1);
				}
			}
		}
	}

}
