package N0929;

import java.util.Scanner;
import java.util.StringTokenizer;
import java.util.Vector;

public class H2 {
	static Vector<String> V = new Vector<>();
	static int N, W, map[][];

	public static void main(String[] args) throws Exception {
		Scanner sc = new Scanner(System.in);
		N = sc.nextInt();
		W = sc.nextInt();
		map = new int[N][N];
		int tmp = 0;
		StringTokenizer st;
		sc.nextLine();
		for (int i = 0; i < N; i++) {
			st = new StringTokenizer(sc.nextLine());
			while (st.hasMoreTokens()) {
				V.add(st.nextToken());
			}
		}
		for (int i = 0; i < N; i++)
			for (int j = 0; j < N; j++)
				map[i][j] = tmp++;

		for (int i = 0; i < Math.abs(W); i++)
			turn();

	}

	private static void turn() {
	}

}
