package new2019;

import java.util.LinkedList;
import java.util.Queue;
import java.util.Scanner;

public class B1260 {
	static int N, M, V;
	static boolean way[][], isVisited[];

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);

		N = sc.nextInt();
		M = sc.nextInt();
		V = sc.nextInt();

		way = new boolean[N + 1][N + 1];
		isVisited = new boolean[N + 1];

		for (int i = 1; i <= M; i++) {
			int a = sc.nextInt();
			int b = sc.nextInt();
			way[a][b] = true;
			way[b][a] = true;
		}

		isVisited[V] = true;
		dfs(V);
		System.out.println();

		// bfs
		for (int i = 0; i < isVisited.length; i++)
			isVisited[i] = false;
		isVisited[V] = true;

		Queue<Integer> Q = new LinkedList<>();
		Q.offer(V);

		while (!Q.isEmpty()) {
			int now = Q.poll();
			System.out.print(now + " ");
			for (int i = 1; i <= N; i++) {
				if (way[now][i] && !isVisited[i]) {
					isVisited[i] = true;
					Q.offer(i);
				}
			}
		}
	}

	private static void dfs(int v) {
		System.out.print(v + " ");
		for (int i = 1; i <= N; i++) {
			if (way[v][i] && !isVisited[i]) {
				isVisited[i] = true;
				dfs(i);
				// isVisited[i] = false;
				// break;
			}
		}
	}

}
