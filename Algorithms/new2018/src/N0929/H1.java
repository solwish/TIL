package N0929;

import java.util.Scanner;
import java.util.Vector;

public class H1 {
	static int C, P;
	static Vector<Integer> V = new Vector<>();
	static Vector<Integer> N = new Vector<>();

	public static void main(String[] args) throws Exception {
		Scanner sc = new Scanner(System.in);
		C = sc.nextInt();
		P = sc.nextInt();
		for (int i = 0; i < P; i++)
			N.add(sc.nextInt());

		for (int i = 1; i <= C; i++)
			V.add(i);

		for (int i = 0; i < P; i++)
			dfs(C, N.get(i));
		for (int i = 0; i < 5; i++)
			System.out.println(V.get(i));
	}

	private static void dfs(int cnt, int n) {
		if (cnt <= 2 * n)
			return;

		int ncnt = 0;
		int get = cnt - n - 1;
		for (int i = cnt - n - 1; i >= n; i--) {
			int tmp = V.get(get);
			V.remove(get);
			V.add(0, tmp);
			ncnt++;
		}
		dfs(ncnt, n);
	}
}
