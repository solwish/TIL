package basicD1D2;

import java.util.Scanner;

public class Game369 {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int num = sc.nextInt();
		boolean flag = true;
		int index;

		for (int i = 1; i <= num; i++) {
			flag = true;
			int tmp = 0;
			String s = String.valueOf(i);

			index = 0;
			while (true) {
				tmp = s.indexOf('3', index);
				if (tmp != -1) {
					System.out.print("-");
					flag = false;
					index = tmp + 1;
				} else
					break;
			}
			
			index = 0;
			while (true) {
				tmp = s.indexOf('6', index);
				if (tmp != -1) {
					System.out.print("-");
					flag = false;
					index = tmp + 1;
				} else
					break;
			}

			index = 0;
			while (true) {
				tmp = s.indexOf('9', index);
				if (tmp != -1) {
					System.out.print("-");
					flag = false;
					index = tmp + 1;
				} else
					break;
			}

			if (flag)
				System.out.print(i);
			System.out.print(" ");
		}

	}

}
