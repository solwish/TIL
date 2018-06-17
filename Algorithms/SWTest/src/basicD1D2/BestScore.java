package basicD1D2;

import java.util.Arrays;
import java.util.Scanner;

public class BestScore {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int T = sc.nextInt();

		for (int t_case = 1; t_case <= T; t_case++) {
			int N = sc.nextInt();
			int K = sc.nextInt();
			int[] score = new int[N];

			for (int i = 0; i < N; i++)
				score[i] = sc.nextInt();

			Arrays.sort(score);
			int Ans = 0;
			for (int i = N - 1; i >= N - K; i--)
				Ans += score[i];

			System.out.println("#" + t_case + " " + Ans);
		}

	}

}
