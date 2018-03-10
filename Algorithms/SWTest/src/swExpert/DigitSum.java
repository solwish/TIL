package swExpert;

import java.util.Scanner;

public class DigitSum {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int T;
		T = sc.nextInt();

		for (int test_case = 1; test_case <= T; test_case++) {
			long num = sc.nextLong();
			String s;
			int sum;

			while (num >= 10) {
				s = String.valueOf(num);
				sum = 0;
				for (int i = 0; i < s.length(); i++)
					sum += (int) s.charAt(i) - 48;
				num = sum;
			}
			System.out.println("#" + test_case + " " + num);
		}
	}

}
