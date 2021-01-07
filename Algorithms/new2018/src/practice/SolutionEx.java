package practice;

import java.util.Vector;

public class SolutionEx {

	static boolean vix[];
	static boolean viy[];
	static int N, result, house[][];
	static Vector<Integer> Vx;
	static Vector<Integer> Vy;

	public int solution(int n, int[][] house1) {
		result = Integer.MIN_VALUE;
		vix = new boolean[201];
		viy = new boolean[201];
		N = n;
		Vx = new Vector<>();
		Vy = new Vector<>();
		house = house1;

		for (int i = 0; i < house.length; i++) {
			house[i][0] += 100;
			house[i][1] += 100;
		}

		dfs(0, 0, 0);

		if (result < 0)
			result = -1;

		return result;
	}

	static void dfs(int x, int y, int cnt) {
		if (cnt == N) {
			int sum = 0;
			for (int i = 0; i < Vx.size(); i++) {
				int fx = Vx.get(i);
				int fy = Vy.get(i);
				int dist = Integer.MAX_VALUE;
				for (int j = 0; j < house.length; j++) {
					int d = Math.min(Math.abs(fx - house[j][0]), Math.abs(fy - house[j][1]));
					if (d < dist)
						dist = d;
				}
				dist *= dist;
				sum += dist;
			}

			if (sum > result)
				result = sum;
			return;
		}

		for (int k = 0; k < house.length; k++) {
			vix[house[k][0]] = true;
			viy[house[k][1]] = true;
			for (int i = x; i < 201; i++) {
				for (int j = y; j < 201; j++) {
					if (!vix[i] && !viy[j]) {
						vix[i] = true;
						viy[j] = true;
						Vx.add(i);
						Vy.add(j);
						dfs(x, y, cnt + 1);
						Vx.remove(Vx.size() - 1);
						Vy.remove(Vy.size() - 1);
						vix[i] = false;
						viy[i] = false;
					}
				}
			}
		}
	}
}
