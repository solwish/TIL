package sam;

import java.util.ArrayList;
import java.util.Scanner;
import java.util.Vector;

class P06Data {
	int x, y, n, di;

	public P06Data(int x, int y, int n, int di) {
		this.x = x;
		this.y = y;
		this.n = n;
		this.di = di;
	}

	@Override
	public String toString() {
		return "P06Data [x=" + x + ", y=" + y + ", n=" + n + ", di=" + di + "]";
	}

}

public class P06_2382 {
	static int N, map[][], M, K, dx[] = { 0, -1, 1, 0, 0 }, dy[] = { 0, 0, 0, -1, 1 };
	static Vector<P06Data> mi = new Vector<>();

	static boolean boundary(int x, int y) {
		if (x == 0 || y == 0 || x == N - 1 || y == N - 1)
			return true;
		return false;
	}

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int T = sc.nextInt();

		for (int t_case = 1; t_case <= T; t_case++) {
			N = sc.nextInt();
			M = sc.nextInt();
			K = sc.nextInt();
			mi.clear();
			map = new int[N][N];
			for (int i = 0; i < K; i++)
				mi.add(new P06Data(sc.nextInt(), sc.nextInt(), sc.nextInt(), sc.nextInt()));

			for (int i = 0; i < K; i++) {
				int x = mi.get(i).x;
				int y = mi.get(i).y;
				map[x][y]++;
			}

			for (int time = 0; time < M; time++) {
				//
				// System.out.println();
				// for (int i = 0; i < N; i++) {
				// System.out.println();
				// for (int j = 0; j < N; j++)
				// System.out.print(map[i][j] + " ");
				// }
				// System.out.println();
				// for (int i = 0; i < mi.size(); i++)
				// System.out.println(mi.get(i));
				for (int i = 0; i < mi.size(); i++) {
					if (boundary(mi.get(i).x, mi.get(i).y)) {
						switch (mi.get(i).di) {
						case 1:
							mi.get(i).di = 2;
							break;
						case 2:
							mi.get(i).di = 1;
							break;
						case 3:
							mi.get(i).di = 4;
							break;
						case 4:
							mi.get(i).di = 3;
							break;
						default:
							break;
						}
					}
					int ux = mi.get(i).x;
					int uy = mi.get(i).y;
					map[ux][uy]--;
					ux += dx[mi.get(i).di];
					uy += dy[mi.get(i).di];
					map[ux][uy]++;
					mi.get(i).x = ux;
					mi.get(i).y = uy;

					if (boundary(ux, uy)) {
						mi.get(i).n /= 2;
					}
				}
				//
				// System.out.println();
				// for (int i = 0; i < N; i++) {
				// System.out.println();
				// for (int j = 0; j < N; j++)
				// System.out.print(map[i][j] + " ");
				// }
				Vector<Integer> V = new Vector<>();
				ArrayList<P06Data> list = new ArrayList<>();
				for (int i = 0; i < N; i++)
					for (int j = 0; j < N; j++)
						if (map[i][j] > 1) {
							for (int k = 0; k < mi.size(); k++) {
								if (mi.get(k).x == i && mi.get(k).y == j) {
									V.add(k);
									list.add(mi.get(k));
								}
							}
							int max = 0;
							int sum = 0;
							int max_index = -1;
							for (int x = 0; x < list.size(); x++) {
								if (list.get(x).n > max) {
									max = list.get(x).n;
									max_index = x;
								}
								sum += list.get(x).n;
							}
							P06Data bigger = new P06Data(list.get(max_index).x, list.get(max_index).y, sum, list.get(max_index).di);
							list.clear();
							int cnt = 0;
							for (int y = 0; y < V.size(); y++) {
								int index = V.get(y);
								mi.remove(index - cnt);
								cnt++;
							}
							mi.add(bigger);
							V.clear();
							map[i][j] = 1;
						}
			}
			int sum = 0;
			for (int i = 0; i < mi.size(); i++)
				sum += mi.get(i).n;
			System.out.println("#" + t_case + " " + sum);
		}
	}

}
