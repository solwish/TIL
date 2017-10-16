package swExpert;

import java.util.Scanner;

public class Change {
	static int T;
	static int[] A = new int[8];

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		T = sc.nextInt();

		for (int t_case = 1; t_case <= 10; t_case++) {
			int N = sc.nextInt();
			int money = 50000;
			int mok;
			boolean toggle = true;

			for (int i = 0; i < 8; i++) {
				mok = N / money;
				N = N - money * mok;
				A[i] = mok;

				money = (toggle == true) ? (money / 5) : (money / 2);
				toggle = (toggle == true) ? false : true;
			}

			System.out.println("#" + t_case);
			for (int i = 0; i < 8; i++) {
				System.out.print(A[i] + " ");
			}
			System.out.println();
		}
	}
}
