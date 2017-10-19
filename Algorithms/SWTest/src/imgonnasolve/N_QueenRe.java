package imgonnasolve;

import java.util.Scanner;

public class N_QueenRe {
	static int N;
	static boolean[] dia1 = new boolean[40];
	static boolean[] dia2 = new boolean[40];
	static boolean[] row = new boolean[20];
	static int ans;

	static void dfs(int y, int cnt) {
		if (cnt == N) {
			ans++;
			return;
		}

		for (int i = 0; i < N; i++) {
			if (row[i] || dia1[y + i] || dia2[N - i + y - 1])
				continue;

			row[i] = true;
			dia1[y + i] = true;
			dia2[N - i + y - 1] = true;

			dfs(y + 1, cnt + 1);

			row[i] = false;
			dia1[y + i] = false;
			dia2[N - i + y - 1] = false;
		}
	}

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int T = sc.nextInt();

		for (int t_case = 1; t_case <= T; t_case++) {
			N = sc.nextInt();
			ans = 0;
			dfs(0, 0);

			System.out.println("#" + t_case + " " + ans);
		}

	}

}
