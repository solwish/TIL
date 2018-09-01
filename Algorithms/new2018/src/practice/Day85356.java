package practice;

import java.util.Scanner;

public class Day85356 {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int T = sc.nextInt();
		sc.nextLine();
		for (int t_case = 1; t_case <= T; t_case++) {
			String ans = "";
			String s1 = sc.nextLine(), s2 = sc.nextLine(), s3 = sc.nextLine(), s4 = sc.nextLine(), s5 = sc.nextLine();
			for (int i = 0; i < 15; i++) {
				if (i < s1.length())
					ans += s1.charAt(i);
				if (i < s2.length())
					ans += s2.charAt(i);
				if (i < s3.length())
					ans += s3.charAt(i);
				if (i < s4.length())
					ans += s4.charAt(i);
				if (i < s5.length())
					ans += s5.charAt(i);
			}
			System.out.println("#" + t_case + " " + ans);
		}
	}

}
