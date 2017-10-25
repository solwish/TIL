package swExpert;

import java.util.Scanner;

public class PascalsTriangle {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int T = sc.nextInt();
		int A[][];
		int N;

		for (int t_case = 1; t_case <= T; t_case++) {
			N = sc.nextInt();
			A = new int[N][N];

			for (int i = 0; i < N; i++)
				for (int j = 0; j <= i; j++)
					if (i == j || j == 0)
						A[i][j] = 1;
					else if (j >= 1 && j < i)
						A[i][j] = A[i - 1][j - 1] + A[i - 1][j];

			System.out.print("#" + t_case);
			for (int i = 0; i < N; i++) {
				System.out.println();
				for (int j = 0; j <= i; j++)
					System.out.print(A[i][j] + " ");
			}
			System.out.println();
		}
	}
}