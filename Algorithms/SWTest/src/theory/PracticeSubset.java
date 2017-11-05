package theory;

import java.io.BufferedReader;
import java.io.InputStreamReader;

public class PracticeSubset {
	static char[] Array;
	static boolean[] include;
	static int N, cnt;

	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		int T = Integer.parseInt(br.readLine());

		for (int t_case = 1; t_case <= T; t_case++) {
			N = Integer.parseInt(br.readLine());
			Array = new char[N + 1];
			include = new boolean[N + 1];

			for (int i = 1; i <= N; i++)
				Array[i] = String.valueOf(i).charAt(0);
			cnt = 0;
			subset(0);
			System.out.println("ºÎºÐÁýÇÕ ÃÑ °¹¼ö : " + cnt);
		}
	}

	static void subset(int k) {
		if (k == N) {
			boolean temp = true;
			for (int i = 1; i <= N; i++)
				if (include[i]) {
					System.out.print(Array[i] + " ");
					temp = false;
				}
			if (temp)
				System.out.println("°øÁýÇÕ");
			else
				System.out.println();
			cnt++;
		} else {
			include[k + 1] = true;
			subset(k + 1);
			include[k + 1] = false;
			subset(k + 1);
		}

	}

}
