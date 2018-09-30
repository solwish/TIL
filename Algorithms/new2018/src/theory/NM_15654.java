package theory;

import java.util.Arrays;
import java.util.Scanner;
import java.util.Vector;

public class NM_15654 {
	static int N, M, table[];
	static Vector<Integer> V = new Vector<>();
	static boolean visit[];
	static StringBuffer sb = new StringBuffer();

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		N = sc.nextInt();
		M = sc.nextInt();
		visit = new boolean[N + 1];
		table = new int[N + 1];
		for (int i = 1; i <= N; i++)
			table[i] = sc.nextInt();
		Arrays.sort(table);
		dfs();
		System.out.println(sb);
	}

	private static void dfs() {
		if (V.size() == M) {
			for (int v : V)
				sb.append(v + " ");
			sb.append("\n");
			return;
		}
		for (int i = 1; i <= N; i++) {
			if (!visit[i]) {
				visit[i] = true;
				V.add(table[i]);
				dfs();
				V.remove(V.size() - 1);
				visit[i] = false;
			}
		}
	}

}