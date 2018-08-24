package practice;

import java.util.Arrays;
import java.util.HashSet;
import java.util.Scanner;
import java.util.Vector;

//N개의 자연수 중에서 M개를 고른 수열
//고른 수열은 비내림차순이어야 한다.
//길이가 K인 수열 A가 A1 ≤ A2 ≤ ... ≤ AK-1 ≤ AK를 만족하면, 비내림차순이라고 한다.
public class Day6HW11664 {
	static int N, M;
	static boolean isVisited[];
	static Vector<Integer> V = new Vector<>();
	static int[] A;
	private static HashSet<String> set;

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		N = sc.nextInt();
		M = sc.nextInt();
		isVisited = new boolean[N];
		A = new int[N];
		for (int i = 0; i < N; i++)
			A[i] = sc.nextInt();
		Arrays.sort(A);
		set = new HashSet<String>();

		seq(0);
	}

	static void seq(int cnt) {
		if (V.size() == M) {
			String s = "";
			for (int v : V)
				s += String.valueOf(A[v]) + " ";
			if (!set.contains(s)) {
				System.out.println(s);
				set.add(s);
			}
			return;
		}
		for (int i = cnt; i < N; i++)
			if (!isVisited[i]) {
				isVisited[i] = true;
				V.add(i);
				seq(i + 1);
				V.remove(V.size() - 1);
				isVisited[i] = false;
			}
	}
}