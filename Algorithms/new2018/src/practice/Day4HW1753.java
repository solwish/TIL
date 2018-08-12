package practice;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.PriorityQueue;
import java.util.Scanner;

class Path {
	int p, w;

	public Path(int p, int w) {
		this.p = p;
		this.w = w;
	}

}

// 다익스트라 - 최단경로
public class Day4HW1753 {
	static ArrayList<ArrayList<Path>> weight = new ArrayList<>();
	static int V, E, K, INF = 1000000000;;
	static int[] pie, dist;
	static PriorityQueue<Path> pq = new PriorityQueue<>(new Comparator<Path>() {
		@Override
		public int compare(Path o1, Path o2) {
			return o1.w < o2.w ? -1 : 1;
		}
	});

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		V = sc.nextInt();
		E = sc.nextInt();
		K = sc.nextInt();
		dist = new int[V + 1];
		pie = new int[V + 1];
		for (int i = 1; i <= V; i++) {
			dist[i] = INF;
			pie[i] = -1;
		}
		for (int i = 1; i <= V + 1; i++)
			weight.add(new ArrayList<>());

		int u, v, w;
		for (int i = 1; i <= E; i++) {
			u = sc.nextInt();
			v = sc.nextInt();
			w = sc.nextInt();
			weight.get(u).add(new Path(v, w));
		}

		dist[K] = 0;
		pie[K] = K;
		pq.offer(new Path(K, dist[K]));
		while (!pq.isEmpty()) {
			Path p = pq.poll();
			if (p.w > dist[p.p])
				continue;

			ArrayList<Path> li = weight.get(p.p);
			for (Path x : li) {
				int node = x.p;
				int weight = x.w;

				if (dist[node] > weight + dist[p.p]) {
					dist[node] = weight + dist[p.p];
					pie[node] = p.p;
					pq.add(new Path(node, dist[node]));
				}
			}
		}
		for (int i = 1; i <= V; i++)
			if (dist[i] == INF)
				System.out.println("INF");
			else
				System.out.println(dist[i]);
	}
}
