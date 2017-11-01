package swExpert;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Flatten {
	static int N;
	static boolean[][] AA;
	static int ans;

	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		for (int t_case = 1; t_case <= 10; t_case++) {
			StringTokenizer s;
			N = Integer.parseInt(br.readLine());

			s = new StringTokenizer(br.readLine());
			AA = new boolean[100][100];
			int k;

			for (int i = 0; i < 100; i++) {
				k = Integer.parseInt(s.nextToken());
				for (int j = 0; j < k; j++)
					AA[j][i] = true;
			}

			// for (int i = 0; i < 100; i++) {
			// System.out.println();
			// for (int j = 0; j < 100; j++)
			// System.out.print(AA[i][j] + " ");
			// }

			flatten(0);
			System.out.println("#" + t_case + " " + ans);
		}
	}

	static void flatten(int cnt) {
		if (cnt == N) {
			ans = getHeight() + 1;
			return;
		}
		int high = getHigh();
		int low = getLow();

		for (int j = 0; j < 100; j++) {
			if (AA[low][j] == false) {
				AA[low][j] = true;
				break;
			}
		}

		for (int j = 0; j < 100; j++) {
			if (AA[high][j] == true) {
				AA[high][j] = false;
				break;
			}
		}

		flatten(cnt + 1);
	}

	static int getHeight() {
		int low = getLow();
		int high = getHigh();
		return high - low;
	}

	static int getHigh() {
		int high = 0;
		boolean temp;
		for (int i = 0; i < 100; i++) {
			temp = true;
			for (int j = 0; j < 100; j++)
				if (AA[i][j] == true)
					temp = false;

			if (temp) {
				high = i - 1;
				break;
			}
		}
		if (high == 0)
			high = 99;

		return high;
	}

	static int getLow() {
		int low = 0;
		for (int i = 0; i < 100; i++)
			for (int j = 0; j < 100; j++)
				if (AA[i][j] == false) {
					low = i;
					return low;
				}
		return low;
	}
}
