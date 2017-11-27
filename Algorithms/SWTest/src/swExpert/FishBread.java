package swExpert;

import java.util.Arrays;
import java.util.Scanner;

public class FishBread {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int T = sc.nextInt();

		for (int test_case = 1; test_case <= T; test_case++) {
			int N = sc.nextInt();
			int M = sc.nextInt();
			int K = sc.nextInt();
			int[] A = new int[N];

			for (int i = 0; i < N; i++)
				A[i] = sc.nextInt();

			boolean isPossible = true;
			int bread = 0;
			Arrays.sort(A);

			for (int i = 0; i < A.length; i++) {
				if (i == 0)
					bread = (A[i] / M) * K;
				else
					bread += (A[i] / M) * K - i;

				bread--;

				if (bread < 0) {
					isPossible = false;
					break;
				}
			}

			System.out.print("#" + test_case + " ");
			if (isPossible)
				System.out.println("Possible");
			else
				System.out.println("Impossible");
		}
	}
}
