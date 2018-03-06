package swExpert;

import java.util.Scanner;
import java.util.StringTokenizer;

public class PerfectSuffle {

	public static void main(String args[]) throws Exception {
		Scanner sc = new Scanner(System.in);
		int T;
		T = sc.nextInt();
		for (int test_case = 1; test_case <= T; test_case++) {
			int N = sc.nextInt();
			sc.nextLine();
			StringTokenizer st = new StringTokenizer(sc.nextLine());
			String ans[] = new String[N];
			String s[] = new String[N];

			for (int i = 0; i < N; i++)
				s[i] = st.nextToken();

			int start = 0;
			int half = s.length / 2;
			if (N % 2 == 0) {
				for (int i = 0; i < N; i++)
					if (i % 2 == 0)
						ans[i] = s[start++];
					else
						ans[i] = s[half++];
			} else {
				int tmp = half;
				half += 1;
				for (int i = 0; i < N - 1; i++)
					if (i % 2 == 0)
						ans[i] = s[start++];
					else
						ans[i] = s[half++];
				ans[N - 1] = s[tmp];
			}

			System.out.print("#" + test_case);
			for (int i = 0; i < N; i++)
				System.out.print(" " + ans[i]);
			System.out.println();
		}
	}

}
