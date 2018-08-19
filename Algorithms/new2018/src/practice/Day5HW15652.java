package practice;

import java.util.Scanner;
import java.util.Vector;

//1���� N���� �ڿ��� �߿��� M���� �� ����
//���� ���� ���� �� ��� �ȴ�.
//�� ������ �񳻸������̾�� �Ѵ�.
//	���̰� K�� ���� A�� A1 �� A2 �� ... �� AK-1 �� AK�� �����ϸ�, �񳻸������̶�� �Ѵ�.
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
