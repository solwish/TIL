package swExpert;

import java.util.Scanner;

public class View {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int T = 10;

		for (int test_case = 0; test_case < 10; test_case++) {
			int n = sc.nextInt();
			int height;
			int count = 0;
			int[][] A = new int[300][n];

			for (int i = 0; i < 300; i++) {
				for (int j = 0; j < n; j++) {
					A[i][j] = 0;
				}
			}

			for (int j = 0; j < n; j++) {
				height = sc.nextInt();
				for (int i = 0; i < height; i++) {
					A[i][j] = 1;
				}
			}

			for (int i = 0; i < 300; i++) {
				for (int j = 2; j < n - 2; j++) {
					if (A[i][j] == 1 && A[i][j - 2] == 0 && A[i][j - 1] == 0 && A[i][j + 1] == 0 && A[i][j + 2] == 0) {
						count = count + 1;
					}
				}
			}

			System.out.println("#" + (test_case + 1) + " " + count);
		}
	}
}
