package practice;

import java.util.LinkedList;
import java.util.Queue;
import java.util.Scanner;

public class Day2 {
	static int l;

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int T = sc.nextInt();

		for (int t_case = 1; t_case <= T; t_case++) {
			l = sc.nextInt();
			int[][] A = new int[l][l];
			int[][] pie = new int[l][l];
			int[][] distance = new int[l][l];
			int[] ans = new int[100];
			Queue<Integer> Q = new LinkedList<Integer>();
			int sx, sy, vx, vy;
			sx = sc.nextInt();
			sy = sc.nextInt();
			vx = sc.nextInt();
			vy = sc.nextInt();

			A[vx][vy] = 2; // ³¡Á¡

			Q.offer(sx);
			Q.offer(sy);
			pie[sx][sy] = -1;
			while (!(Q.isEmpty())) {
				int ux = Q.poll();
				int uy = Q.poll();
				if (isInBoundary(ux, uy) && A[ux][uy] == 2)
					continue;
				if (isInBoundary(ux + 1, uy + 2) && pie[ux + 1][uy + 2] == 0) {
					pie[ux + 1][uy + 2] = -1;
					distance[ux + 1][uy + 2] = distance[ux][uy] + 1;
					Q.offer(ux + 1);
					Q.offer(uy + 2);
				}
				if (isInBoundary(ux + 1, uy - 2) && pie[ux + 1][uy - 2] == 0) {
					pie[ux + 1][uy - 2] = -1;
					distance[ux + 1][uy - 2] = distance[ux][uy] + 1;
					Q.offer(ux + 1);
					Q.offer(uy - 2);
				}
				if (isInBoundary(ux - 1, uy + 2) && pie[ux - 1][uy + 2] == 0) {
					pie[ux - 1][uy + 2] = -1;
					distance[ux - 1][uy + 2] = distance[ux][uy] + 1;
					Q.offer(ux - 1);
					Q.offer(uy + 2);
				}
				if (isInBoundary(ux - 1, uy - 2) && pie[ux - 1][uy - 2] == 0) {
					pie[ux - 1][uy - 2] = -1;
					distance[ux - 1][uy - 2] = distance[ux][uy] + 1;
					Q.offer(ux - 1);
					Q.offer(uy - 2);
				}
				if (isInBoundary(ux + 2, uy + 1) && pie[ux + 2][uy + 1] == 0) {
					pie[ux + 2][uy + 1] = -1;
					distance[ux + 2][uy + 1] = distance[ux][uy] + 1;
					Q.offer(ux + 2);
					Q.offer(uy + 1);
				}
				if (isInBoundary(ux + 2, uy - 1) && pie[ux + 2][uy - 1] == 0) {
					pie[ux + 2][uy - 1] = -1;
					distance[ux + 2][uy - 1] = distance[ux][uy] + 1;
					Q.offer(ux + 2);
					Q.offer(uy - 1);
				}
				if (isInBoundary(ux - 2, uy + 1) && pie[ux - 2][uy + 1] == 0) {
					pie[ux - 2][uy + 1] = -1;
					distance[ux - 2][uy + 1] = distance[ux][uy] + 1;
					Q.offer(ux - 2);
					Q.offer(uy + 1);
				}
				if (isInBoundary(ux - 2, uy - 1) && pie[ux - 2][uy - 1] == 0) {
					pie[ux - 2][uy - 1] = -1;
					distance[ux - 2][uy - 1] = distance[ux][uy] + 1;
					Q.offer(ux - 2);
					Q.offer(uy - 1);
				}
			}
			System.out.println(distance[vx][vy]);
		}
	}

	// static void dfs(int x, int y) {
	//	
	// }

	static boolean isInBoundary(int x, int y) {
		if (x < 0 || y < 0 || x >= l || y >= l)
			return false;
		else
			return true;
	}
}
