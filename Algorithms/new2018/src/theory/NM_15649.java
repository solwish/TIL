package theory;

import java.util.Scanner;
import java.util.Vector;

public class NM_15649 {
	static int N, M;
	static Vector<Integer> V = new Vector<>();
	static boolean visit[];

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		N = sc.nextInt();
		M = sc.nextInt();
		visit = new boolean[N + 1];
		dfs(0);
	}

	private static void dfs(int cnt) {
		if (cnt == M) {
			for (int v : V)
				System.out.print(v + " ");
			System.out.println();
			return;
		}
		for (int i = 1; i <= N; i++) {
			if (!visit[i]) {
				visit[i] = true;
				V.add(i);
				dfs(cnt + 1);
				V.remove(V.size() - 1);
				visit[i] = false;
			}
		}
	}

}
