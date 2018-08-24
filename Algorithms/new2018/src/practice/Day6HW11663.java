package practice;

import java.util.Arrays;
import java.util.HashSet;
import java.util.Scanner;
import java.util.Vector;

//N개의 자연수 중에서 M개를 고른 수열
public class Day6HW11663 {
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

		seq();
	}

	static void seq() {
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
		for (int i = 0; i < N; i++)
			if (!isVisited[i]) {
				isVisited[i] = true;
				V.add(i);
				seq();
				V.remove(V.size() - 1);
				isVisited[i] = false;
			}
	}
}
// public class Day6HW11663 {
// private static int M;
// private static HashSet<String> set;
//
// public static void main(String args[]) {
// Scanner sc = new Scanner(System.in);
// int N = sc.nextInt();
// M = sc.nextInt();
//
// ArrayList<Integer> list = new ArrayList<>();
// while (N-- > 0)
// list.add(sc.nextInt());
//
// Collections.sort(list);
// set = new HashSet<String>();
// dfs(0, "", list);
// }
//
// private static void dfs(int s, String result, ArrayList<Integer> list) {
// if (s >= M) {
// if (set.contains(result))
// return;
//
// set.add(result);
// System.out.println(result);
// return;
// }
//
// for (Integer n : list) {
// ArrayList<Integer> temp = (ArrayList<Integer>) list.clone();
// temp.remove(n);
// dfs(s + 1, result + n + " ", temp);
// }
// }
// }
