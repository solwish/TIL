package basicD1D2;

import java.util.Scanner;

public class ZigzagNumber {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int T = sc.nextInt();

		for (int t_case = 1; t_case <= T; t_case++) {
			int sum = 0;
			int N = sc.nextInt();
			for (int i = 1; i <= N; i++)
				sum = (i % 2 == 1) ? sum + i : sum - i;
			System.out.println("#" + t_case + " " + sum);
		}
	}
	
}
