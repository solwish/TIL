package swExpert;

import java.util.Scanner;

public class Talent {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int T = sc.nextInt();
		int N, P;

		for (int t_case = 1; t_case <= T; t_case++) {
			N = sc.nextInt();
			P = sc.nextInt();

			int[] A = new int[P];
			for (int i = P; i > 0; i--) {
				A[i - 1] = N / i;
				N -= A[i - 1];
			}
			long Answer = 1;
			for (int i = 0; i < A.length; i++)
				Answer *= A[i];

			System.out.println("#" + t_case + " " + Answer);
		}
	}

}