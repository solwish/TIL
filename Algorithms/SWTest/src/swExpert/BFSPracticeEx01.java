package swExpert;

import java.util.LinkedList;
import java.util.Queue;
import java.util.Scanner;

public class BFSPracticeEx01 {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int T = 10;

		for (int test_case = 1; test_case <= T; test_case++) {
			int[][] A = new int[100][100];
			int[] d = new int[100]; // distance
			int[] pie = new int[100]; // predecessor
			Queue<Integer> Q = new LinkedList<Integer>();
			
			int t_case = sc.nextInt();
			int z = sc.nextInt();
			for (int i = 0; i < z; i++) {
				int n = sc.nextInt();
				int m = sc.nextInt();
				A[n][m] = 1;
			}

			for (int i = 0; i < 100; i++) {
				d[i] = -1;
				pie[i] = -1;
			}

			int s = 0; // 출발점.
			Q.offer(s);
			d[s] = 0;
			pie[s] = -1;
			while (!(Q.isEmpty())) {
				int u = Q.poll();
				for (int v = 0; v < 100; v++) {
					if (A[u][v] == 1) {
						if (d[v] == -1) {
							d[v] = d[u] + 1;
							pie[v] = u;
							Q.offer(v);
						}
					}
				}
			}

			int v = 99; // 끝점.

			System.out.print("#" + test_case + " ");
			if (pie[v] == -1) {
				System.out.println("0");
			} else {
				System.out.println("1");
			}
		}
	}
}
