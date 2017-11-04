package swExpert;

import java.util.Scanner;

public class NQueen {
	static int level, N, cnt;
	static int[] cols;

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int T = sc.nextInt();

		for (int t_case = 1; t_case <= T; t_case++) {
			N = sc.nextInt();
			cols = new int[N + 1];
			cnt = 0;
			queens(0);
			System.out.println("#" + t_case + " " + cnt);
		}
	}

	static void queens(int level) {
		if (!promising(level))
			return;
		else if (level == N)
			cnt++;
		else
			for (int i = 1; i <= N; i++) {
				cols[level + 1] = i;
				queens(level + 1);
			}
	}

	static boolean promising(int level) {
		for (int i = 1; i < level; i++) {
			if (cols[i] == cols[level])
				return false;
			else if (level - i == Math.abs(cols[level] - cols[i]))
				return false;
		}
		return true;
	}

}
