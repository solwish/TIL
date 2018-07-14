package practice;

import java.util.Scanner;

public class Day1P1 {
	static int N, cnt;
	static int[] Array;

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int T = sc.nextInt();

		for (int t_case = 1; t_case <= T; t_case++) {
			N = sc.nextInt();
			Array = new int[N + 1];
			cnt = 0;

			queens(0);
			System.out.println("#" + t_case + " " + cnt);
		}
	}

	static void queens(int level) {
		if (level == N) {
			cnt++;
			return;
		} else
			for (int i = 1; i <= N; i++) {
				Array[level + 1] = i;
				if (isPossible(level + 1))
					queens(level + 1);
			}
	}

	static boolean isPossible(int k) {
		for (int j = 1; j < k; j++) {
			if (Array[j] == Array[k])
				return false;
			else if (k - j == Math.abs(Array[k] - Array[j]))
				return false;
		}
		return true;
	}

}
