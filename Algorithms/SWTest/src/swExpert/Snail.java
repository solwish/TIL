package swExpert;

import java.util.Scanner;

public class Snail {

	public static void main(String[] args) {

		Scanner sc = new Scanner(System.in);
		int T = sc.nextInt();

		for (int test_case = 0; test_case < T; test_case++) {
			int num = sc.nextInt();
			int[][] A = new int[num][num];
			int tg = 1;
			int i = 0, j = -1, k = num;
			int n = 0;

			while (true) {
				for (int p = 0; p < k; p++) {
					j = j + tg;
					A[i][j] = ++n;
				}
				k--;
				if (k <= 0)
					break;
				for (int p = 0; p < k; p++) {
					i = i + tg;
					A[i][j] = ++n;
				}
				tg = tg * -1;
			}

			System.out.println("#" + (test_case + 1));
			for (int x = 0; x < num; x++) {
				for (int y = 0; y < num; y++) {
					System.out.print(A[x][y] + " ");
				}
				System.out.println();
			}
			System.out.println();
		}
	}
}
