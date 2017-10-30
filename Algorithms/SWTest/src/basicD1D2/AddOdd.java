package basicD1D2;

import java.util.Scanner;

public class AddOdd {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int T = sc.nextInt();

		for (int t_case = 1; t_case <= T; t_case++) {
			int sum = 0;
			int num;
			for (int i = 0; i < 10; i++) {
				num = sc.nextInt();
				if (num % 2 == 1)
					sum += num;
			}
			System.out.println("#" + t_case + " " + sum);
		}
	}

}
