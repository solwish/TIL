package sam;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.LinkedList;
import java.util.StringTokenizer;
import java.util.Vector;

class BC {
	int i, j, c, p;

	public BC(int i, int j, int c, int p) {
		this.i = i;
		this.j = j;
		this.c = c;
		this.p = p;
	}

}

public class S08_5644 {
	static int M, A, dx[] = { 0, -1, 0, 1, 0 }, dy[] = { 0, 0, 1, 0, -1 }, sum, N = 10, choose[], p_max;
	static Vector<Integer> Va, Vb;
	static BC bc[];
	static LinkedList<LinkedList<LinkedList<Integer>>> list;
	static boolean map[][], ba[], bb[];

	static boolean boundary(int i, int j) {
		if (i < 0 || j < 0 || i >= N || j >= N)
			return false;
		return true;
	}

	static void area(int index) {
		int x = bc[index].i;
		int y = bc[index].j;
		int c = bc[index].c;
		int k = 0;
		int flag = 1;
		for (int i = x - c; i <= x + c; i++) {
			for (int j = y - k; j <= y + k; j++) {
				if (boundary(i, j)) {
					list.get(i).get(j).add(index);
					map[i][j] = true;
				}
			}
			if (k == c)
				flag *= -1;

			k += flag;
		}
	}

	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		int T = Integer.parseInt(br.readLine());

		for (int t_case = 1; t_case <= T; t_case++) {
			Va = new Vector<>();
			Vb = new Vector<>();
			StringTokenizer st = new StringTokenizer(br.readLine());
			M = Integer.parseInt(st.nextToken());// 시간
			A = Integer.parseInt(st.nextToken());// bc 갯수
			bc = new BC[A];
			st = new StringTokenizer(br.readLine());
			while (st.hasMoreTokens())
				Va.add(Integer.parseInt(st.nextToken()));
			st = new StringTokenizer(br.readLine());
			while (st.hasMoreTokens())
				Vb.add(Integer.parseInt(st.nextToken()));
			for (int i = 0; i < A; i++) {
				st = new StringTokenizer(br.readLine());
				int iy = Integer.parseInt(st.nextToken()) - 1;
				int ix = Integer.parseInt(st.nextToken()) - 1;
				bc[i] = new BC(ix, iy, Integer.parseInt(st.nextToken()), Integer.parseInt(st.nextToken()));
			}
			map = new boolean[N][N];
			list = new LinkedList<>();
			for (int i = 0; i < N; i++) {
				list.add(new LinkedList<>());
				for (int j = 0; j < N; j++)
					list.get(i).add(new LinkedList<>());
			}
			for (int i = 0; i < A; i++)
				area(i);
			// // //
			// for (int i = 0; i < N; i++) {
			// System.out.println();
			// for (int j = 0; j < N; j++)
			// System.out.print(map[i][j] + " ");
			// }
			// // //

			choose = new int[2];
			ba = new boolean[A];
			bb = new boolean[A];
			int now_ai = 0;
			int now_aj = 0;
			int now_bi = 9;
			int now_bj = 9;
			sum = 0;
			getScore(0, 0, 9, 9, true);

			for (int time = 0; time < M; time++) {
				//////////
				// System.out.println("A의 현재 위치 : (" + now_ai + ", " + now_aj + ")");
				// System.out.println("B의 현재 위치 : (" + now_bi + ", " + now_bj + ")");
				// System.out.println("점수합 : " + sum);
				// if (time == 10)
				// System.out.println(time);
				// /////
				int da = Va.get(time);
				int db = Vb.get(time);
				now_ai += dx[da];
				now_aj += dy[da];
				now_bi += dx[db];
				now_bj += dy[db];
				boolean multi = true;

				getScore(now_ai, now_aj, now_bi, now_bj, multi);
				// System.out.println("A의 현재 위치 : (" + now_ai + ", " + now_aj + ")");
				// System.out.println("B의 현재 위치 : (" + now_bi + ", " + now_bj + ")");
			}
			System.out.println("#" + t_case + " " + sum);
		}
	}

	private static void getScore(int now_ai, int now_aj, int now_bi, int now_bj, boolean multi) {
		// case 1. 둘 다 매칭 없는 경우
		if (list.get(now_bi).get(now_bj).size() < 1 && list.get(now_ai).get(now_aj).size() < 1)
			multi = false;
		// case 2-1. 사용자 a만 매칭 되어있는경우
		else if (list.get(now_bi).get(now_bj).size() < 1 && list.get(now_ai).get(now_aj).size() == 1) {
			sum += bc[list.get(now_ai).get(now_aj).get(0)].p;
			multi = false;
		}
		// case 2-2. 사용자 b만 매칭 되어있는경우
		else if (list.get(now_bi).get(now_bj).size() == 1 && list.get(now_ai).get(now_aj).size() < 1) {
			sum += bc[list.get(now_bi).get(now_bj).get(0)].p;
			multi = false;
		}
		// case 2-3. 사용자 b가 bc와 일대일 매칭이나 a의 매칭과 겹치는게 없는 경우
		else if (list.get(now_bi).get(now_bj).size() == 1
				&& !list.get(now_ai).get(now_aj).contains(list.get(now_bi).get(now_bj).get(0))) {
			sum += bc[list.get(now_bi).get(now_bj).get(0)].p;
			multi = false;
			// 2-3-1. 사용자 a가 겹치진 않아도 매칭되어있는 경우
			if (list.get(now_ai).get(now_aj).size() > 0) {
				// a가 하나만 매칭
				if (list.get(now_ai).get(now_aj).size() == 1)
					sum += bc[list.get(now_ai).get(now_aj).get(0)].p;
				// a가 둘 이상 매칭
				else {
					int l_max = 0;
					for (int i = 0; i < list.get(now_ai).get(now_aj).size(); i++)
						l_max = (l_max < bc[list.get(now_ai).get(now_aj).get(i)].p) ? bc[list.get(now_ai).get(now_aj).get(i)].p
								: l_max;
					sum += l_max;
				}
			}
		}
		// case 2-4. 사용자 a가 bc와 일대일 매칭이나 b의 매칭과 겹치는게 없는 경우
		else if (list.get(now_ai).get(now_aj).size() == 1
				&& !list.get(now_bi).get(now_bj).contains(list.get(now_ai).get(now_aj).get(0))) {
			sum += bc[list.get(now_ai).get(now_aj).get(0)].p;
			multi = false;
			// 2-4-1. 사용자 b가 겹치진 않아도 매칭되어있는 경우
			if (list.get(now_bi).get(now_bj).size() > 0) {
				// b가 하나만 매칭
				if (list.get(now_bi).get(now_bj).size() == 1)
					sum += bc[list.get(now_bi).get(now_bj).get(0)].p;
				// b가 둘 이상 매칭
				else {
					int l_max = 0;
					for (int i = 0; i < list.get(now_bi).get(now_bj).size(); i++)
						l_max = (l_max < bc[list.get(now_bi).get(now_bj).get(i)].p) ? bc[list.get(now_bi).get(now_bj).get(i)].p
								: l_max;
					sum += l_max;
				}
			}
		}
		// case 3. 사용자 다대다 매칭이나 겹치는게 없을경우
		else if (list.get(now_bi).get(now_bj).size() >= 2 && list.get(now_ai).get(now_aj).size() >= 2) {
			for (int i = 0; i < ba.length; i++) {
				ba[i] = false;
				bb[i] = false;
			}
			for (int i = 0; i < list.get(now_bi).get(now_bj).size(); i++) {
				bb[list.get(now_bi).get(now_bj).get(i)] = true;
			}
			for (int i = 0; i < list.get(now_ai).get(now_aj).size(); i++) {
				ba[list.get(now_ai).get(now_aj).get(i)] = true;
			}
			boolean l_flag = true;
			for (int i = 0; i < ba.length; i++) {
				if (ba[i] && bb[i])
					l_flag = false;
			}
			if (l_flag) {
				int l_max = 0;
				for (int i = 0; i < list.get(now_bi).get(now_bj).size(); i++)
					l_max = (l_max < bc[list.get(now_bi).get(now_bj).get(i)].p) ? bc[list.get(now_bi).get(now_bj).get(i)].p
							: l_max;
				sum += l_max;
				l_max = 0;
				for (int i = 0; i < list.get(now_ai).get(now_aj).size(); i++)
					l_max = (l_max < bc[list.get(now_ai).get(now_aj).get(i)].p) ? bc[list.get(now_ai).get(now_aj).get(i)].p
							: l_max;
				sum += l_max;
				multi = false;
			}
		}
		// case 4-1. 사용자a 멀티매칭, 사용자b 매칭 x
		else if (list.get(now_ai).get(now_aj).size() >= 2 && list.get(now_bi).get(now_bj).size() == 0) {
			int l_max = 0;
			for (int i = 0; i < list.get(now_ai).get(now_aj).size(); i++)
				l_max = (l_max < bc[list.get(now_ai).get(now_aj).get(i)].p) ? bc[list.get(now_ai).get(now_aj).get(i)].p : l_max;
			sum += l_max;
			multi = false;
		}
		// case 4-2. 사용자b 멀티매칭, 사용자a 매칭 x
		else if (list.get(now_bi).get(now_bj).size() >= 2 && list.get(now_ai).get(now_aj).size() == 0) {
			int l_max = 0;
			for (int i = 0; i < list.get(now_bi).get(now_bj).size(); i++)
				l_max = (l_max < bc[list.get(now_bi).get(now_bj).get(i)].p) ? bc[list.get(now_bi).get(now_bj).get(i)].p : l_max;
			sum += l_max;
			multi = false;
		}
		// case 5. 사용자a,b - bc multi 매칭
		if (multi) {
			p_max = 0;
			for (int i = 0; i < ba.length; i++) {
				ba[i] = false;
				bb[i] = false;
			}
			for (int i = 0; i < list.get(now_bi).get(now_bj).size(); i++) {
				bb[list.get(now_bi).get(now_bj).get(i)] = true;
			}
			for (int i = 0; i < list.get(now_ai).get(now_aj).size(); i++) {
				ba[list.get(now_ai).get(now_aj).get(i)] = true;
			}
			dfs(ba, bb, 1);
			sum += p_max;
		}
	}

	private static void dfs(boolean[] ba, boolean[] bb, int cnt) {
		if (cnt == 2) {
			getmax();
			return;
		}

		for (int i = 0; i < ba.length; i++) {
			if (ba[i]) {
				choose[0] = i;
			} else
				continue;
			for (int j = 0; j < bb.length; j++)
				if (bb[j]) {
					choose[1] = j;
					dfs(ba, bb, cnt + 1);
				} else
					continue;

		}
	}

	private static void getmax() {
		if (choose[0] == choose[1]) {
			if (p_max < bc[choose[0]].p)
				p_max = bc[choose[0]].p;
		} else if (p_max < bc[choose[0]].p + bc[choose[1]].p)
			p_max = bc[choose[0]].p + bc[choose[1]].p;
	}

}
