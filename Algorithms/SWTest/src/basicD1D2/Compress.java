package basicD1D2;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Compress {

	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		int T = Integer.parseInt(br.readLine());
		StringTokenizer s;

		for (int t_case = 1; t_case <= T; t_case++) {
			int n = Integer.parseInt(br.readLine());
			int cnt = 0;
			char[] c = new char[20];
			int[] k = new int[20];
			for (int i = 0; i < n; i++) {
				s = new StringTokenizer(br.readLine());
				c[i] = s.nextToken().charAt(0);
				k[i] = Integer.parseInt(s.nextToken());
			}
			if (t_case == 1)
				System.out.println();
			System.out.println("#" + " " + t_case + " ");
			for (int i = 0; i < n; i++) {
				for (int j = 0; j < k[i]; j++)
					if (cnt < 10) {
						System.out.print(c[i]);
						cnt++;
					} else {
						System.out.println();
						cnt = 0;
						j--;
					}
			}
			System.out.println();
		}
	}

}
