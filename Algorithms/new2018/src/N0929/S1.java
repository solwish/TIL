package N0929;

import java.util.Scanner;
import java.util.StringTokenizer;
import java.util.Vector;

public class S1 {
	static int money = 20000;
	static Vector<Integer> V = new Vector<>();

	static boolean hasMoney(int m) {
		if (money - m < 0)
			return false;
		return true;
	}

	public static void main(String... args) {
		String input = new Scanner(System.in).nextLine().trim();
		final StringTokenizer tokenizer = new StringTokenizer(input);
		while (tokenizer.hasMoreTokens()) {

			int distance = Integer.parseInt(tokenizer.nextToken());
			V.add(distance);
		}

		for (int i = 0; i < V.size(); i++) {
			int dis = V.get(i);

			if (0 < dis && dis <= 40) {
				if (!hasMoney(dis))
					break;
				money -= 720;
			} else if (40 < dis) {
				int m = 0;
				if (((dis - 40) % 8) > 0)
					m = 720 + (((((dis - 40) / 8) + 1) * 80));
				else
					m = 720 + (((dis - 40) / 8) * 80);
				if (!hasMoney(m))
					break;
				money -= m;
			}
		}
		System.out.println(money);
	}

}
