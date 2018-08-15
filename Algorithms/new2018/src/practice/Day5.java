package practice;

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.Queue;
import java.util.Scanner;

public class Day5 {
	static int N, M, A_i, B_i, INF = Integer.MAX_VALUE;
	static int hide = 1, dis, same = 0;
	static int[] pie, dist;
	static ArrayList<ArrayList<Integer>> list = new ArrayList<>();

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		N = sc.nextInt();
		M = sc.nextInt();
		dist = new int[N + 1];
		pie = new int[N + 1];
		for (int i = 1; i < N + 1; i++) {
			dist[i] = INF;
			pie[i] = -1;
			list.add(new ArrayList<>());
		}
		list.add(new ArrayList<>());
		for (int i = 1; i <= M; i++) {
			A_i = sc.nextInt();
			B_i = sc.nextInt();
			list.get(A_i).add(B_i);
			list.get(B_i).add(A_i);
		}
		Queue<Integer> q = new LinkedList<>();
		dist[1] = 0;
		pie[1] = 0;
		q.offer(1);
		while (!q.isEmpty()) {
			int here = q.poll();

			ArrayList<Integer> li = list.get(here);
			for (int x : li) {
				int node = x;
				if (pie[node] > 0)
					continue;
				if (dist[node] > 1 + dist[here]) {
					dist[node] = 1 + dist[here];
					pie[node] = here;
					q.add(node);
				}
			}
		}
		for (int i = 1; i <= N; i++)
			if (dist[i] == INF)
				dist[i] = -1;

		for (int i = 1; i <= N; i++)
			if (dist[i] > dist[hide])
				hide = i;
		dis = dist[hide];
		for (int i = 1; i <= N; i++)
			if (dist[i] == dis)
				same++;
		System.out.println(hide + " " + dis + " " + same);
	}
}
