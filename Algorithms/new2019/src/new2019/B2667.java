package new2019;

import java.util.Comparator;
import java.util.LinkedList;
import java.util.PriorityQueue;
import java.util.Queue;
import java.util.Scanner;

public class B2667 {

	static int N, map[][], x[] = { 0, 1, 0, -1 }, y[] = { 1, 0, -1, 0 };
	static boolean isVisited[][];

	static boolean boundary(int x, int y) {
		if (x < 0 || y < 0 || x >= N || y >= N)
			return false;
		return true;
	}

	public static void main(String[] args) {
		Queue<Integer> PQ = new PriorityQueue<>(new Comparator<Integer>() {
			@Override
			public int compare(Integer o1, Integer o2) {
				return o2 > o1 ? -1 : 1;
			}
		});
		Scanner sc = new Scanner(System.in);
		N = sc.nextInt();
		map = new int[N][N];
		isVisited = new boolean[N][N];
		sc.nextLine();
		for (int i = 0; i < N; i++) {
			String s = sc.nextLine();
			for (int j = 0; j < N; j++) {
				map[i][j] = Integer.parseInt(String.valueOf(s.charAt(j)));
			}
		}

		for (int i = 0; i < N; i++) {
			for (int j = 0; j < N; j++) {
				if (map[i][j] == 1 && !isVisited[i][j]) {
					isVisited[i][j] = true;
					int count = 0;
					Queue<Integer> Q = new LinkedList<>();
					Q.offer(i);
					Q.offer(j);
					while (!Q.isEmpty()) {
						count++;
						int dx = Q.poll();
						int dy = Q.poll();
						for (int k = 0; k < x.length; k++) {
							int ux = dx + x[k];
							int uy = dy + y[k];
							if (boundary(ux, uy) && !isVisited[ux][uy] && map[ux][uy] == 1) {
								Q.offer(ux);
								Q.offer(uy);
								isVisited[ux][uy] = true;
							}
						}
					}
					PQ.offer(count);
				}
			}
		}
		System.out.println(PQ.size());
		while (!PQ.isEmpty()) {
			System.out.println(PQ.poll() + " ");
		}
	}

}
