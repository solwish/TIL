package swExpert;

import java.io.BufferedReader;
import java.io.InputStreamReader;

public class Harvesting {

	public static void main(String[] args) throws Exception {

		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		int T = Integer.parseInt(br.readLine());

		for (int test_case = 1; test_case <= T; test_case++) {
			int N = Integer.parseInt(br.readLine());
			String s;

			int[][] A = new int[N][N];
			for (int i = 0; i < N; i++) {
				s = br.readLine();
				for (int j = 0; j < N; j++) {
					A[i][j] = Integer.parseInt(String.valueOf(s.charAt(j)));
				}
			}

			int L = N / 2;
			int H = N / 2;
			int sum = 0;
			for (int i = 0; i < N; i++) {
				for (int j = L; j <= H; j++) {
					sum += A[i][j];
				}
				if (i >= N / 2) {
					L = L + 1;
					H = H - 1;
				} else {
					L = L - 1;
					H = H + 1;
				}
			}
			System.out.println("#" + test_case + " " + sum);
		}
	}
}
