package swExpert;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class SumOfSquare {

	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		int T = Integer.parseInt(br.readLine());

		for (int t_case = 1; t_case <= T; t_case++) {
			int n = Integer.parseInt(br.readLine());
			StringTokenizer s = new StringTokenizer(br.readLine());
			int[][] A = new int[n][2];

			for (int i = 0; i < n; i++) {
				String ss = s.nextToken();
				String sss = "";
				for (int j = 0; j < ss.length() - 1; j++) {
					sss += ss.charAt(j);
				}
				A[i][0] = Integer.parseInt(sss);
				A[i][1] = ss.charAt(ss.length() - 1) - 48;
			}
			long sum = 0;
			for (int i = 0; i < n; i++)
				sum += Math.pow(A[i][0], A[i][1]);

			System.out.println("#" + t_case + " " + sum);
		}
	}

}
