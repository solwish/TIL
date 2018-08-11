package practice;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.Comparator;
import java.util.PriorityQueue;

class Miro {
	int x, y, w;

	public Miro(int x, int y, int w) {
		this.x = x;
		this.y = y;
		this.w = w;
	}

}

public class Day4HW2665 {
	static int[][] map;
	static int[][] pie;
	static int[][] dist;
	static int N;
	static int[] X = { -1, 0, 1, 0 };
	static int[] Y = { 0, 1, 0, -1 };
	static PriorityQueue<Miro> pq = new PriorityQueue<Miro>(new Comparator<Miro>() {

		@Override
		public int compare(Miro o1, Miro o2) {
			return o1.w < o2.w ? -1 : 1;
		}

	});

	static boolean boundary(int i, int j) {
		if (i < 0 || i >= N || j < 0 || j >= N)
			return true;
		return false;
	}

	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		N = Integer.parseInt(br.readLine());
		map = new int[N][N];
		pie = new int[N][N];
		dist = new int[N][N];
		String s;
		for (int i = 0; i < N; i++) {
			s = br.readLine();
			for (int j = 0; j < N; j++) {
				map[i][j] = (int) s.charAt(j) - '0';
				pie[i][j] = -1;
				dist[i][j] = Integer.MAX_VALUE;
			}
		}

		pie[0][0] = 1;
		dist[0][0] = 0;
		pq.offer(new Miro(0, 0, dist[0][0]));
		while (!pq.isEmpty()) {
			Miro m = pq.poll();
			if (m.x == N - 1 && m.y == N - 1)
				break;
			if (dist[m.x][m.y] < m.w)
				continue;
			for (int k = 0; k < 4; k++) {
				int nx = m.x + X[k];
				int ny = m.y + Y[k];

				if (boundary(nx, ny))
					continue;
				if (pie[nx][ny] > 0)
					continue;// 방문했을경우

				if (map[nx][ny] == 1) {
					if (dist[nx][ny] > m.w)
						dist[nx][ny] = m.w;
				} else if (map[nx][ny] == 0)
					if (dist[nx][ny] > m.w + 1)
						dist[nx][ny] = m.w + 1;

				pq.offer(new Miro(nx, ny, dist[nx][ny]));
				pie[nx][ny] = 1;
			}

		}
		// for (int i = 0; i < N; i++) {
		// System.out.println();
		// for (int j = 0; j < N; j++)
		// System.out.print(dist[i][j] + " ");
		// }
		System.out.println(dist[N - 1][N - 1]);
	}

}
