package practice;

import java.util.Arrays;
import java.util.HashSet;
import java.util.Scanner;
import java.util.Vector;

//N개의 자연수 중에서 M개를 고른 수열
//같은 수를 여러 번 골라도 된다.
public class Day6HW11665 {
	static int N, M;
	static Vector<Integer> V = new Vector<>();
	static int[] A;
	private static HashSet<String> set;
	private static StringBuffer sb = new StringBuffer();

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		N = sc.nextInt();
		M = sc.nextInt();
		A = new int[N];
		for (int i = 0; i < N; i++)
			A[i] = sc.nextInt();
		Arrays.sort(A);
		set = new HashSet<String>();

		seq();
		System.out.println(sb);
	}

	static void seq() {
		if (V.size() == M) {
			String s = "";
			for (int v : V)
				s += String.valueOf(A[v]) + " ";
			if (!set.contains(s)) {
				sb.append(s + "\n");
				set.add(s);
			}
			return;
		}
		for (int i = 0; i < N; i++) {
			V.add(i);
			seq();
			V.remove(V.size() - 1);
		}
	}
}