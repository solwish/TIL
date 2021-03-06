package swExpert;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.LinkedList;
import java.util.Queue;

class Axis {
	public int x;
	public int y;

	public Axis(int x, int y) {
		this.x = x;
		this.y = y;
	}
}

public class SupplyRoute {

	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

		int T = Integer.parseInt(br.readLine());
		Queue<Axis> Q = new LinkedList<Axis>();
		int[] xAxis = { 0, -1, 0, 1 };
		int[] yAxis = { 1, 0, -1, 0 };

		for (int test_case = 0; test_case < T; test_case++) {
			int n = Integer.parseInt(br.readLine());
			String s;
			int[][] A = new int[n][n];
			int[][] d = new int[n][n];

			for (int i = 0; i < n; i++) {
				s = br.readLine();
				for (int j = 0; j < n; j++) {
					A[i][j] = Integer.parseInt(String.valueOf(s.charAt(j)));
					d[i][j] = Integer.MAX_VALUE;
				}
			}

			Axis start = new Axis(0, 0);
			int vx = n - 1;
			int vy = n - 1;

			Q.offer(start);
			d[0][0] = 0;

			while (!Q.isEmpty()) {
				Axis axis = Q.poll();
				int ux = axis.x;
				int uy = axis.y;

				for (int i = 0; i < 4; i++) {
					int newX = ux + xAxis[i];
					int newY = uy + yAxis[i];

					if (0 <= newX && newX < n && 0 <= newY && newY < n) {
						if (d[newX][newY] > d[ux][uy] + A[newX][newY]) {
							d[newX][newY] = d[ux][uy] + A[newX][newY];
							Axis nAxis = new Axis(newX, newY);
							Q.offer(nAxis);
						}
					}
				}
			}
			System.out.println("#" + (test_case + 1) + " " + d[vx][vy]);
		}
	}

}
