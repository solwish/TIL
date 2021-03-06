package swExpert;

import java.util.LinkedList;
import java.util.Queue;
import java.util.Scanner;

public class Ladder2 {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int T = 10;

		for (int test_case = 1; test_case <= T; test_case++) {
			int[][] A = new int[101][102];
			int[][] isVisit = new int[101][102];
			Queue<Integer> Q = new LinkedList<Integer>();
			int t_case = sc.nextInt();
			int answer = 0;

			for (int i = 0; i < 100; i++) {
				for (int j = 1; j < 101; j++) {
					A[i][j] = sc.nextInt();
				}
			}
			int[] start = new int[100];
			int sy = 0;
			for (int i = 1; i < 101; i++) {
				if (A[0][i] == 1)
					start[i - 1] = 1;
			}
			int min = Integer.MAX_VALUE;
			for (int x = 0; x < 100; x++) {
				if (start[x] == 1) {
					int cnt = 0;
					sy = x + 1;
					Q.offer(0);
					Q.offer(sy);
					for (int i = 0; i < 101; i++) {
						for (int j = 0; j < 102; j++) {
							isVisit[i][j] = A[i][j];
						}
					}

					while (!(Q.isEmpty())) {
						int ux = Q.poll();
						int uy = Q.poll();

						if (isVisit[ux][uy - 1] == 1 || isVisit[ux][uy + 1] == 1) {
							if (isVisit[ux][uy - 1] == 1) {
								isVisit[ux][uy - 1] = 7;
								Q.offer(ux);
								Q.offer(uy - 1);
								cnt++;
							}
							if (isVisit[ux][uy + 1] == 1) {
								isVisit[ux][uy + 1] = 7;
								Q.offer(ux);
								Q.offer(uy + 1);
								cnt++;
							}
						} else if (isVisit[ux + 1][uy] == 1) {
							isVisit[ux + 1][uy] = 7;
							Q.offer(ux + 1);
							Q.offer(uy);
							cnt++;
						}
					}
					if (min >= cnt) {
						min = cnt;
						answer = sy - 1;
					}
				}
			}
			System.out.println("#" + t_case + " " + answer);
		}
	}
}
