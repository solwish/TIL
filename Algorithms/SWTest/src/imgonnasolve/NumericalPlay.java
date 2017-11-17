package imgonnasolve;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class NumericalPlay {

	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		int T = Integer.parseInt(br.readLine());
		StringTokenizer s;

		for (int t_case = 1; t_case <= T; t_case++) {
			s = new StringTokenizer(br.readLine());
			double a = Integer.parseInt(s.nextToken());
			double b = Integer.parseInt(s.nextToken());
			boolean hasAns = false;
			double x = 0, y = 0, tempx;
//			if (a > b) {
//				tempx = a;
//				a = b;
//				b = tempx;
//			}

			for (x = 1; x <= b; x++) {
				y = (1 - a * x) / b;
				if (y % 1 == 0) {
					hasAns = true;
					break;
				}
				tempx = (1 - b * y) / x;
				if (y % 1 == 0) {
					hasAns = true;
					x = tempx;
					break;
				}
			}

			if (hasAns)
				System.out.println("#" + t_case + " " + (int) x + " " + (int) y);
			else
				System.out.println("#" + t_case + " " + -1);
		}
	}

}
