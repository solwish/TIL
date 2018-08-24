package practice;

import java.util.Arrays;
import java.util.Scanner;
import java.util.Vector;

// N���� �ڿ��� �߿��� M���� �� ����
// ���� ���� ���� �� ��� �ȴ�.
public class Day6HW11656 {
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

		seq();
		System.out.println(sb);
	}

	static void seq() {
		if (V.size() == M) {
			for (int v : V)
				sb.append(A[v] + " ");
			sb.append("\n");
			return;
		}
		for (int i = 0; i < N; i++) {
			V.add(i);
			seq();
			V.remove(V.size() - 1);
		}
	}
}