package sam;

import java.util.Scanner;

public class Ex10 {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int T = sc.nextInt();

		for (int t_case = 1; t_case <= T; t_case++) {
			int ans = 0;
			int n = sc.nextInt();
			int[] A = new int[100];
			int tmp = 0;
			int flag = 0;

			while (n != 0) {
				A[tmp] = n % 2;
				n /= 2;
				tmp++;
				flag = tmp;
			}
			
			for (int i = 0; i < 100; i++)
				if (A[i] == 0)
					A[i] = 1;
				else
					A[i] = 0;

			for (int i = 0; i < flag; i++)
				ans += Math.pow(2, flag - 1 - i) * A[i];

			System.out.println("#" + t_case + " " + ans);
		}
	}

}
