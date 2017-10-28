package bro;

import java.util.Scanner;

public class T02 {

	public static void main(String[] args) {
		Scanner s = new Scanner(System.in);
		int n = s.nextInt();
		int max = Integer.MIN_VALUE;
		int min = Integer.MAX_VALUE;
		Zxy[] zxy = new Zxy[n];

		for (int i = 0; i < n; i++) {
			int a = s.nextInt();
			int b = s.nextInt();

			// 여기부터 작성해 주세요
			zxy[i] = new Zxy(a, b);
			if (a < min)
				min = a;
			if (b > max)
				max = b;
		}

		boolean[] BB = new boolean[max + 1];
		int[] AA = new int[max + 1];
		for (int i = 0; i < n; i++)
			for (int j = zxy[i].x; j <= zxy[i].y; j++) {
				if (BB[j])
					BB[j] = false;
				else
					BB[j] = true;
				AA[j]++;
			}

		if (BB[max])
			BB[max] = false;
		else
			BB[max] = true;

		System.out.println("(-, " + min + ")");
		for (int i = min + 1; i < max; i++) {
			if (!BB[i - 1] == BB[i])
				if (BB[i] == false) {
					if (AA[i] > 1)
						System.out.print("[");
					else
						System.out.print("(");
					System.out.print(i + ", ");
				} else if (BB[i] == true) {
					if (AA[i] > 1)
						System.out.print("[");
					else
						System.out.print("(");
					System.out.print(i + ", ");
				}

			if (!BB[i] == BB[i + 1])
				if (BB[i] == false) {
					System.out.print(i);
					if (AA[i] > 1)
						System.out.println("]");
					else
						System.out.println(")");
				} else if (BB[i] == true) {
					System.out.print(i);
					if (AA[i] > 1)
						System.out.println("]");
					else
						System.out.println(")");
				}
		}
		System.out.println("(" + max + ", +)");
	}

	static class Zxy {
		int x, y;
		public Zxy(int x, int y) {
			this.x = x;
			this.y = y;
		}
	}
}
