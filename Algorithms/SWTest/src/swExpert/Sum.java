package swExpert;

import java.util.Scanner;

public class Sum {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);

		int T = 10;
		for (int test_case = 0; test_case < T; test_case++) {
			int max = 0;
			int sum = 0;
			int[][] A = new int[100][100];
			int n;
			int z = sc.nextInt();

			for (int i = 0; i < 100; i++) {
				for (int j = 0; j < 100; j++) {
					n = sc.nextInt();
					A[i][j] = n;
				}
			}

			for (int i = 0; i < 100; i++) {
				sum = 0;
				for (int j = 0; j < 100; j++) {
					sum += A[i][j];
				}
				if (sum > max)
					max = sum;
			}

			for (int j = 0; j < 100; j++) {
				sum = 0;
				for (int i = 0; i < 100; i++) {
					sum += A[i][j];
				}
				if (sum > max)
					max = sum;
			}

			sum = 0;
			for (int x = 0; x < 100; x++) {
				sum += A[x][x];
			}
			if (sum > max)
				max = sum;

			sum = 0;
			int y = 100;
			for (int x = 0; x < 100; x++) {
				y--;
				sum += A[x][y];
			}
			if (sum > max)
				max = sum;

			System.out.println("#" + (test_case + 1) + " " + max);
		}
	}
}
