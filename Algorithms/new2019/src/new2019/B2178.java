package new2019;

import java.util.LinkedList;
import java.util.Queue;
import java.util.Scanner;

public class B2178 {
	static int N, M, map[][], count[][];
	static boolean isVisited[][];
	static int x[] = { -1, 0, 1, 0 };
	static int y[] = { 0, -1, 0, 1 };

	static boolean boundary(int x, int y) {
		if (x <= 0 || y <= 0 || x > N || y > M)
			return false;
		return true;
	}

	public static void main(String[] args) throws Exception {
		Scanner sc = new Scanner(System.in);
		N = sc.nextInt();
		M = sc.nextInt();
		count = new int[N + 1][M + 1];
		isVisited = new boolean[N + 1][M + 1];
		map = new int[N + 1][M + 1];
		sc.nextLine();

		for (int i = 1; i <= N; i++) {
			String s = sc.nextLine();
			for (int j = 1; j <= M; j++) {
				map[i][j] = Integer.parseInt(String.valueOf(s.charAt(j - 1)));
			}
		}

		Queue<Integer> Q = new LinkedList<>();
		isVisited[1][1] = true;
		Q.offer(1);
		Q.offer(1);
		count[1][1] = 1;

		while (!Q.isEmpty()) {

			int nx = Q.poll();
			int ny = Q.poll();
			int ux, uy;

			for (int k = 0; k < 4; k++) {
				ux = nx + x[k];
				uy = ny + y[k];

				if (boundary(ux, uy) && map[ux][uy] == 1 && !isVisited[ux][uy]) {
					if (count[ux][uy] == 0)
						count[ux][uy] = count[nx][ny] + 1;
					else if (count[ux][uy] > count[nx][ny] + 1)
						count[ux][uy] = count[nx][ny] + 1;

					Q.offer(ux);
					Q.offer(uy);
					isVisited[ux][uy] = true;
				}

			}
		}
		System.out.println(count[N][M]);
	}

}
