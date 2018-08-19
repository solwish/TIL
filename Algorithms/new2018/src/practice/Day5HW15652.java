package practice;

import java.util.Scanner;
import java.util.Vector;

//1부터 N까지 자연수 중에서 M개를 고른 수열
//같은 수를 여러 번 골라도 된다.
//고른 수열은 비내림차순이어야 한다.
//	길이가 K인 수열 A가 A1 ≤ A2 ≤ ... ≤ AK-1 ≤ AK를 만족하면, 비내림차순이라고 한다.
public class Day5HW15652 {
	static int N, M;
	static Vector<Integer> V = new Vector<>();

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);

		N = sc.nextInt();
		M = sc.nextInt();
		nPm(1);
	}

	private static void nPm(int n) {
		if (V.size() == M) {
			for (int v : V)
				System.out.print(v + " ");
			System.out.println();
			return;
		}
		for (int i = n; i <= N; i++) {
			V.add(i);
			nPm(i);
			V.remove(V.size() - 1);
		}
	}
}
