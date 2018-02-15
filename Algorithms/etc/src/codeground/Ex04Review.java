package codeground;

import java.util.Scanner;

public class Ex04Review {
	static int Answer;
	static int A, B, C, D, E, N;

	public static void main(String args[]) throws Exception {
		Scanner sc = new Scanner(System.in);
		int[] score = { 6, 13, 4, 18, 1, 20, 5, 12, 9, 14, 11, 8, 16, 7, 19, 3, 17, 2, 15, 10 };
		int T = sc.nextInt();
		for (int test_case = 0; test_case < T; test_case++) {
			A = sc.nextInt();
			B = sc.nextInt();
			C = sc.nextInt();
			D = sc.nextInt();
			E = sc.nextInt();
			N = sc.nextInt();

			Axis[] axis = new Axis[N];
			double tmp = 0;
			int[] tmpA = new int[N];
			for (int i = 0; i < N; i++) {
				axis[i] = new Axis(sc.nextInt(), sc.nextInt());
				tmp = Math.sqrt(axis[i].x * axis[i].x + axis[i].y * axis[i].y);
				if (tmp < A)
					tmpA[i] = -1;
				else if (tmp < B)
					tmpA[i] = 1;
				else if (tmp < C)
					tmpA[i] = 3;
				else if (tmp < D)
					tmpA[i] = 1;
				else if (tmp < E)
					tmpA[i] = 2;
				else
					tmpA[i] = 0;
			}

			for (int i = 0; i < N; i++) {
				double angle = Math.atan(axis[i].y / (double) axis[i].x) * 180 / Math.PI;
				if (axis[i].x < 0)
					angle += 180;
				angle += 9;
				angle = (angle + 360) % 360;
				int temp = (int) angle / 18;

				if (tmpA[i] == -1)
					Answer += 50;
				else
					Answer += tmpA[i] * score[temp];
			}

			System.out.println("Case #" + (test_case + 1));
			System.out.println(Answer);
		}
	}

}
