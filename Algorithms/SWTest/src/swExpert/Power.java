package swExpert;

import java.util.Scanner;

public class Power {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int T, a, b;
		long ans;
		for (int t = 0; t < 10; t++) {
			T = sc.nextInt();
			a = sc.nextInt();
			b = sc.nextInt();
			ans = (long) Math.pow(a, b);
			System.out.println("#" + T + " " + ans);
		}
	}

}