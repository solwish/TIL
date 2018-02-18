package codeground;

import java.util.Scanner;

public class Ex04Review1 {
	static int[] score = { 6, 13, 4, 18, 1, 20, 5, 12, 9, 14, 11, 8, 16, 7, 19, 3, 17, 2, 15, 10 };
	static int ans;
	static int A, B, C, D, E, N;

	public static void main(String args[]) throws Exception {
		Scanner sc = new Scanner(System.in);
		int T = sc.nextInt();
		for (int t_case = 1; t_case <= T; t_case++) {
			A = sc.nextInt();
			B = sc.nextInt();
			C = sc.nextInt();
			D = sc.nextInt();
			E = sc.nextInt();
			N = sc.nextInt();

			Axis[] axis = new Axis[N];
			double tmp = 0;
			int multi = 0;
			double angle = 0;

			for (int i = 0; i < N; i++) {
				axis[i] = new Axis(sc.nextInt(), sc.nextInt());
				tmp = Math.sqrt(axis[i].x * axis[i].x + axis[i].y * axis[i].y);
				if (tmp < A)
					multi = -1;
				else if (tmp < B)
					multi = 1;
				else if (tmp < C)
					multi = 3;
				else if (tmp < D)
					multi = 1;
				else if (tmp < E)
					multi = 2;
				else
					multi = 0;

				angle = Math.atan(axis[i].y / (double) axis[i].x) * 180 / Math.PI;
				if (axis[i].x < 0)
					angle += 180;
				angle = (angle + 9 + 360) % 360;
				int point = (int) (angle / 18);

				if (multi == -1)
					ans += 50;
				else
					ans += score[point] * multi;
			}

			System.out.println("Case #" + (t_case + 1));
			System.out.println(ans);
		}
	}
}
