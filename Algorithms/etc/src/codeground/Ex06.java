package codeground;

import java.util.Scanner;

public class Ex06 {

	public static void main(String args[]) throws Exception {
		Scanner sc = new Scanner(System.in);
		int T = sc.nextInt();
		
		for (int test_case = 0; test_case < T; test_case++) {
			int N = sc.nextInt();
			int K = sc.nextInt();
			int x = 1;
			int y = 1;
			long ans = 1;
			String s = sc.next();
			for (int i = 0; i < K; i++) {
				char c = s.charAt(i);

				if (x <= N && c == 'L')
					y -= 1;
				if (x < N && c == 'R')
					y += 1;
				if (x > N && c == 'U')
					y += 1;
				if (x >= N && c == 'D')
					y -= 1;

				if (c == 'D' || c == 'R')
					x += 1;
				else
					x -= 1;

				int base = 0;
				if (x <= N + 1)
					base = x * (x - 1) / 2;
				else
					base = (N * (N - 1) + (3 * N - x + 1) * (x - N)) / 2;

				int remainder = 0;
				if (x % 2 == 1)
					remainder = y;
				else
					remainder = (x <= N ? x : 2 * N - x) - y + 1;

				int next = base + remainder;
				ans += next;

			}
			System.out.println("Case #" + (test_case + 1));
			System.out.println(ans);
		}

	}

}
