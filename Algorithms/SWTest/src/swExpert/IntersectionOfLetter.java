package swExpert;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.HashMap;
import java.util.Map;
import java.util.StringTokenizer;

public class IntersectionOfLetter {

	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		int T = Integer.parseInt(br.readLine());

		for (int t_case = 1; t_case <= T; t_case++) {
			StringTokenizer s = new StringTokenizer(br.readLine());
			int N = Integer.parseInt(s.nextToken());
			int M = Integer.parseInt(s.nextToken());
			s = new StringTokenizer(br.readLine());
			Map<String, Boolean> map = new HashMap<String, Boolean>();
			int ans = 0;

			for (int i = 0; i < N; i++)
				map.put(s.nextToken(), true);

			s = new StringTokenizer(br.readLine());
			for (int i = 0; i < M; i++)
				if (map.containsKey(s.nextToken()))
					ans++;

			System.out.println("#" + t_case + " " + ans);
		}
	}

}
