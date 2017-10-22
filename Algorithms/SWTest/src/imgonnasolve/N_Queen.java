package imgonnasolve;

import java.util.Scanner;

public class N_Queen {
	static int N;
	static int Q = 0;
	static int tempX, tempY; // ������

	static void solve(int[][] A, int x, int y, int cnt) {
		if (cnt >= N) {
			// System.out.println("de " + tempX + " " + tempY);// ������
			Q++;
			return;
		}

		int[][] D = new int[N][N];
		for (int i = 0; i <= (N - 1) / 2; i++)
			for (int j = 0; j <= (N - 1) / 2; j++)
				D[i][j] = A[i][j];

		for (int i = 0; i < N; i++)
			A[i][y] = 1;
		for (int i = 0; i < N; i++)
			A[x][i] = 1;
		for (int i = 0; i < N; i++)
			if (0 <= x + i && x + i < N && 0 <= y + i && y + i < N)
				A[x + i][y + i] = 1;
		for (int i = N; i > 0; i--)
			if (0 <= x - i && x - i < N && 0 <= y - i && y - i < N)
				A[x - i][y - i] = 1;
		for (int i = 0; i < N; i++)
			if (0 <= x - i && x - i < N && 0 <= y + i && y + i < N)
				A[x - i][y + i] = 1;
		for (int i = N; i > 0; i--)
			if (0 <= x + i && x + i < N && 0 <= y - i && y - i < N)
				A[x + i][y - i] = 1;

		// // ***********************************************
		// for (int i = 0; i < N; i++) {
		// for (int j = 0; j < N; j++) {
		// System.out.print(A[i][j] + " ");
		// }
		// System.out.println();
		// }
		// System.out.println();
		// // ***********************************************

		for (int i = 0; i < N; i++)
			for (int j = 0; j < N; j++)
				if (A[i][j] == 0)
					solve(A, i, j, cnt + 1);

		for (int i = 0; i <= (N - 1) / 2; i++)
			for (int j = 0; j <= (N - 1) / 2; j++)
				A[i][j] = D[i][j];
		
	}

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int T = sc.nextInt();

		for (int t_case = 1; t_case <= T; t_case++) {
			N = sc.nextInt();
			Q = 0;

			for (int i = 0; i <= (N - 1) / 2; i++)
				for (int j = 0; j <= (N - 1) / 2; j++) {
					int[][] A = new int[N][N];

					tempX = i;// ������
					tempY = j;// ������

					solve(A, i, j, 1);
				}

			System.out.println("#" + t_case + " " + Q);
		}
	}
}