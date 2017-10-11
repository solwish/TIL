package swExpert;

import java.util.Scanner;

public class CodeScanner {

	public static void main(String[] args) throws Exception {
		Scanner sc = new Scanner(System.in);
		int T = sc.nextInt();
		String s;

		for (int test_case = 1; test_case <= T; test_case++) {
			int N = sc.nextInt();
			int M = sc.nextInt();
			int[][] A = new int[N][M];

			sc.nextLine();
			for (int i = 0; i < N; i++) {
				s = sc.nextLine();
				for (int j = 0; j < M; j++) {
					A[i][j] = Integer.parseInt(String.valueOf(s.charAt(j)));
					System.out.print(A[i][j] + " ");
				}
				System.out.println();
			}

		}
	}

}
