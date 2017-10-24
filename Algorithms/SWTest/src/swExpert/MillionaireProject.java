package swExpert;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class MillionaireProject {
	static int N;
	static int ans;

	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		int T = Integer.parseInt(br.readLine());
		StringTokenizer s;

		for (int t_case = 1; t_case <= T; t_case++) {
			N = Integer.parseInt(br.readLine());
			int[] A = new int[N];
			int[] B = new int[N];
			s = new StringTokenizer(br.readLine());
			for (int i = 0; i < N; i++)
				A[i] = Integer.parseInt(s.nextToken());

			solve(A, B, N);

			System.out.println("#" + t_case + " " + ans);
		}
	}

	static void solve(int[] A, int[] B, int base) {
		if (base == 0)
			return;

		int max = 0;
		boolean flag = false;
		for (int i = 0; i < base - 1; i++) {
			if (A[i] < A[i + 1]) {
				if (max < A[i + 1])
					max = A[i + 1];
				flag = true;
			}
		}
		int[] AA, BB;
		int temp = 0;
		for (int i = 0; i < base; i++)
			if (A[i] == max) {
				B[i] = 1;
				temp = i;
			}

		ans = 0;
		int cnt = 0;
		if (flag)
			for (int i = 0; i < base; i++) {
				if (B[i] == 0) {
					ans -= A[i];
					cnt++;
				} else if (B[i] == 1) {
					ans += cnt * A[i];
					cnt = 0;
				}
			}
		
		AA = new int[N - 1 - temp];
		BB = new int[N - 1 - temp];
		int x = 0;
		for (int i = temp + 1; i < N; i++) {
			AA[x] = A[i];
			x++;
		}
		solve(AA, BB, N - 1 - temp);
	}

}
