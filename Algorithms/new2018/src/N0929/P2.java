package N0929;

import java.util.Comparator;
import java.util.LinkedList;
import java.util.PriorityQueue;
import java.util.Queue;
import java.util.Scanner;

public class P2 {
	static int N, map[][], region, dx[] = { 1, 0, -1, 0 }, dy[] = { 0, 1, 0, -1 };
	static Queue<Integer> Q = new LinkedList<>();
	static PriorityQueue<Integer> PQ = new PriorityQueue<>(new Comparator<Integer>() {
		@Override
		public int compare(Integer o1, Integer o2) {
			return o1 < o2 ? -1 : 1;
			// return o2.compareTo(o1);
		}
	});

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		N = sc.nextInt();
		map = new int[N][N];
		region = 0;

		for (int i = 0; i < N; i++)
			for (int j = 0; j < N; j++)
				map[i][j] = sc.nextInt();

		for (int i = 0; i < N; i++)
			for (int j = 0; j < N; j++)
				if (map[i][j] == 1) {
					map[i][j] = 0;
					region++;
					Q.offer(i);
					Q.offer(j);
					bfs();
				}

		System.out.println(region);
		while (!PQ.isEmpty())
			System.out.print(PQ.poll() + " ");
	}

	static boolean boundary(int x, int y) {
		if (x < 0 || y < 0 || x >= N || y >= N)
			return false;
		return true;
	}

	private static void bfs() {
		int cnt = 1;
		while (!Q.isEmpty()) {
			int x = Q.poll();
			int y = Q.poll();

			for (int k = 0; k < 4; k++) {
				int nx = x + dx[k];
				int ny = y + dy[k];

				if (boundary(nx, ny) && map[nx][ny] == 1) {
					cnt++;
					map[nx][ny] = 0;
					Q.offer(nx);
					Q.offer(ny);
				}
			}
		}
		PQ.offer(cnt);
	}

}
