package theory;

import java.util.Scanner;
import java.util.Vector;

public class NM_15652 {
	static int N, M;
	static Vector<Integer> V = new Vector<>();
	// static boolean visit[];
	static StringBuffer sb = new StringBuffer();

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		N = sc.nextInt();
		M = sc.nextInt();
		// visit = new boolean[N + 1];
		dfs(1);
		System.out.println(sb);
	}

	private static void dfs(int start) {
		if (V.size() == M) {
			for (int v : V)
				sb.append(v + " ");
			sb.append("\n");
			return;
		}
		for (int i = start; i <= N; i++) {
			// if (!visit[i]) {
			// visit[i] = true;
			V.add(i);
			dfs(i);
			V.remove(V.size() - 1);
			// visit[i] = false;
			// }
		}
	}

}
