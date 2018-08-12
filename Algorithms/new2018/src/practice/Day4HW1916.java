package practice;

import java.util.ArrayList;
import java.util.PriorityQueue;
import java.util.Scanner;

class City implements Comparable<City> {
	int node;
	int cost;

	public City(int node, int cost) {
		super();
		this.node = node;
		this.cost = cost;
	}

	@Override
	public int compareTo(City o) {
		return this.cost < o.cost ? -1 : 1;
	}

}

// 다익스트라 - 최소비용 구하기
public class Day4HW1916 {
	static ArrayList<ArrayList<City>> list = new ArrayList<>();
	static int n, m, INF = Integer.MAX_VALUE, pie[], cost[];
	static PriorityQueue<City> pq = new PriorityQueue<>();

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		n = sc.nextInt();
		m = sc.nextInt();
		cost = new int[n + 1];
		pie = new int[n + 1];
		for (int i = 1; i <= n; i++) {
			pie[i] = -1;
			cost[i] = INF;
			list.add(new ArrayList<>());
		}
		list.add(new ArrayList<>());

		int u, v, c;
		for (int i = 1; i <= m; i++) {
			u = sc.nextInt();
			v = sc.nextInt();
			c = sc.nextInt();
			list.get(u).add(new City(v, c));
		}
		int start = sc.nextInt();
		int destination = sc.nextInt();

		pie[start] = start;
		cost[start] = 0;
		pq.offer(new City(start, cost[start]));

		while (!pq.isEmpty()) {
			City here = pq.poll();
			if (cost[here.node] < here.cost)
				continue;

			ArrayList<City> li = list.get(here.node);
			for (City next : li)
				if (next.cost + here.cost < cost[next.node]) {
					cost[next.node] = next.cost + here.cost;
					pie[next.node] = here.node;
					pq.add(new City(next.node, cost[next.node]));
				}
		}

		System.out.println(cost[destination]);
	}

}
