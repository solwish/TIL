package sam;

import java.util.Scanner;

public class Ex11 {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int T = sc.nextInt();

		for (int t_case = 1; t_case <= T; t_case++) {
			int C = sc.nextInt();
			int R = sc.nextInt();
			int money = R - C;

			int[] a = new int[8];

			while (money >= 50000) {
				money -= 50000;
				a[0]++;
			}
			while (money >= 10000) {
				money -= 10000;
				a[1]++;
			}
			while (money >= 5000) {
				money -= 5000;
				a[2]++;
			}
			while (money >= 1000) {
				money -= 1000;
				a[3]++;
			}
			while (money >= 500) {
				money -= 500;
				a[4]++;
			}
			while (money >= 100) {
				money -= 100;
				a[5]++;
			}
			while (money >= 50) {
				money -= 50;
				a[6]++;
			}
			while (money >= 10) {
				money -= 10;
				a[7]++;
			}

			System.out.print("#" + t_case + " ");
			for (int i = 0; i < 8; i++) {
				System.out.print(a[i] + " ");
			}
		}
	}

}
