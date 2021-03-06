package swExpert;

import java.util.LinkedList;
import java.util.Queue;
import java.util.Scanner;

class Ax {
	public int x;
	public int y;

	public Ax(int x, int y) {
		this.x = x;
		this.y = y;
	}
}

public class HsProgramCheck {

	static int[] xAxis = { 0, -1, 0, 1 };
	static int[] yAxis = { -1, 0, 1, 0 };
	static int limit;

	public static void main(String[] args) throws Exception {
		Scanner sc = new Scanner(System.in);
		int T = sc.nextInt();

		for (int test_case = 1; test_case <= T; test_case++) {
			int n = sc.nextInt();
			int m = sc.nextInt();
			String s;
			sc.nextLine();
			char[][] A = new char[n][m];
			int memory = 0;
			Queue<Ax> Q = new LinkedList<Ax>();
			boolean isFinish = false;
			boolean check = false;
			int[][] isVisit1 = new int[n][m];
			int[][] isVisit2 = new int[n][m];
			int[][] isVisit3 = new int[n][m];
			int[][] isVisit4 = new int[n][m];

			for (int i = 0; i < n; i++) {
				s = sc.nextLine();
				for (int j = 0; j < m; j++) {
					A[i][j] = s.charAt(j);
					if (A[i][j] == '@')
						check = true;
				}
			}
			// if (test_case == 40) {
			// for (int i = 0; i < n; i++) {
			// for (int j = 0; j < m; j++) {
			// System.out.print(A[i][j]);
			// }
			// System.out.println();
			// }
			// }

			Ax start = new Ax(0, 0);
			Q.offer(start);
			char direction = '>';
			limit = 0;

			if (check)
				isFinish = search(isVisit1, isVisit2, isVisit3, isVisit4, n, m, A, memory, Q, isFinish, direction,
						limit);

			if (isFinish)
				System.out.println("#" + test_case + " " + "YES");
			else
				System.out.println("#" + test_case + " " + "NO");
		}

	}

	private static boolean search(int[][] isVisit1, int[][] isVisit2, int[][] isVisit3, int[][] isVisit4, int n, int m,
			char[][] A, int memory, Queue<Ax> Q, boolean isFinish, char direction, int limit) {
		while (!(isFinish) && !Q.isEmpty() && limit < 100) {
			limit++;
			Ax axis = Q.poll();
			int ux = axis.x;
			int uy = axis.y;
			if (A[ux][uy] == '<' || A[ux][uy] == '>' || A[ux][uy] == '^' || A[ux][uy] == 'v') {
				direction = A[ux][uy];
				axis = makeAxis(n, m, direction, axis, ux, uy);
				Q.offer(axis);
			} else if (A[ux][uy] == '_' || A[ux][uy] == '|' || A[ux][uy] == '?' || A[ux][uy] == '.') {
				switch (A[ux][uy]) {
				case '_':
					if (memory == 0) {
						direction = '>';
						axis = makeAxis(n, m, direction, axis, ux, uy);
						Q.offer(axis);
					} else {
						direction = '<';
						axis = makeAxis(n, m, direction, axis, ux, uy);
						Q.offer(axis);
					}
					break;
				case '|':
					if (memory == 0) {
						direction = 'v';
						axis = makeAxis(n, m, direction, axis, ux, uy);
						Q.offer(axis);
					} else {
						direction = '^';
						axis = makeAxis(n, m, direction, axis, ux, uy);
						Q.offer(axis);
					}
					break;

				case '?':
					Ax temp = new Ax(ux, uy);
					if (isVisit1[ux][uy] != 1 && !isFinish) {
						isVisit1[ux][uy] = 1;
						direction = '>';
						temp = makeAxis(n, m, direction, axis, ux, uy);
						Q.offer(temp);
						isFinish = search(isVisit1, isVisit2, isVisit3, isVisit4, n, m, A, memory, Q, isFinish,
								direction, limit);
						Q.clear();
					}
					if (isVisit2[ux][uy] != 2 && !isFinish) {
						isVisit2[ux][uy] = 2;
						direction = '<';
						temp = makeAxis(n, m, direction, axis, ux, uy);
						Q.offer(temp);
						isFinish = search(isVisit1, isVisit2, isVisit3, isVisit4, n, m, A, memory, Q, isFinish,
								direction, limit);
						Q.clear();
					}
					if (isVisit3[ux][uy] != 3 && !isFinish) {
						isVisit3[ux][uy] = 3;
						direction = 'v';
						temp = makeAxis(n, m, direction, axis, ux, uy);
						Q.offer(temp);
						isFinish = search(isVisit1, isVisit2, isVisit3, isVisit4, n, m, A, memory, Q, isFinish,
								direction, limit);
						Q.clear();
					}
					if (isVisit4[ux][uy] != 4 && !isFinish) {
						isVisit4[ux][uy] = 4;
						direction = '^';
						temp = makeAxis(n, m, direction, axis, ux, uy);
						Q.offer(temp);
						isFinish = search(isVisit1, isVisit2, isVisit3, isVisit4, n, m, A, memory, Q, isFinish,
								direction, limit);
						Q.clear();
					}
					break;

				case '.':
					axis = makeAxis(n, m, direction, axis, ux, uy);
					Q.offer(axis);
					break;
				default:
					break;
				}
			} else if (A[ux][uy] == '+' || A[ux][uy] == '-' || A[ux][uy] == '@') {
				switch (A[ux][uy]) {
				case '+':
					memory += 1;
					if (memory > 15)
						memory = 0;
					axis = makeAxis(n, m, direction, axis, ux, uy);
					Q.offer(axis);
					break;
				case '-':
					memory -= 1;
					if (memory < 0)
						memory = 15;
					axis = makeAxis(n, m, direction, axis, ux, uy);
					Q.offer(axis);
					break;
				case '@':
					isFinish = true;
					break;
				default:
					break;
				}
			} else {
				memory = Integer.parseInt(String.valueOf(A[ux][uy]));
				axis = makeAxis(n, m, direction, axis, ux, uy);
				Q.offer(axis);
			}
		}
		return isFinish;
	}

	private static Ax makeAxis(int n, int m, char direction, Ax axis, int ux, int uy) {
		switch (direction) {
		case '>':
			uy = uy + 1;
			if (uy >= m)
				uy = 0;
			break;
		case '<':
			uy = uy - 1;
			if (uy < 0)
				uy = m - 1;
			break;
		case '^':
			ux = ux - 1;
			if (ux < 0)
				ux = n - 1;
			break;
		case 'v':
			ux = ux + 1;
			if (ux >= n)
				ux = 0;
			break;
		default:
			break;
		}
		axis.x = ux;
		axis.y = uy;
		return axis;
	}

}
