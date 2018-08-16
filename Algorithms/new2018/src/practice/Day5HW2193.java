package practice;

import java.util.Scanner;

//2193 - ÀÌÄ£¼ö
public class Day5HW2193 {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int n = sc.nextInt();
		long d[] = new long[n + 1];
		d[0] = 0;
		d[1] = 1;
		for (int i = 2; i <= n; i++)
			d[i] = d[i - 2] + d[i - 1];

		System.out.println(d[n]);
	}
}
