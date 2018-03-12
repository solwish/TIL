package sam;

import java.util.Scanner;

public class Ex07 {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int T = sc.nextInt();

		for (int t_case = 1; t_case <= T; t_case++) {
			int x1 = sc.nextInt();
			int y1 = sc.nextInt();
			int x2 = sc.nextInt();
			int y2 = sc.nextInt();
			int x3 = sc.nextInt();
			int y3 = sc.nextInt();
			int ans = 0;

			double a = Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
			double b = Math.sqrt((x1 - x3) * (x1 - x3) + (y1 - y3) * (y1 - y3));
			double c = Math.sqrt((x3 - x2) * (x3 - x2) + (y3 - y2) * (y3 - y2));

			double tmp;
			if (c < a) {
				tmp = c;
				c = a;
				a = tmp;
			}
			if (c < b) {
				tmp = c;
				c = b;
				b = tmp;
			}

			tmp = a * a + b * b;
			if (c * c == tmp)
				ans = 1;
			else if (c * c > tmp)
				ans = 2;
			else
				ans = 3;

			if (((x1 == x2) && (y1 == y2)) || ((x3 == x2) && (y3 == y2)) || ((x1 == x3) && (y1 == y3)))
				ans = 0;
			else {
				double scope1;
				double scope2;
				if ((x1 - x2) != 0)
					scope1 = (double) (y1 - y2) / (x1 - x2);
				else
					scope1 = Double.MAX_VALUE;

				if ((x1 - x3) != 0)
					scope2 = (double) (y1 - y3) / (x1 - x3);
				else
					scope2 = Double.MAX_VALUE;

				if (scope1 == scope2)
					ans = 0;
			}
			System.out.println("#" + t_case + " " + ans);
		}
	}
}
