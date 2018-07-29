package practice;

import java.util.LinkedList;
import java.util.Queue;
import java.util.Scanner;

public class Day3HW14502 {
	static int[][] map;
	static int N, M;
	static int max = Integer.MIN_VALUE;
	static Queue<Integer> Q = new LinkedList<>();
	static int[] x = { 1, 0, -1, 0 };
	static int[] y = { 0, -1, 0, 1 };

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		N = sc.nextInt();
		M = sc.nextInt();
		map = new int[N][M];

		for (int i = 0; i < N; i++)
			for (int j = 0; j < M; j++)
				map[i][j] = sc.nextInt();

		dfs(0);
		System.out.println(max);
	}

	static void dfs(int cnt) {
		if (cnt == 3) {
			bfs();
		} else {
			for (int i = 0; i < N; i++)
				for (int j = 0; j < M; j++)
					if (map[i][j] == 0) {
						map[i][j] = 1;
						dfs(cnt + 1);
						map[i][j] = 0;
					}
		}
	}

	static void Qinit() {
		for (int i = 0; i < N; i++)
			for (int j = 0; j < M; j++)
				if (map[i][j] == 2) {
					Q.offer(i);
					Q.offer(j);
				}
	}

	static boolean boundary(int i, int j) {
		if (i < 0 || i >= N || j < 0 || j >= M)
			return false;
		return true;
	}

	static void bfs() {
		Qinit();
		int[][] tmpMap = new int[N][M];
		for (int i = 0; i < N; i++)
			for (int j = 0; j < M; j++)
				tmpMap[i][j] = map[i][j];

		while (!Q.isEmpty()) {
			int ui = Q.poll();
			int uj = Q.poll();

			for (int k = 0; k < 4; k++) {
				int ni = ui + x[k];
				int nj = uj + y[k];
				if (boundary(ni, nj) && map[ni][nj] == 0) {
					map[ni][nj] = 2;
					Q.offer(ni);
					Q.offer(nj);
				}
			}
		}
		int count = 0;
		for (int i = 0; i < N; i++)
			for (int j = 0; j < M; j++)
				if (map[i][j] == 0)
					count++;
		if (max < count)
			max = count;

		map = tmpMap;
	}

}
