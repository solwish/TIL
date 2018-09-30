package sam;

import java.util.Scanner;
import java.util.Vector;

class XYaxis {
	int x, y;

	public XYaxis(int x, int y) {
		this.x = x;
		this.y = y;
	}
}

public class P07_2383_re {
	static int MAXN = 11;
	static int MAXT = 2 * MAXN + MAXN * MAXN;
	static int N, choose[], min, s0, s1;
	static Vector<XYaxis> P, S;

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int T = sc.nextInt();

		for (int t_case = 1; t_case <= T; t_case++) {
			min = Integer.MAX_VALUE;
			N = sc.nextInt();
			P = new Vector<>();
			S = new Vector<>();
			s0 = 0;
			s1 = 0;

			for (int i = 0; i < N; i++)
				for (int j = 0; j < N; j++) {
					int tmp = sc.nextInt();
					if (tmp == 1)
						P.add(new XYaxis(i, j));
					else if (tmp > 1) {
						S.add(new XYaxis(i, j));
						if (s0 == 0)
							s0 = tmp;
						else
							s1 = tmp;
					}
				}
			choose = new int[P.size()];

			dfs(0);
			System.out.println("#" + t_case + " " + min);
		}
	}

	private static void dfs(int cnt) {
		if (cnt == P.size()) {
			checkTime();
			return;
		}
		for (int i = 0; i < 2; i++) {
			choose[cnt] = i;
			dfs(cnt + 1);
		}
	}

	private static void checkTime() {
		int s0_arrival_time[] = new int[P.size()];
		int s1_arrival_time[] = new int[P.size()];
		for (int i = 0; i < choose.length; i++) {
			if (choose[i] == 0)
				s0_arrival_time[i] = 1 + Math.abs(P.get(i).x - S.get(0).x) + Math.abs(P.get(i).y - S.get(0).y);
			else if (choose[i] == 1)
				s1_arrival_time[i] = 1 + Math.abs(P.get(i).x - S.get(1).x) + Math.abs(P.get(i).y - S.get(1).y);
		}
		int cnt_s0 = 0;
		int cnt_s1 = 0;
		int s0_fin_time[] = new int[P.size()];
		int s1_fin_time[] = new int[P.size()];
		int s0_rest_time[] = new int[P.size()];
		int s1_rest_time[] = new int[P.size()];
		int max = 0;

		for (int time = 1; time < MAXT; time++) {

			for (int i = 0; i < P.size(); i++) {
				if (s0_rest_time[i] > 0) {
					s0_rest_time[i]--;
					if (s0_rest_time[i] == 0) {
						s0_fin_time[i] = time;
						cnt_s0--;
					}
				}
				if (s1_rest_time[i] > 0) {
					s1_rest_time[i]--;
					if (s1_rest_time[i] == 0) {
						s1_fin_time[i] = time;
						cnt_s1--;
					}
				}
			}

			for (int p_i = 0; p_i < P.size(); p_i++) {
				if (s0_arrival_time[p_i] == time) {
					if (cnt_s0 < 3) {
						cnt_s0++;
						s0_rest_time[p_i] = s0;
					} else
						s0_arrival_time[p_i]++;
				}
				if (s1_arrival_time[p_i] == time) {
					if (cnt_s1 < 3) {
						cnt_s1++;
						s1_rest_time[p_i] = s1;
					} else
						s1_arrival_time[p_i]++;
				}
			}

		}
		for (int i = 0; i < P.size(); i++) {
			if (s0_fin_time[i] > max)
				max = s0_fin_time[i];
			if (s1_fin_time[i] > max)
				max = s1_fin_time[i];
		}
		if (min > max)
			min = max;

	}

}
