package swExpert;

import java.util.Scanner;

public class WaterPayment {

	static int min = Integer.MAX_VALUE;
	static int P, Q, R, S, W;
	static int Apay, Bpay;

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int T = sc.nextInt();

		for (int t_case = 1; t_case <= T; t_case++) {
			min = Integer.MAX_VALUE;
			P = sc.nextInt();
			Q = sc.nextInt();
			R = sc.nextInt();
			S = sc.nextInt();
			W = sc.nextInt();

			Apay = P * W;
			Bpay = (W > R) ? Q + S * (W - R) : Q;
			min = (Apay > Bpay) ? Bpay : Apay;

			System.out.println("#" + t_case + " " + min);
		}

	}

}
