package new2019;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.LinkedList;
import java.util.Queue;
import java.util.StringTokenizer;

//미해결
public class B13460 {
	static int min = Integer.MAX_VALUE, x[] = { 1, 0, -1, 0 }, y[] = { 0, 1, 0, -1 };
	static int N, M;
	static char[][] map;
	static boolean[][] Rvisit, Bvisit;

	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		String s = br.readLine();
		StringTokenizer st = new StringTokenizer(s);
		N = Integer.parseInt(st.nextToken());
		M = Integer.parseInt(st.nextToken());
		map = new char[N][M];
		Rvisit = new boolean[N][M];
		Bvisit = new boolean[N][M];
		int Rx = 0, Ry = 0, Bx = 0, By = 0;
		for (int i = 0; i < N; i++) {
			s = br.readLine();
			for (int j = 0; j < M; j++) {
				char t = s.charAt(j);
				map[i][j] = t;
				if (t == 'R') {
					Rx = i;
					Ry = j;
					map[i][j] = '.';
				} else if (t == 'B') {
					Bx = i;
					By = j;
					map[i][j] = '.';
				}
			}
		}
		Queue<Tdata1> Q = new LinkedList<>();
		Rvisit[Rx][Ry] = true;
		Bvisit[Bx][By] = true;
		Q.offer(new Tdata1(Rx, Ry, Bx, By, 0, -1));

		while (!Q.isEmpty()) {
			Tdata1 T = Q.poll();
			int rx = T.rx;
			int ry = T.ry;
			int bx = T.bx;
			int by = T.by;
			int cnt = T.cnt + 1;
			int zz = T.zz;
			if (cnt > 10)
				continue;
			map[rx][ry] = 'R';
			map[bx][by] = 'B';
			//
			// for (int i = 0; i < N; i++) {
			// System.out.println();
			// for (int j = 0; j < M; j++) {
			// System.out.print(map[i][j] + " ");
			// }
			// }
			// System.out.println();

			// 0 하 1우 2 상 3 좌
			for (int z = 0; z < 4; z++) {
				if (zz == z)
					continue;
				int drx = rx + x[z];
				int dry = ry + y[z];
				int dbx = bx + x[z];
				int dby = by + y[z];
				boolean rflag = false, bflag = false;

				if ((z == 0 && rx >= bx) || (z == 2 && rx <= bx) || (z == 1 && ry >= by) || (z == 3 && ry <= by)) {
					// Red 먼저
					while (map[drx][dry] == '.') {
						drx += x[z];
						dry += y[z];
					}
					if (map[drx][dry] == 'B' || map[drx][dry] == '#') {
						drx -= x[z];
						dry -= y[z];
						if (map[drx][dry] != 'O')
							map[drx][dry] = 'R';
						if (drx != rx && dry != ry)
							map[rx][ry] = '.';
					}
					if (map[drx][dry] == 'O')
						rflag = true;

					while (map[dbx][dby] == '.') {
						dbx += x[z];
						dby += y[z];
					}
					if (map[dbx][dby] == 'R' || map[dbx][dby] == '#') {
						dbx -= x[z];
						dby -= y[z];
						if (map[dbx][dby] != 'O')
							map[dbx][dby] = 'B';
						if (dbx != bx && dby != by)
							map[bx][by] = '.';
					}
					if (map[dbx][dby] == 'O')
						bflag = true;
				} else {
					// Blue 먼저
					while (map[dbx][dby] == '.') {
						dbx += x[z];
						dby += y[z];
					}
					if (map[dbx][dby] == 'R' || map[dbx][dby] == '#') {
						dbx -= x[z];
						dby -= y[z];
						if (map[dbx][dby] != 'O')
							map[dbx][dby] = 'B';
						if (dbx != bx && dby != by)
							map[bx][by] = '.';
					}
					if (map[dbx][dby] == 'O')
						bflag = true;

					while (map[drx][dry] == '.') {
						drx += x[z];
						dry += y[z];
					}
					if (map[drx][dry] == 'B' || map[drx][dry] == '#') {
						drx -= x[z];
						dry -= y[z];
						if (map[drx][dry] != 'O')
							map[drx][dry] = 'R';
						if (drx != rx && dry != ry)
							map[rx][ry] = '.';
					}
					if (map[drx][dry] == 'O')
						rflag = true;
				}
				// case O
				if (rflag && !bflag)
					min = cnt < min ? cnt : min;
				else if (bflag && !rflag) {
					map[drx][dry] = '.';
					map[dbx][dby] = '.';
					continue;
				} else if (rflag && bflag)
					continue;
				else if (!rflag && !bflag && (!Rvisit[drx][dry] || !Bvisit[dbx][dby])) {
					Rvisit[drx][dry] = true;
					Bvisit[dbx][dby] = true;
					map[drx][dry] = '.';
					map[dbx][dby] = '.';
					Q.offer(new Tdata1(drx, dry, dbx, dby, cnt, z));
				} else {
					map[drx][dry] = '.';
					map[dbx][dby] = '.';
				}
			}
		}
		if (min <= 10)
			System.out.println(min);
		else
			System.out.println(-1);

	}
}

class Tdata1 {
	int rx, ry, bx, by;
	int cnt, zz;

	public Tdata1(int rx, int ry, int bx, int by, int cnt, int zz) {
		this.rx = rx;
		this.ry = ry;
		this.bx = bx;
		this.by = by;
		this.cnt = cnt;
		this.zz = zz;
	}

}