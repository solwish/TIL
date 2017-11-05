package theory;

import java.io.BufferedReader;
import java.io.InputStreamReader;

public class PracticeNQueen {
	static int N, cnt;
	static int[] Array;
	static boolean[] isPossible;

	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		int T = Integer.parseInt(br.readLine());

		for (int t_case = 1; t_case <= T; t_case++) {
			N = Integer.parseInt(br.readLine());
			Array = new int[N + 1];
			cnt = 0;

			queens(0);
			System.out.println(N + ": " + cnt);
		}
	}

	static void queens(int level) {
		if (level == N) {
			cnt++;
			return;
		} else
			for (int i = 1; i <= N; i++) {
				Array[level + 1] = i;
				if (isPossible(level + 1))
					queens(level + 1);
			}
	}

	static boolean isPossible(int k) {
		for (int i = 1; i < k; i++) {
			if (Array[i] == Array[k])
				return false;
			else if (k - i == Math.abs(Array[k] - Array[i]))
				return false;
		}
		return true;
	}
}
