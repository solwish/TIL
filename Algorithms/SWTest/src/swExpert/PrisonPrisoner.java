package swExpert;

import java.util.LinkedList;
import java.util.Queue;
import java.util.Scanner;

public class PrisonPrisoner {

	static int[] xAxis = { 0, -1, 0, 1 };
	static int[] yAxis = { -1, 0, 1, 0 };
	static Queue<Axisz> Q = new LinkedList<Axisz>();

	public static void main(String[] args) throws Exception {
		Scanner sc = new Scanner(System.in);
		int T = sc.nextInt();

		for (int test_case = 1; test_case <= T; test_case++) {
			int N = sc.nextInt();
			int M = sc.nextInt();
			int R = sc.nextInt(); // 맨홀 세로 위치
			int C = sc.nextInt(); // 맨홀 가로 위치
			int L = sc.nextInt(); // 시간

			int map[][] = new int[N][M];
			int[][] d = new int[N][M];

			for (int i = 0; i < N; i++) {
				for (int j = 0; j < M; j++) {
					map[i][j] = sc.nextInt();
					d[i][j] = -1;
				}
			}

			d[R][C] = 1;
			Axisz axis = new Axisz(R, C);
			Q.offer(axis);
			while (!Q.isEmpty()) {
				// System.out.println(Q.element().x + " " + Q.element().y);
				Axisz temp = Q.poll();
				int ux = temp.x;
				int uy = temp.y;

				switch (map[ux][uy]) {
				case 1:
					for (int i = 0; i < 4; i++)
						findWay(map, N, M, d, Q, temp, ux, uy, i);
					break;
				case 2:
					for (int i = 1; i < 4; i = i + 2)
						findWay(map, N, M, d, Q, temp, ux, uy, i);
					break;
				case 3:
					for (int i = 0; i < 4; i = i + 2)
						findWay(map, N, M, d, Q, temp, ux, uy, i);
					break;
				case 4:
					for (int i = 1; i < 3; i++)
						findWay(map, N, M, d, Q, temp, ux, uy, i);
					break;
				case 5:
					for (int i = 2; i < 4; i++)
						findWay(map, N, M, d, Q, temp, ux, uy, i);
					break;
				case 6:
					for (int i = 0; i < 4; i = i + 3)
						findWay(map, N, M, d, Q, temp, ux, uy, i);
					break;
				case 7:
					for (int i = 0; i < 2; i++)
						findWay(map, N, M, d, Q, temp, ux, uy, i);
					break;
				default:
					break;
				}
			}
			int cnt = 0;
			for (int i = 0; i < N; i++)
				for (int j = 0; j < M; j++)
					if (d[i][j] <= L && 1 <= d[i][j])
						cnt += 1;

			// for (int i = 0; i < N; i++) {
			// for (int j = 0; j < M; j++) {
			// if (d[i][j] == -1)
			// d[i][j] = 0;
			// System.out.print(d[i][j] + " ");
			// }
			// System.out.println();
			// }

			System.out.println("#" + test_case + " " + cnt);
		}
	}

	private static void findWay(int[][] map, int N, int M, int[][] d, Queue<Axisz> Q, Axisz temp, int ux, int uy,
			int i) {
		int vx = ux + xAxis[i];
		int vy = uy + yAxis[i];

		if (vx >= 0 && vx < N && vy < M && vy >= 0 && isPossible(map[vx][vy], i)) {
			if (d[vx][vy] == -1 && map[vx][vy] != 0) {
				d[vx][vy] = d[ux][uy] + 1;

				Q.offer(new Axisz(vx, vy));
			}
		}
	}

	static boolean isPossible(int map, int i) {
		switch (map) {
		case 1:
			return true;
		case 2:
			if (i == 1 || i == 3)
				return true;
			return false;
		case 3:
			if (i == 0 || i == 2)
				return true;
			return false;
		case 4:
			if (i == 0 || i == 3)
				return true;
			return false;
		case 5:
			if (i == 0 || i == 1)
				return true;
			return false;
		case 6:
			if (i == 1 || i == 2)
				return true;
			return false;
		case 7:
			if (i == 2 || i == 3)
				return true;
			return false;
		default:
			return false;
		}
	}
}

class Axisz {
	int x;
	int y;

	public Axisz(int x, int y) {
		this.x = x;
		this.y = y;
	}

}
