package swExpert;

import java.util.LinkedList;
import java.util.Queue;
import java.util.Scanner;

public class BFSPracticeExAdvanced01 {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int T = 10;

		for (int test_case = 1; test_case <= T; test_case++) {
			int[][] A = new int[101][102];
			int[][] isVisit = new int[101][102];
			Queue<Integer> Q = new LinkedList<Integer>();

			int t_case = sc.nextInt();

			for (int i = 0; i < 100; i++) {
				for (int j = 1; j < 101; j++) {
					A[i][j] = sc.nextInt();
				}
			}

			int[] start = new int[100];
			int sx = 0, sy = 0; // 시작점.
			int vx = 0, vy = 0; // 끝점.

			for (int i = 1; i < 101; i++) {
				if (A[0][i] == 1) {
					start[i - 1] = 1;
				}
				if (A[99][i] == 2) {
					vx = 99;
					vy = i;
				}
			}

			for (int x = 0; x < 100; x++) {
				if (start[x] == 1) {
					sy = x + 1;

					Q.offer(0);
					Q.offer(sy);
					// System.arraycopy(A, 0, isVisit, 0, A.length); 레퍼런스값을 복사해오나 봄. A값도 바뀜. 안되드라.
					for (int i = 0; i < 101; i++) {
						for (int j = 0; j < 102; j++) {
							isVisit[i][j] = A[i][j];
						}
					}
					isVisit[sx][sy] = 7;

					while (!(Q.isEmpty())) {
						int ux = Q.poll();
						int uy = Q.poll();

						if (isVisit[ux][uy - 1] == 1 || isVisit[ux][uy + 1] == 1) {
							if (isVisit[ux][uy - 1] == 1) {
								isVisit[ux][uy - 1] = 7;
								Q.offer(ux);
								Q.offer(uy - 1);
							}
							if (isVisit[ux][uy + 1] == 1) {
								isVisit[ux][uy + 1] = 7;
								Q.offer(ux);
								Q.offer(uy + 1);
							}
						} else if (isVisit[ux + 1][uy] == 1) {
							isVisit[ux + 1][uy] = 7;
							Q.offer(ux + 1);
							Q.offer(uy);
						} else if (isVisit[ux + 1][uy] == 2) {
							isVisit[ux + 1][uy] = 5;
						}
					}
					// 지나간 경로보고 싶을때.
					// for (int i = 0; i < 101; i++) {
					// for (int j = 0; j < 102; j++) {
					// System.out.print(isVisit[i][j] + " ");
					// }
					// System.out.println();
					// }
					// System.out.println();
					// System.out.println();

					if (isVisit[vx][vy] == 5)
						break;
				}
			}

			System.out.println("#" + t_case + " " + (sy - 1));
		}
	}
}
