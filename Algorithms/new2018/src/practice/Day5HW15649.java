package practice;

import java.util.Scanner;
import java.util.Vector;

//1���� N���� �ڿ��� �߿��� �ߺ� ���� M���� �� ����
public class Day5HW15649 {
	static int N, M;
	static boolean isVisited[];
	static Vector<Integer> V = new Vector<>();

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);

		N = sc.nextInt();
		M = sc.nextInt();
		isVisited = new boolean[N + 1];
		nPm();
	}

	private static void nPm() {
		if (V.size() == M) {
			for (int v : V)
				System.out.print(v + " ");
			System.out.println();
			return;
		}
		for (int i = 1; i <= N; i++)
			if (!isVisited[i]) {
				isVisited[i] = true;
				V.add(i);
				nPm();
				V.remove(V.size() - 1);
				isVisited[i] = false;
			}
	}
}
