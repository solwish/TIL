package practice;

import java.util.Scanner;

public class Day3HW15686 {
	static int[][] map;
	static int N, M;
	static int cnt;
	static int[][] chicken; // 전체 치킨집 위치

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		N = sc.nextInt();
		M = sc.nextInt();
		map = new int[N + 1][N + 1];
		cnt = 0; // 전체 치킨집 수
		for (int i = 1; i <= N; i++)
			for (int j = 1; j <= N; j++) {
				map[i][j] = sc.nextInt();
				if (map[i][j] == 2)
					cnt++;
			}
		chicken = new int[2][cnt];
		int tmp = 0;
		for (int i = 1; i <= N; i++)
			for (int j = 1; j <= N; j++)
				if (map[i][j] == 2) {
					chicken[0][tmp] = i;
					chicken[1][tmp] = j;
					tmp++;
					map[i][j] = 0;
				}
		dfs(0, 0);
		System.out.println(ans);
	}

	private static void dfs(int num, int start) {
		if (num == M)
			check();
		else
			for (int i = start; i < cnt; i++) {
				int x = chicken[0][i];
				int y = chicken[1][i];
				map[x][y] = 2;
				dfs(num + 1, i + 1);
				map[x][y] = 0;
			}
	}

	static int sum = 0;
	static int ans = Integer.MAX_VALUE;

	private static void check() {
		// for (int i = 1; i <= N; i++) {
		// for (int j = 1; j <= N; j++)
		// System.out.print(map[i][j] + " ");
		// System.out.println();
		// }
		// System.out.println();
		sum = 0; // init
		int[][] location = new int[2][M]; // 현재 지도의 치킨집 위치
		int tmp = 0;
		for (int i = 1; i <= N; i++)
			for (int j = 1; j <= N; j++)
				if (map[i][j] == 2) {
					location[0][tmp] = i;
					location[1][tmp] = j;
					tmp++;
				}
		for (int i = 1; i <= N; i++)
			for (int j = 1; j <= N; j++)
				if (map[i][j] == 1) {
					int localMin = Integer.MAX_VALUE;
					for (int k = 0; k < M; k++) {
						int ti = Math.abs(i - location[0][k]);
						int tj = Math.abs(j - location[1][k]);
						if (ti + tj < localMin)
							localMin = ti + tj;
					}
					sum += localMin;
				}
		ans = sum < ans ? sum : ans;
	}

}
