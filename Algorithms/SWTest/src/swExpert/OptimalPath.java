package swExpert;

import java.util.Scanner;

public class OptimalPath {

	static int abs(int x) {
		if (x < 0)
			x *= -1;
		return x;
	}

	static class Zxy01 {
		int x;
		int y;

		public Zxy01(int x, int y) {
			super();
			this.x = x;
			this.y = y;
		}

		@Override
		public String toString() {
			return "Zxy01 [x=" + x + ", y=" + y + "]";
		}
	}

	static Zxy01[] zxy;
	static int N;
	static int ans;

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int T = sc.nextInt();

		for (int t_case = 1; t_case <= T; t_case++) {
			N = sc.nextInt() + 2;
			zxy = new Zxy01[N];
			int x, y;
			for (int i = 0; i < N; i++) {
				x = sc.nextInt();
				y = sc.nextInt();
				zxy[i] = new Zxy01(x, y);
			}

			ans = Integer.MAX_VALUE;

			solve(2);
			System.out.println("#" + t_case + " " + ans);
		}
	}

	static void solve(int cnt) {
		if (cnt == N) {
			int dis = 0;
			dis += abs(zxy[0].x - zxy[2].x) + abs(zxy[0].y - zxy[2].y) + abs(zxy[1].x - zxy[N - 1].x)
					+ abs(zxy[1].y - zxy[N - 1].y);
			for (int i = 2; i < N - 1; i++)
				dis += abs(zxy[i].x - zxy[i + 1].x) + abs(zxy[i].y - zxy[i + 1].y);
			ans = (dis < ans) ? dis : ans;
			return;
		} else
			for (int i = cnt; i < N; i++) {
				Zxy01 temp = zxy[cnt];
				zxy[cnt] = zxy[i];
				zxy[i] = temp;

				solve(cnt + 1);

				temp = zxy[cnt];
				zxy[cnt] = zxy[i];
				zxy[i] = temp;
			}
	}
}