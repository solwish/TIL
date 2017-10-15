package swExpert;

import java.util.Scanner;

public class HomeProtectService {

	static final int N = 20;
	static int n, m;
	static int[][] map = new int[N][N]; // map�� ũ��
	static int[] price = new int[N + 2]; // ���� ������ ����

	static boolean is_range(int x, int y) {
		return (0 <= x && x < n) && (0 <= y && y < n);
	}

	static int MAX(int a, int b) {
		return ((a > b) ? (a) : (b));
	}

	// x,y ��ǥ���� k ũ���� ������ ���� ��� ���񽺸� ���غ��� �ʰ� �����޴� ���� ��
	static int check(int x, int y, int k) {
		int cnt = 0;
		int nexty;
		int endp;

		// kũ���� ������ ���� ��, �Ʒ� ���� Ȯ��
		for (int i = 1; i <= k - 1; i++) {
			int up_nextx = x - k + i;
			int down_nextx = x + k - i;

			endp = i * 2 - 1;
			nexty = y - endp / 2;

			for (int j = 0; j < endp; j++) {
				if (is_range(up_nextx, nexty + j) && map[up_nextx][nexty + j] == 1)
					cnt++; // ��
				if (is_range(down_nextx, nexty + j) && map[down_nextx][nexty + j] == 1)
					cnt++; // �Ʒ�
			}
		}

		// kũ���� ������ ���� ����� Ȯ��
		endp = k * 2 - 1;
		nexty = y - endp / 2;
		for (int i = 0; i < endp; i++)
			if (is_range(x, nexty + i) && map[x][nexty + i] == 1)
				cnt++;

		// ���ظ� ���� ������, Ȩ��� ���񽺸� �����޴� ���� �� ����
		if (m * cnt - price[k] >= 0)
			return cnt;
		return 0;
	}

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int T = sc.nextInt();

		// Ȩ ��� ���� ������ ���� ���
		price[1] = 1;
		for (int i = 1; i < N + 1; i++)
			price[i + 1] = (price[i + 1] == 0) ? price[i] + 4 * i : price[i + 1];

		for (int tc = 1; tc <= T; tc++) {
			// input & init
			int ans = 0;
			n = sc.nextInt();
			m = sc.nextInt();
			for (int i = 0; i < n; i++)
				for (int j = 0; j < n; j++)
					map[i][j] = sc.nextInt();

			// process
			for (int i = 0; i < n; i++)
				for (int j = 0; j < n; j++)
					for (int k = 1; k <= n + 1; k++)
						ans = MAX(ans, check(i, j, k));

			// output
			System.out.println("#" + tc + " " + ans);

		}
	}

}
