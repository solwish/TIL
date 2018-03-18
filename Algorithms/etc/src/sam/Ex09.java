package sam;

import java.util.Scanner;

public class Ex09 {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int T = sc.nextInt();
		int ans;

		for (int t_case = 1; t_case <= T; t_case++) {
			ans = 0;
			int N = sc.nextInt();
			int[] A = new int[N];

			for (int i = 0; i < A.length; i++) {
				A[i] = sc.nextInt();
				for (int j = 0; j < i; j++)
					if (A[i] >= A[j])
						ans++;
			}
			System.out.println(ans);
		}
	}

}
