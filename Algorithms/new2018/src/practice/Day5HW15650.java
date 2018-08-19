package practice;

import java.util.Scanner;
import java.util.Vector;

//1���� N���� �ڿ��� �߿��� �ߺ� ���� M���� �� ����
//�� ������ ���������̾�� �Ѵ�.
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