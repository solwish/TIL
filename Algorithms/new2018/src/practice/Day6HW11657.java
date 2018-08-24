package practice;

import java.util.Arrays;
import java.util.Scanner;
import java.util.Vector;

//N개의 자연수 중에서 M개를 고른 수열
//같은 수를 여러 번 골라도 된다.
//고른 수열은 비내림차순이어야 한다.
//길이가 K인 수열 A가 A1 ≤ A2 ≤ ... ≤ AK-1 ≤ AK를 만족하면, 비내림차순이라고 한다.
public class Day6HW11657 {
	static int N, M;
	static Vector<Integer> V = new Vector<>();
	static int[] A;
	static StringBuffer sb = new StringBuffer();

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		N = sc.nextInt();
		M = sc.nextInt();
		A = new int[N];
		for (int i = 0; i < N; i++)
			A[i] = sc.nextInt();
		Arrays.sort(A);

		seq(0);
		System.out.println(sb);
	}

	static void seq(int tmp) {
		if (V.size() == M) {
			for (int v : V)
				sb.append(A[v] + " ");
			sb.append("\n");
			return;
		}
		for (int i = tmp; i < N; i++) {
			V.add(i);
			seq(i);
			V.remove(V.size() - 1);
		}
	}
}