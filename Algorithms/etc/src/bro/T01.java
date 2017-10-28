package bro;

import java.util.Scanner;

public class T01 {

	public static void main(String[] args) {

		Scanner s = new Scanner(System.in);

		int n = s.nextInt();
		int d = s.nextInt();
		int k = s.nextInt();
		int j = s.nextInt();
		// ½ÃÀÛ
		// int[] A = new int[n+1];
		boolean[] B = new boolean[n + 1];
		B[0] = true;
		int start = 1;
		int cnt = 0;
		int nmg = n;
		int ans = -1;

		if (d == 1) {
			while (true) {
				start++;
				if (start > n)
					start = 1;

				if (B[start] == false) {
					cnt++;
				}

				// while (cnt > n)
				// cnt -= k;

				if (cnt == k) {
					B[start] = true;
					nmg--;
					k += j;
					cnt = 0;
				}
				// start = cnt;

				if (nmg == 1)
					break;
			}
		} else {
			while (true) {
				start--;
				if (start <= 0)
					start = n;

				if (B[start] == false) {
					cnt++;
				}

				if (cnt == k) {
					B[start] = true;
					nmg--;
					cnt = 0;
					k += j;
				}

				// while (cnt > n)
				// cnt -= k;
				// start = cnt;

				if (nmg == 1)
					break;
			}
		}

		for (int i = 1; i <= n; i++)
			if (B[i] == false)
				ans = i;

		System.out.println(ans);
	}

}
