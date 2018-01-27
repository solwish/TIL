package swExpert;

import java.util.Scanner;

public class Substudy {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int T = sc.nextInt();

		for (int t_case = 1; t_case <= T; t_case++) {
			int average = 0;
			int sum = 0;
			int input = 0;

			for (int i = 0; i < 5; i++) {
				input = sc.nextInt();
				if (input < 40)
					input = 40;
				sum += input;
			}
			average = sum / 5;

			System.out.println("#" + t_case + " " + average);
		}
	}

}
