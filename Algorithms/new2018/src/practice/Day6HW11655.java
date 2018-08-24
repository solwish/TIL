package practice;

import java.util.Arrays;
import java.util.Scanner;
import java.util.Vector;

//N개의 자연수 중에서 M개를 고른 수열
//고른 수열은 오름차순이어야 한다.
public class Day6HW11655 {
	static int N, M;
	static boolean isVisited[];
	static Vector<Integer> V = new Vector<>();
	static int[] A;

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		N = sc.nextInt();
		M = sc.nextInt();
		isVisited = new boolean[N];
		A = new int[N];
		for (int i = 0; i < N; i++)
			A[i] = sc.nextInt();
		Arrays.sort(A);

		seq(0);
	}

	static void seq(int tmp) {
		if (V.size() == M) {
			for (int v : V)
				System.out.print(A[v] + " ");
			System.out.println();
			return;
		}
		for (int i = tmp; i < N; i++)
			if (!isVisited[i]) {
				isVisited[i] = true;
				V.add(i);
				seq(i + 1);
				V.remove(V.size() - 1);
				isVisited[i] = false;
			}
	}
}
