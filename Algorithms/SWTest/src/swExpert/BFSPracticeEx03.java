package swExpert;

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;
import java.util.Queue;
import java.util.Scanner;

public class BFSPracticeEx03 {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int T = 10;

		for (int test_case = 0; test_case < T; test_case++) {
			int[][] A = new int[101][101];
			int z = sc.nextInt();
			int s = sc.nextInt();
			Queue<Integer> Q = new LinkedList<Integer>();

			for (int i = 0; i < z / 2; i++) {
				int n = sc.nextInt();
				int m = sc.nextInt();
				A[n][m] = 1;
			}

			List<Integer> d = new ArrayList<Integer>();
			int[] pie = new int[101];

			for (int i = 0; i < 101; i++) {
				d.add(-1);
				pie[i] = -1;
			}

			d.set(s, 0);
			Q.offer(s);
			while (!Q.isEmpty()) {
				int u = Q.poll();
				for (int v = 1; v <= 100; v++) {
					if (A[u][v] == 1) {
						if (d.get(v) == -1) {
							d.set(v, d.get(u) + 1);
							pie[v] = u;
							Q.offer(v);
						}
					}
				}
			}
			int max = 0;
			for (int i = 1; i <= 100; i++) {
				if (d.get(max) <= d.get(i))
					max = i;
			}
			System.out.println("#" + (test_case + 1) + " " + max);
		}
	}
}
