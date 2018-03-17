package swExpert;

import java.util.Scanner;

public class WinningRate {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int T;
		T = sc.nextInt();

		for (int test_case = 1; test_case <= T; test_case++) {
			System.out.print("#" + test_case + " ");
			double A, B, C, D;
			double ALICE, BOB;

			A = sc.nextDouble();
			B = sc.nextDouble();
			C = sc.nextDouble();
			D = sc.nextDouble();
			ALICE = A / B;
			BOB = C / D;

			if (ALICE > BOB)
				System.out.println("ALICE");
			else if (ALICE < BOB)
				System.out.println("BOB");
			else
				System.out.println("DRAW");

		}
	}

}
