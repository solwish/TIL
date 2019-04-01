package new2019;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class B11403 {
	static int N, map[][], start, ans[][];
	static boolean isVisited[];

	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		N = Integer.parseInt(br.readLine());

		map = new int[N][N];
		ans = new int[N][N];

		for (int i = 0; i < N; i++) {
			StringTokenizer st = new StringTokenizer(br.readLine());
			for (int j = 0; j < N; j++) {
				map[i][j] = Integer.parseInt(st.nextToken());
			}
		}

		for (int i = 0; i < N; i++) {
			start = i;
			for (int j = 0; j < N; j++)
				if (map[i][j] == 1) {
					isVisited = new boolean[N];
					dfs(j);
				}
		}

		StringBuffer sb = new StringBuffer();
		for (int i = 0; i < N; i++) {
			for (int j = 0; j < N; j++) {
				sb.append(String.valueOf(ans[i][j]));
				sb.append(" ");
			}
			sb.append("\n");
		}
		System.out.println(sb);

	}

	private static void dfs(int now) {
		isVisited[now] = true;
		ans[start][now] = 1;

		for (int i = 0; i < N; i++) {
			if (map[now][i] == 1 && !isVisited[i]) {
				dfs(i);
			}
		}
	}

}
