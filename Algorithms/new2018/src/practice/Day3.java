package practice;

import java.util.LinkedList;
import java.util.Queue;
import java.util.Scanner;

public class Day3 {
	static int[] x = { 1, 0, -1, 0 };
	static int[] y = { 0, 1, 0, -1 };
	static int M, N;
	static int[][] box;

	static boolean boundary(int i, int j) {
		if (i < 0 || i >= N)
			return false;
		if (j < 0 || j >= M)
			return false;
		return true;
	}

	// 토마토 남아있는지 체크
	static boolean checkTomato() {
		for (int i = 0; i < N; i++)
			for (int j = 0; j < M; j++)
				if (box[i][j] == 0)
					return true; // 토마토가 남아있을경우
		return false;
	}

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);

		M = sc.nextInt();
		N = sc.nextInt();
		box = new int[N][M];
		Queue<Integer> Q = new LinkedList<Integer>();

		for (int i = 0; i < N; i++)
			for (int j = 0; j < M; j++) {
				box[i][j] = sc.nextInt();
				if (box[i][j] == 1) {
					Q.offer(i);
					Q.offer(j);
				}
			}

		while (!Q.isEmpty()) {
			int ui = Q.poll();
			int uj = Q.poll();
			for (int k = 0; k < 4; k++) {
				int ni = ui + x[k];
				int nj = uj + y[k];
				if (boundary(ni, nj) && box[ni][nj] == 0) {
					box[ni][nj] = box[ui][uj] + 1;
					Q.offer(ni);
					Q.offer(nj);
				}
			}
		}
		int max = Integer.MIN_VALUE;
		for (int i = 0; i < N; i++)
			for (int j = 0; j < M; j++)
				if (max < box[i][j])
					max = box[i][j];
		if (checkTomato())
			System.out.println(-1);
		else
			System.out.println(max - 1);
	}

}
