package basicD1D2;

import java.io.BufferedReader;
import java.io.InputStreamReader;

public class CheckPattern {

	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		int T = Integer.parseInt(br.readLine());
		int ans;

		for (int t_case = 1; t_case <= T; t_case++) {
			String s = br.readLine();
			ans = 1;
			String a, b;
			while (true) {
				a = s.substring(0, ans);
				b = s.substring(ans, ans + ans);

				if (a.equals(b))
					break;
				else
					ans++;
			}

			System.out.println("#" + t_case + " " + ans);
		}
	}

}
