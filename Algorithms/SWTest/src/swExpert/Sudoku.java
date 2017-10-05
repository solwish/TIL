package swExpert;

import java.util.Scanner;

public class Sudoku {
	static int sw;

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int T = sc.nextInt();
		int cnt;
		int num;

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
				if (sw == 0)
					break;

				for (int j = 0; j < 9; j++) {
					cnt = 0;
					for (int k = 0; k < 9; k++) {
						if (A[i][j] == A[i][k] || A[i][j] == A[k][j]) {
							cnt = cnt + 1;
						}
					}
					if (cnt > 2) {
						sw = 0;
						break;
					}
				}
			}

			if (sw == 1) {
				for (int i = 0; i < 9; i = i + 3) {
					if (sw == 0)
						break;
					for (int j = 0; j < 9; j = j + 3) {
						int[] count = new int[10];
						for (int x = i; x < i + 3; x++) {
							for (int y = j; y < j + 3; y++) {
								count[A[x][y]]++;
								if (count[A[x][y]] > 1)
									sw = 0;
							}
						}
					}
				}
			}

			System.out.println("#" + (test_case + 1) + " " + sw);
		}
	}
}
