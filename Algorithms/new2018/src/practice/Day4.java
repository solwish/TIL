package practice;

import java.util.LinkedList;
import java.util.Queue;
import java.util.Scanner;

public class Day4 {
	static int N, M;
	static int[][] map;
	static boolean[][] isVisited;
	static int[] X = { 1, 0, -1, 0 };
	static int[] Y = { 0, -1, 0, 1 };
	static Queue<Integer> Q = new LinkedList<Integer>();
	static int max = Integer.MIN_VALUE;

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		N = sc.nextInt();
		M = sc.nextInt();
		map = new int[N][M];
		isVisited = new boolean[N][M];
		sc.nextLine();

		for (int i = 0; i < N; i++) {
			String s = sc.nextLine();
			for (int j = 0; j < M; j++)
				map[i][j] = s.charAt(j) == 'W' ? 0 : 1;// 0-바다 .1-육지
		}
		bfs();
		System.out.println(max - 2);
	}

	private static void bfs() {
		for (int i = 0; i < N; i++)
			for (int j = 0; j < M; j++)
				if (map[i][j] == 1)
					doQue(i, j);
	}

	private static void doQue(int x, int y) {
		int[][] copyMap = new int[N][M];
		for (int i = 0; i < N; i++)
			for (int j = 0; j < M; j++)
				copyMap[i][j] = map[i][j];

		copyMap[x][y] += 1;
		Q.offer(x);
		Q.offer(y);
		while (!Q.isEmpty()) {
			int si = Q.poll();
			int sj = Q.poll();
			for (int k = 0; k < 4; k++) {
				int ni = si + X[k];
				int nj = sj + Y[k];
				if (boundary(ni, nj) && copyMap[ni][nj] == 1) {
					Q.offer(ni);
					Q.offer(nj);
					copyMap[ni][nj] = copyMap[si][sj] + 1;
				}
			}
		}

		// // 출력체크
		// System.out.println();
		// for (int i = 0; i < N; i++) {
		// System.out.println();
		// for (int j = 0; j < M; j++)
		// System.out.print(copyMap[i][j] + " ");
		// }
		// // 출력체크

		int localMax = Integer.MIN_VALUE;
		for (int i = 0; i < N; i++)
			for (int j = 0; j < M; j++)
				localMax = copyMap[i][j] > localMax ? copyMap[i][j] : localMax;

		max = max < localMax ? localMax : max;
	}

	static boolean boundary(int i, int j) {
		if (i < 0 || i >= N)
			return false;
		if (j < 0 || j >= M)
			return false;
		return true;
	}
}
