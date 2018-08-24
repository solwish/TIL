package practice;

import java.util.Arrays;
import java.util.HashSet;
import java.util.Scanner;
import java.util.Vector;

//N���� �ڿ��� �߿��� M���� �� ����
//���� ���� ���� �� ��� �ȴ�.
//�� ������ �񳻸������̾�� �Ѵ�.
//���̰� K�� ���� A�� A1 �� A2 �� ... �� AK-1 �� AK�� �����ϸ�, �񳻸������̶�� �Ѵ�.
public class Day6HW11666 {
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

		seq(0);
		System.out.println(sb);
	}

	static void seq(int cnt) {
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
		for (int i = cnt; i < N; i++) {
			V.add(i);
			seq(i);
			V.remove(V.size() - 1);
		}
	}
}