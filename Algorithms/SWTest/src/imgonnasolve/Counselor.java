package imgonnasolve;

import java.util.Scanner;

public class Counselor {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int T = sc.nextInt();
		int N;

		for (int t_case = 1; t_case <= T; t_case++) {
			N = sc.nextInt();
			Zaxis[] axis = new Zaxis[N];
			int x, y;
			for (int i = 0; i < N; i++) {
				x = sc.nextInt();
				y = sc.nextInt();
				axis[i] = new Zaxis(x, y);
				// axis[i].x = sc.nextInt();
				// axis[i].y = sc.nextInt();
			}

		}
	}

	static class Zaxis {
		public int x;
		public int y;

		public Zaxis(int x, int y) {
			this.x = x;
			this.y = y;
		}
	}
}
