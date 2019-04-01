package new2019;

import java.util.Scanner;

public class B11724 {
	static int N, M, map[][], cnt, start, visit[];

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		N = sc.nextInt();
		M = sc.nextInt();
		map = new int[N + 1][N + 1];
		visit = new int[N + 1];
		cnt = 0;

		int t1, t2;
		for (int i = 1; i <= M; i++) {
			t1 = sc.nextInt();
			t2 = sc.nextInt();
			map[t1][t2] = 1;
			map[t2][t1] = 1;
		}
		for (int i = 1; i <= N; i++) {
			start = i;
			for (int j = 1; j <= N; j++)
				if (map[start][j] == 1 && visit[i] == 0) {
					cnt++;
					dfs(j);
				}
		}
		for (int i = 1; i <= N; i++)
			if (visit[i] == 0)
				cnt++;
		System.out.println(cnt);

	}

	private static void dfs(int now) {
		visit[now] = cnt;
		for (int i = 1; i <= N; i++)
			if (map[now][i] == 1 && visit[i] == 0)
				dfs(i);
	}

}
