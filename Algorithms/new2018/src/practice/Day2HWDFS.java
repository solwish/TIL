package practice;

import java.io.BufferedReader;
import java.io.InputStreamReader;

public class Day2HWDFS {
	static int[] x = { -1, 0, 1, 0 };
	static int[] y = { 0, 1, 0, -1 };
	static int ans;
	static int[][] isVisited = new int[100][100];
	static int[][] map = new int[100][100];

	public static void main(String[] args) throws Exception {

		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		for (int t_case = 1; t_case <= 10; t_case++) {
			ans = 0;
			br.readLine();
			int sx = 0, sy = 0;

			for (int i = 0; i < 100; i++) {
				String s = br.readLine();
				for (int j = 0; j < 100; j++) {
					map[i][j] = Integer.parseInt(String.valueOf(s.charAt(j)));
					if (map[i][j] == 2) {
						sx = i;
						sy = j;
					}
					isVisited[i][j] = 0;
				}
			}
			dfs(sx, sy);
			System.out.println("#" + t_case + " " + ans);
		}
	}

	static void dfs(int ux, int uy) {
		if (map[ux][uy] == 3)
			ans = 1;
		else {
			isVisited[ux][uy] = -1;
			for (int i = 0; i < 4; i++) {
				int uux = ux + x[i], uuy = uy + y[i];
				if ((map[uux][uuy] == 0 || map[uux][uuy] == 3) && isVisited[uux][uuy] == 0)
					dfs(uux, uuy);
			}
		}
	}
}
