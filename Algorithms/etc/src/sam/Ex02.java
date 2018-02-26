package sam;

import java.io.BufferedReader;
import java.io.InputStreamReader;

public class Ex02 {

	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		int T = Integer.parseInt(br.readLine());

		for (int t_case = 1; t_case <= T; t_case++) {
			String input = br.readLine();
			int a = Integer.parseInt(input);
			if (checkReverse(a + findReverse(a)))
				System.out.println("yes");
			else
				System.out.println("no");

		}
	}

	private static int findReverse(int a) {
		int b = 0;

		while (true) {
			if (a == 0)
				break;
			else {
				b = b * 10 + a % 10;
				a = a / 10;
			}
		}
		return b;
	}

	private static boolean checkReverse(int a) {
		int b = findReverse(a);
		if (a == b)
			return true;
		else
			return false;
	}

}
