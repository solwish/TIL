package practice;

import java.util.Scanner;

public class Day6 {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int T = sc.nextInt();
		for (int i = 1; i <= T; i++) {
			int A, B, C;
			A = sc.nextInt();
			B = sc.nextInt();
			C = sc.nextInt();

			int tmp = Math.min(A, B);
			int bread = C / tmp;
			System.out.println("#" + i + " " + bread);
		}
	}

}
