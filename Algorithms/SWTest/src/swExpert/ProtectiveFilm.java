package swExpert;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class ProtectiveFilm {
	static int D, W, K;
	static boolean flag = true;
	static int best = Integer.MAX_VALUE;

	static void solve(int[][] A, int change, int row, int kind) {
		if (best <= change)//유망성 검사
			return;

		int[] temp = new int[W];

		if (row != -1)//-1은 초기값 이후부터 되돌려놓을 행 저장
			for (int j = 0; j < W; j++) {
				temp[j] = A[row][j];
				A[row][j] = kind;
			}

		boolean[] B = new boolean[W];//성능검사
		int cnt;

		for (int j = 0; j < W; j++) {
			cnt = 1;
			for (int i = 0; i < D - 1; i++) {
				if (A[i][j] == A[i + 1][j]) {
					cnt++;
				} else
					cnt = 1;
				if (cnt == K) {
					B[j] = true;
					break;
				}
			}
		}
		flag = true;
		for (int i = 0; i < B.length; i++) {
			if (B[i] == false) {
				flag = false;
				break;
			}
		}

		if (flag) {//성능검사 통과한 경우
			if (best > change) {
				best = change;
				flag = true;
			}
		} else if (change < K) {
			for (int i = (row == -1) ? 0 : row + 1; i < D; i++) {
				solve(A, change + 1, i, 0);
				solve(A, change + 1, i, 1);
			}
		}
		if (row != -1)
			for (int i = 0; i < W; i++)
				A[row][i] = temp[i];
	}

	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		int T = Integer.parseInt(br.readLine());
		StringTokenizer s;

		for (int t_case = 1; t_case <= T; t_case++) {
			s = new StringTokenizer(br.readLine());
			D = Integer.parseInt(s.nextToken());
			W = Integer.parseInt(s.nextToken());
			K = Integer.parseInt(s.nextToken());
			int[][] A = new int[D][W];
			best = Integer.MAX_VALUE;

			for (int i = 0; i < D; i++) {
				s = new StringTokenizer(br.readLine());
				for (int j = 0; j < W; j++)
					A[i][j] = Integer.parseInt(s.nextToken());
			}
			solve(A, 0, -1, -1);
			System.out.println("#" + t_case + " " + best);
		}
	}

}
