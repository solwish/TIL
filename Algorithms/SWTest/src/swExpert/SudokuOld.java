package swExpert;

import java.util.Scanner;

public class SudokuOld {
	static int sw;

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int T = sc.nextInt();
		int num;
		int cnt = 0;

		for (int test_case = 0; test_case < T; test_case++) {
			sw = 1;
			int[][] A = new int[9][9];
			for (int i = 0; i < 9; i++) {
				for (int j = 0; j < 9; j++) {
					num = sc.nextInt();
					A[i][j] = num;
				}
			}

			for (int i = 0; i < 9; i++) {
				for (int j = 0; j < 9; j++) {
					cnt = 0;
					for (int k = 0; k < 9; k++) {
						if (A[i][j] == A[i][k] || A[i][j] == A[k][j]) {
							cnt = cnt + 1;
						}
					}
					if (cnt > 2)
						sw = 0;

					if (i <= 2) {
						cnt = 0;
						for (int x = 0; x <= 2; x++) {
							cnt = compareBlock(cnt, A, i, j, x);
						}
						if (cnt > 1)
							sw = 0;
					} else if (3 <= i && i <= 5) {
						cnt = 0;
						for (int x = 3; x <= 5; x++) {
							cnt = compareBlock(cnt, A, i, j, x);
						}
						if (cnt > 1)
							sw = 0;
					} else {
						cnt = 0;
						for (int x = 6; x <= 8; x++) {
							cnt = compareBlock(cnt, A, i, j, x);
						}
						if (cnt > 1)
							sw = 0;
					}
				}
			}
			System.out.println("#" + (test_case + 1) + " " + sw);
		}
	}

	private static int compareBlock(int cnt, int[][] A, int i, int j, int x) {
		if (j <= 2) {
			for (int y = 0; y < 3; y++) {
				if (A[i][j] == A[x][y]) {
					cnt = cnt + 1;
				}
			}
			if (cnt > 1)
				sw = 0;
		}

		if (2 < j && j <= 5) {
			for (int y = 3; y < 6; y++) {
				if (A[i][j] == A[x][y]) {
					cnt = cnt + 1;
				}
			}
			if (cnt > 1)
				sw = 0;
		}

		if (5 < j && j <= 8) {
			for (int y = 6; y < 9; y++) {
				if (A[i][j] == A[x][y]) {
					cnt = cnt + 1;
				}
			}
			if (cnt > 1)
				sw = 0;
		}
		return cnt;
	}
}