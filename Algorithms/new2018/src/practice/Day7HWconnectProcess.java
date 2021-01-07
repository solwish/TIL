package practice;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.StringTokenizer;
import java.util.Vector;

class XYdata {
	int X, Y;

	public XYdata(int x, int y) {
		X = x;
		Y = y;
	}

}

public class Day7HWconnectProcess {
	static final int max = 12;
	static int[][] map = new int[max][max], tmap = new int[max][max];
	static int N, dx[] = { 1, 0, -1, 0 }, dy[] = { 0, -1, 0, 1 }, CORE, cnt2, cnt, SUM;
	static Vector<XYdata> core = new Vector<>();
	static Vector<Integer> V = new Vector<>();

	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		int T = Integer.parseInt(br.readLine());

		for (int t_case = 1; t_case <= T; t_case++) {
			cnt = 0;
			cnt2 = 0;
			CORE = 0;
			SUM = 0;
			core.clear();
			N = Integer.parseInt(br.readLine());
			StringTokenizer st;
			for (int i = 0; i < N; i++) {
				st = new StringTokenizer(br.readLine());
				for (int j = 0; j < N; j++) {
					map[i][j] = Integer.parseInt(st.nextToken());
					if (map[i][j] == 1)
						if (i == 0 || i == N - 1 || j == 0 || j == N - 1)
							cnt2++;
						else {
							core.add(new XYdata(i, j));
							cnt++;
						}
				}
			}
			go(0);
			System.out.println("#" + t_case + " " + SUM);
		}

	}

	private static void go(int now) {
		if (now == cnt) {
			solve();
			return;
		}
		for (int i = 0; i < 4; i++) {
			V.add(i);
			go(now + 1);
			V.remove(V.size() - 1);
		}
	}

	private static void solve() {
		for (int i = 0; i < N; i++)
			for (int j = 0; j < N; j++)
				tmap[i][j] = map[i][j];
		int sum = 0;
		int c = cnt2;
		for (int i = 0; i < cnt; i++) {
			int x = core.get(i).X;
			int y = core.get(i).Y;
			while (true) {
				x += dx[V.get(i)];
				y += dy[V.get(i)];
				if (boundary(x, y)) {
					c++;
					break;
				}
				if (tmap[x][y] == 1)
					return;
				else {
					tmap[x][y] = 1;
					sum++;
				}
			}
		}
		if (CORE < c) {
			CORE = c;
			SUM = sum;
		} else if (CORE == c && SUM > sum)
			SUM = sum;
	}

	static boolean boundary(int kx, int ky) {
		if (kx < 0 || kx >= N || ky < 0 || ky >= N)
			return true;
		return false;
	}

}
