package practice;

import java.util.Vector;

public class Day10P2 {

	public static void main(String[] args) {
		int n = 1;
		int[][] house = { { 0, 0 } };
		// int n = 2;
		// int[][] house = { { 0, 0 }, { 1, 0 } };
		int r = solution(n, house);
		System.out.println(r);
	}

	// static int map[][];
	static boolean isVisited[][];
	static int N, result, house[][];
	static Vector<Integer> Vx;
	static Vector<Integer> Vy;

	static public int solution(int n, int[][] house1) {
		result = Integer.MIN_VALUE;
		// map = new int[201][201];
		isVisited = new boolean[201][201];
		N = n;
		Vx = new Vector<>();
		Vy = new Vector<>();
		house = house1;

		for (int i = 0; i < house.length; i++) {
			house[i][0] += 100;
			house[i][1] += 100;
			// map[house[i][0]][house[i][1]] = 1;
			isVisited[house[i][0]][house[i][1]] = true;
		}

		dfs(0, 0, 0);

		if (result < 0)
			result = -1;

		return result;
	}

	private static void dfs(int x, int y, int cnt) {
		if (cnt == N) {
			int sum = 0;
			for (int i = 0; i < Vx.size(); i++) {
				int fx = Vx.get(i);
				int fy = Vy.get(i);
				// if (fx == -1 && fy == -1)
				// System.out.println("swwef");
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

		for (int i = x; i < 201; i++) {
			for (int j = y; j < 201; j++) {
				if (!isVisited[i][j]) {
					isVisited[i][j] = true;
					Vx.add(i);
					Vy.add(j);
					dfs(x, y, cnt + 1);
					Vx.remove(Vx.size() - 1);
					Vy.remove(Vy.size() - 1);
					isVisited[i][j] = false;
				}
			}
		}

	}
}
