package new2019;

import java.util.Scanner;

public class Pract {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int T = sc.nextInt();

		for (int tc = 1; tc <= T; tc++) {
			String s = sc.nextLine();
			int hn = sc.nextInt();
			boolean hp[] = new boolean[hn];
			for (int i = 0; i < hn; i++)
				hp[sc.nextInt()] = true;

			int n = s.length() + hn;
		}
	}

}
