package swExpert;

import java.util.LinkedList;
import java.util.Queue;
import java.util.Scanner;

public class BFSPracticeEx02 {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int T = 10;

		for (int test_case = 1; test_case <= T; test_case++) {
			int[][] A = new int[16][16];
			int[][] pie = new int[16][16]; // predecessor
			Queue<Integer> Q = new LinkedList<Integer>();

			int t_case = sc.nextInt();
			String s;
			sc.nextLine();

			for (int i = 0; i < 16; i++) {
				s = sc.nextLine();
				for (int j = 0; j < 16; j++) {
					A[i][j] = ((int) s.charAt(j)) - 48;
				}
			}

			for (int i = 0; i < 16; i++) {
				for (int j = 0; j < 16; j++) {
					pie[i][j] = -1;
				}
			}

			int sx = 0, sy = 0; // 시작점.
			int vx = 0, vy = 0; // 끝점.

			for (int i = 0; i < 16; i++) {
				for (int j = 0; j < 16; j++) {
					if (A[i][j] == 2) {
						sx = i;
						sy = j;
					}
					if (A[i][j] == 3) {
						vx = i;
						vy = j;
					}
				}
			}

			Q.offer(sx);
			Q.offer(sy);

			A[sx][sy] = 1;
			A[vx][vy] = 0; // 끝점도 0으로 만들어줘야 아래에서 처리가능

			while (!(Q.isEmpty())) {
				int ux = Q.poll();
				int uy = Q.poll();

				if (A[ux - 1][uy] == 0) {
					A[ux - 1][uy] = 1;
					pie[ux - 1][uy] = 0; // 전경로 있었나 check
					Q.offer(ux - 1);
					Q.offer(uy);
				}
				if (A[ux + 1][uy] == 0) {
					A[ux + 1][uy] = 1;
					pie[ux + 1][uy] = 0;
					Q.offer(ux + 1);
					Q.offer(uy);
				}
				if (A[ux][uy - 1] == 0) {
					A[ux][uy - 1] = 1;
					pie[ux][uy - 1] = 0;
					Q.offer(ux);
					Q.offer(uy - 1);
				}
				if (A[ux][uy + 1] == 0) {
					A[ux][uy + 1] = 1;
					pie[ux][uy + 1] = 0;
					Q.offer(ux);
					Q.offer(uy + 1);
				}
			}

			System.out.print("#" + t_case + " ");
			if (pie[vx][vy] == -1) {
				System.out.println("0");
			} else {
				System.out.println("1");
			}
		}
	}
}
