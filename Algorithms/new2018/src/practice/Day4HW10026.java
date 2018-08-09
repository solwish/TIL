package practice;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.LinkedList;
import java.util.Queue;

public class Day4HW10026 {
	static int N;
	static int[][] map;
	static int[][] cMap;
	static int[] X = { -1, 0, 1, 0 };
	static int[] Y = { 0, 1, 0, -1 };
	static Queue<Integer> Q = new LinkedList<Integer>();

	static boolean boundary(int i, int j) {
		if (i < 0 || i >= N || j < 0 || j >= N)
			return false;
		return true;
	}

	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		N = Integer.parseInt(br.readLine());
		map = new int[N][N];
		cMap = new int[N][N];
		String s;
		// -1: red, -2: green, -3: blue
		for (int i = 0; i < N; i++) {
			s = br.readLine();
			for (int j = 0; j < N; j++)
				if (s.charAt(j) == 'R') {
					map[i][j] = -1;
					cMap[i][j] = -1;
				} else if (s.charAt(j) == 'G') {
					map[i][j] = -2;
					cMap[i][j] = -1;
				} else if (s.charAt(j) == 'B') {
					map[i][j] = -3;
					cMap[i][j] = -3;
				}
		}
		int cnt = 0;
		int cCnt = 0;
		for (int i = 0; i < N; i++)
			for (int j = 0; j < N; j++) {
				if (map[i][j] < 0)
					findPart(i, j, map[i][j], ++cnt, true);
				if (cMap[i][j] < 0)
					findPart(i, j, cMap[i][j], ++cCnt, false);
			}
		// for (int i = 0; i < N; i++) {
		// System.out.println();
		// for (int j = 0; j < N; j++) {
		// System.out.print(map[i][j] + " ");
		// }
		// }
		// System.out.println();
		// for (int i = 0; i < N; i++) {
		// System.out.println();
		// for (int j = 0; j < N; j++) {
		// System.out.print(cMap[i][j] + " ");
		// }
		// }
		int max = Integer.MIN_VALUE;
		int cMax = Integer.MIN_VALUE;
		for (int i = 0; i < N; i++)
			for (int j = 0; j < N; j++) {
				max = map[i][j] > max ? map[i][j] : max;
				cMax = cMap[i][j] > cMax ? cMap[i][j] : cMax;
			}
		System.out.println(max + " " + cMax);
	}

	private static void findPart(int x, int y, int status, int cnt, boolean flag) {
		int[][] lMap;
		if (flag)
			lMap = map;
		else
			lMap = cMap;
		Q.offer(x);
		Q.offer(y);
		lMap[x][y] = cnt;
		while (!Q.isEmpty()) {
			int ui = Q.poll();
			int uj = Q.poll();
			for (int k = 0; k < 4; k++) {
				int ni = ui + X[k];
				int nj = uj + Y[k];
				if (boundary(ni, nj) && lMap[ni][nj] == status) {
					lMap[ni][nj] = cnt;
					Q.offer(ni);
					Q.offer(nj);
				}
			}
		}
	}

}
