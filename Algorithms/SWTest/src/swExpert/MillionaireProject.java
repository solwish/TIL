package swExpert;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class MillionaireProject {
	static int N;
	static long ans;

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
			ans = 0;
			solve(A, B, N);

			System.out.println("#" + t_case + " " + ans);
		}
	}

	static void solve(int[] A, int[] B, int base) {
		if (base == 0)
			return;

		int max = 0;
		int temp = 0;
		for (int i = 0; i < base; i++)
			if (max < A[i]) {
				max = A[i];
				temp = i;
			}
		int[] AA;
		B[temp] = 1;

		if (B[0] == 1) {
			AA = new int[base - 1];
			int x = 0;
			for (int i = 1; i < base; i++) {
				AA[x] = A[i];
				x++;
			}
			B = new int[base - 1];
			solve(AA, B, base - 1);
			return;
		}

		int cnt = 0;
		for (int i = 0; i < base; i++) {
			if (B[i] == 0) {
				ans -= A[i];
				cnt++;
			} else if (B[i] == 1) {
				ans += cnt * A[i];
				break;
			}
		}

		AA = new int[base - 1 - temp];
		B = new int[base - 1 - temp];
		int x = 0;
		if (base - 1 - temp != 0)
			for (int i = temp + 1; i < base; i++) {
				AA[x] = A[i];
				x++;
			}
		solve(AA, B, base - 1 - temp);
	}

}
