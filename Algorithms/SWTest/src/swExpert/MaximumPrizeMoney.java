package swExpert;

import java.util.ArrayList;
import java.util.Scanner;

public class MaximumPrizeMoney {
	static int N, cntP;
	static int max;
	static ArrayList<Integer> A;

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int T = sc.nextInt();

		for (int t_case = 1; t_case <= T; t_case++) {
			N = sc.nextInt();
			cntP = sc.nextInt();
			int k = N;
			int temp = 0;
			while (k != 0) {
				k /= 10;
				temp++;
			}
			A = new ArrayList<>();

			for (int i = 0; i < temp; i++)
				A.add(0);

			for (temp -= 1; temp >= 0; temp--) {
				A.set(temp, N % 10);
				N /= 10;
			}
			max = Integer.MIN_VALUE;
			recur(0, 0, 0);

			System.out.println("#" + t_case + " " + max);
		}
	}

	private static void recur(int cnt, int x, int y) {
		int num = 0;
		int k = 0;

		if (cnt == cntP || cnt >= 6) {
			for (int i = A.size() - 1; i >= 0; i--) {
				num += A.get(i) * Math.pow(10, k);
				k++;
			}

			max = (max < num) ? num : max;

			int temp = A.get(x);
			A.set(x, A.get(y));
			A.set(y, temp);
			return;
		}
		int temp;
		for (int i = x; i < A.size() - 1; i++) {
			for (int j = i + 1; j < A.size(); j++) {
				if (i == j)
					continue;
				temp = A.get(i);
				A.set(i, A.get(j));
				A.set(j, temp);
				recur(cnt + 1, i, j);
			}
		}
		temp = A.get(x);
		A.set(x, A.get(y));
		A.set(y, temp);
	}
}