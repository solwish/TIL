package practice;

import java.util.LinkedList;
import java.util.Queue;
import java.util.Scanner;

public class Day2HWbfsNdfs {
	static int N;

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		N = sc.nextInt();
		int M = sc.nextInt();
		int V = sc.nextInt();

		int[][] map = new int[N + 1][N + 1];
		int[] isVisited = new int[N + 1];

		for (int i = 0; i < M; i++) {
			int x = sc.nextInt();
			int y = sc.nextInt();
			map[x][y] = 1;
			map[y][x] = 1;
		}

		// dfs
		isVisited[V] = 1; // 1-방문 0-미방문
		dfs(V, map, isVisited);

		// init
		System.out.println();
		for (int i = 0; i <= N; i++)
			isVisited[i] = 0;

		// bfs
		Queue<Integer> Q = new LinkedList<>();
		isVisited[V] = 1;
		Q.offer(V);
		while (!Q.isEmpty()) {
			int u = Q.poll();
			System.out.print(u + " ");

			for (int i = 1; i <= N; i++) {
				if (map[u][i] == 1 && isVisited[i] == 0) {
					isVisited[i] = 1;
					Q.offer(i);
				}
			}
		}

	}

	static void dfs(int u, int[][] map, int[] isVisited) {
		System.out.print(u + " ");
		for (int i = 1; i <= N; i++) {
			if (map[u][i] == 1 && isVisited[i] == 0) {
				isVisited[i] = 1;
				dfs(i, map, isVisited);
			}
		}
	}
}
