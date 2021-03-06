package swExpert;

import java.util.Scanner;

public class ArrayAround {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int T = sc.nextInt();

		for (int test_case = 0; test_case < T; test_case++) {
			int N = sc.nextInt();
			int[][] A = new int[N][N];

			for (int i = 0; i < N; i++) {
				for (int j = 0; j < N; j++) {
					A[i][j] = sc.nextInt();
				}
			}

			System.out.println("#" + (test_case + 1));

			for (int i = 0; i < N; i++) {
				for (int j = N - 1; j >= 0; j--) {
					System.out.print(A[j][i]);
				}
				System.out.print(" ");
				for (int j = N - 1; j >= 0; j--) {
					System.out.print(A[N - 1 - i][j]);
				}
				System.out.print(" ");
				for (int j = 0; j < N; j++) {
					System.out.print(A[j][N - 1 - i]);
				}
				System.out.println();
			}
		}
	}
}
