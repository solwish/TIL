package sam;

import java.util.Arrays;
import java.util.HashSet;
import java.util.Scanner;
import java.util.Vector;

public class P04_5658 {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int T = sc.nextInt();
		for (int t_case = 1; t_case <= T; t_case++) {
			int N, K;
			N = sc.nextInt();
			K = sc.nextInt();
			sc.nextLine();
			String S = sc.nextLine();
			Vector<String> V = new Vector<>();
			for (int i = 0; i < N; i++)
				V.add(String.valueOf(S.charAt(i)));

			HashSet<String> set = new HashSet<>();
			String ss = "";
			for (int rotate = 0; rotate < N / 4; rotate++) {
				for (int i = 0; i < N; i++) {
					ss += V.get(i);
					if ((i + 1) % (N / 4) == 0) {
						set.add(ss);
						ss = "";
					}
				}
				V.add(0, V.get(V.size() - 1));
				V.remove(V.size() - 1);
			}
			long[] A = new long[set.size()];
			int tmp = 0;
			for (String sss : set) {
				for (int i = 0; i < N / 4; i++) {
					int num = (int) sss.charAt(i);
					num = (num >= (int) 'A' ? num - 55 : num - (int) '0');
					A[tmp] += num * (long) Math.pow(16, sss.length() - 1 - i);
				}
				tmp++;
			}
			Arrays.sort(A);

			System.out.println("#" + t_case + " " + A[A.length - K]);
		}
	}

}
