package swExpert;

import java.util.Scanner;

public class Pepero {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int T = sc.nextInt();

		for (int t_case = 1; t_case <= T; t_case++) {
			int D = sc.nextInt();
			int H = sc.nextInt();
			int M = sc.nextInt();

			int Di = 11;
			int Hi = 11;
			int Mi = 11;

			if ((D < Di) || (D == Di && H < Hi) || (D == Di && H == Hi && M < Mi)) {
				System.out.println("#" + t_case + " " + -1);
			} else {
				int a = (D - Di) * 24 * 60;
				int b = (H - Hi) * 60;
				int c = M - Mi;
				int sum = a + b + c;
				System.out.println("#" + t_case + " " + sum);
			}
		}
	}

}
