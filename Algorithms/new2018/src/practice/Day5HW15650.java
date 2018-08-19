package practice;

import java.util.Scanner;
import java.util.Vector;

//1부터 N까지 자연수 중에서 중복 없이 M개를 고른 수열
//고른 수열은 오름차순이어야 한다.
public class Day5HW15650 {
	static int N, M;
	static Vector<Integer> V = new Vector<>();
	static StringBuffer sb = new StringBuffer();

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);

		N = sc.nextInt();
		M = sc.nextInt();
		nPm();
		System.out.println(sb);
	}

	private static void nPm() {
		if (V.size() == M) {
			for (int v : V)
				sb.append(v + " ");
			sb.append("\n");
			return;
		}
		for (int i = 1; i <= N; i++) {
			V.add(i);
			nPm();
			V.remove(V.size() - 1);
		}
	}
}