package practice;

import java.util.LinkedList;
import java.util.Queue;
import java.util.Scanner;

public class Day3HW2638 {
	static int N, M;
	static int[][] map;
	static Queue<Integer> Q = new LinkedList<>();

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		N = sc.nextInt();
		M = sc.nextInt();
		map = new int[N][M];

		for (int i = 0; i < N; i++)
			for (int j = 0; j < M; j++)
				map[i][j] = sc.nextInt();

		bfs();
	}

	static boolean isItRemain() {
		for (int i = 0; i < N; i++)
			for (int j = 0; j < M; j++)
				if (map[i][j] > 0)
					return true;
		return false;
	}

	static void bfs() {
		while (isItRemain()) {
			innerSpace();

			int[][] copyMap = new int[N][M];
			for (int i = 0; i < N; i++)
				for (int j = 0; j < M; j++)
					copyMap[i][j] = map[i][j];

			for (int i = 0; i < N; i++)
				for (int j = 0; j < M; j++)
					if (map[i][j] == 1 && checkNeighbor(i, j, copyMap))
						map[i][j] -= 1;

			// // 임시 출력
			// for (int i = 0; i < N; i++) {
			// System.out.println();
			// for (int j = 0; j < M; j++)
			// if (map[i][j] < 0)
			// System.out.print(" " + map[i][j]);
			// else
			// System.out.print(" " + map[i][j]);
			// } // 여기까지
		}

		int min = Integer.MAX_VALUE;
		for (int i = 0; i < N; i++)
			for (int j = 0; j < M; j++)
				min = min > map[i][j] ? map[i][j] : min;
		System.out.println(Math.abs(min));
	}

	static boolean checkNeighbor(int i, int j, int[][] copyMap) {
		int tmp = 0;
		for (int k = 0; k < 4; k++) {
			int nx = i + x[k];
			int ny = j + y[k];
			if (boundary(nx, ny) && copyMap[nx][ny] < 0)
				tmp++;
		}
		if (tmp >= 2)
			return true;
		else
			return false;
	}

	static int[] x = { 1, 0, -1, 0 };
	static int[] y = { 0, -1, 0, 1 };

	static boolean boundary(int x, int y) {
		if (x < 0 || x >= N || y < 0 || y >= M)
			return false;
		return true;
	}

	static void innerSpace() {
		Q.offer(0);
		Q.offer(0);
		map[0][0] -= 1;
		boolean[][] isVisited = new boolean[N][M];
		isVisited[0][0] = true;

		while (!Q.isEmpty()) {
			int ui = Q.poll();
			int uj = Q.poll();

			for (int k = 0; k < 4; k++) {
				int ni = ui + x[k];
				int nj = uj + y[k];
				if (boundary(ni, nj) && map[ni][nj] <= 0 && !isVisited[ni][nj]) {
					map[ni][nj] -= 1;
					isVisited[ni][nj] = true;
					Q.offer(ni);
					Q.offer(nj);
				}
			}
		}
	}

}
