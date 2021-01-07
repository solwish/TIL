package sam;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

class Atom {
	int x, y, d, e;

	public Atom(int x, int y, int d, int e) {
		this.x = x;
		this.y = y;
		this.d = d;
		this.e = e;
	}

}

public class P09_5648 {
	static int maxT = 4002, maxM = 4005, energy, N, map[][], dx[] = { 1, -1, 0, 0 }, dy[] = { 0, 0, -1, 1 };
	static Atom V[];
	static int Vex[];

	static boolean boundary(int x, int y) {
		if (x < 0 || y < 0 || x > 4000 || y > 4000)
			return true;
		return false;
	}

	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		int T = Integer.parseInt(br.readLine());

		map = new int[maxM][maxM];
		for (int t_case = 1; t_case <= T; t_case++) {
			N = Integer.parseInt(br.readLine());
			StringTokenizer st;
			V = new Atom[N];
			Vex = new int[N];
			for (int i = 0; i < N; i++) {
				st = new StringTokenizer(br.readLine());
				int y = Integer.parseInt(st.nextToken()) + 1000;
				int x = Integer.parseInt(st.nextToken()) + 1000;
				int d = Integer.parseInt(st.nextToken());
				int e = Integer.parseInt(st.nextToken());
				V[i] = new Atom(2 * x, 2 * y, d, e);
				map[2 * x][2 * y]++;
			}
			energy = 0;
			int size = N;
			for (int time = 0; time < maxT; time++) {
				// 원자이동
				int size2 = 0;
				for (int i = 0, idx = 0; i < size; i++) {
					Atom t = V[i];
					int ux = t.x;
					int uy = t.y;
					int nx = ux + dx[t.d];
					int ny = uy + dy[t.d];

					if (boundary(nx, ny)) {
						map[ux][uy]--;
						continue;
					} else {
						t.x = nx;
						t.y = ny;
						map[nx][ny]++;
						map[ux][uy]--;
						V[idx++] = t;
						size2++;
					}
				}
				size = 0;
				for (int j = 0, idx = 0; j < size2; j++) {
					Atom t = V[j];
					if (map[t.x][t.y] >= 2) {
						Vex[idx++] = j;
						size++;
						energy += t.e;
						continue;
					}
				}

				for (int k = 0; k < size; k++) {
					map[V[Vex[k]].x][V[Vex[k]].y]--;
					V[Vex[k]].e = -1;
				}
				size = 0;
				for (int j = 0, idx = 0; j < size2; j++) {
					Atom t = V[j];
					if (V[j].e != -1) {
						V[idx++] = t;
						size = idx;
					}
				}
				if (size == 0)
					break;
			}
			System.out.println("#" + t_case + " " + energy);
		}
	}

}
