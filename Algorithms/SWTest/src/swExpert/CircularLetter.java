package swExpert;

import java.util.Scanner;

public class CircularLetter {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int T = sc.nextInt();
		sc.nextLine();

		for (int test = 1; test <= T; test++) {
			String s;
			s = sc.nextLine();
			char[] C = new char[s.length()];

			for (int i = 0; i < C.length; i++) {
				C[i] = s.charAt(i);
			}

			int ans = 1;
			int end = C.length;

			for (int i = 0; i < C.length / 2; i++) {
				end--;
				if (C[i] != C[end]) {
					ans = 0;
					break;
				}
			}
			System.out.println("#" + test + " " + ans);
		}
	}

}
