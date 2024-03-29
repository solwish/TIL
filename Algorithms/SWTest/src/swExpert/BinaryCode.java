package swExpert;

import java.util.Scanner;

public class BinaryCode {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int T = sc.nextInt();

		for (int test_case = 0; test_case < T; test_case++) {
			int N, M;
			N = sc.nextInt();
			M = sc.nextInt();
			int[][] A = new int[N][M];
			int[] code = new int[56];
			String s;
			sc.nextLine();

			for (int i = 0; i < N; i++) {
				s = sc.nextLine();
				for (int j = 0; j < M; j++) {
					A[i][j] = ((int) s.charAt(j)) - 48;
				}
			}

			int x = 0;
			int y = 0;
			for (int i = N - 1; i >= 0; i--) {
				for (int j = M - 1; j >= 0; j--) {
					if (A[i][j] == 1) {
						x = i;
						y = j;
						for (int u = 0; u < 56; u++) {
							code[u] = A[x][y];
							y--;
						}
						break;
					}
				}
				if (!(x == 0))
					break;
			}

			int[] sol = new int[8];
			solve(code, sol);
			int sum = 0;
			if (((sol[0] + sol[2] + sol[4] + sol[6]) * 3 + (sol[1] + sol[3] + sol[5] + sol[7])) % 10 == 0) {
				for (int i = 0; i < 8; i++) {
					sum = sum + sol[i];
				}
			}
			System.out.println("#" + (test_case + 1) + " " + sum);
		}
	}

	private static void solve(int[] code, int[] sol) {
		int z = 7;
		for (int i = 0; i < 56; i = i + 7) {
			if (code[i + 1] == 0) {
				if (code[i + 2] == 1 && code[i + 3] == 1 && code[i + 4] == 0 && code[i + 5] == 0 && code[i + 6] == 0) {
					sol[z] = 0;
					z--;
				} else if (code[i + 2] == 0 && code[i + 3] == 1 && code[i + 4] == 1 && code[i + 5] == 0
						&& code[i + 6] == 0) {
					sol[z] = 1;
					z--;
				} else if (code[i + 2] == 1 && code[i + 3] == 1 && code[i + 4] == 1 && code[i + 5] == 1
						&& code[i + 6] == 0) {
					sol[z] = 3;
					z--;
				} else if (code[i + 2] == 0 && code[i + 3] == 0 && code[i + 4] == 1 && code[i + 5] == 1
						&& code[i + 6] == 0) {
					sol[z] = 5;
					z--;
				}

			} else if (code[i + 1] == 1) {
				if (code[i + 2] == 0 && code[i + 3] == 0 && code[i + 4] == 1 && code[i + 5] == 0 && code[i + 6] == 0) {
					sol[z] = 2;
					z--;
				} else if (code[i + 2] == 0 && code[i + 3] == 0 && code[i + 4] == 0 && code[i + 5] == 1
						&& code[i + 6] == 0) {
					sol[z] = 4;
					z--;
				} else if (code[i + 2] == 1 && code[i + 3] == 1 && code[i + 4] == 0 && code[i + 5] == 1
						&& code[i + 6] == 0) {
					sol[z] = 6;
					z--;
				} else if (code[i + 2] == 0 && code[i + 3] == 1 && code[i + 4] == 1 && code[i + 5] == 1
						&& code[i + 6] == 0) {
					sol[z] = 7;
					z--;
				} else if (code[i + 2] == 1 && code[i + 3] == 0 && code[i + 4] == 1 && code[i + 5] == 1
						&& code[i + 6] == 0) {
					sol[z] = 8;
					z--;
				} else if (code[i + 2] == 0 && code[i + 3] == 1 && code[i + 4] == 0 && code[i + 5] == 0
						&& code[i + 6] == 0) {
					sol[z] = 9;
					z--;
				}
			}
		}
	}
}
