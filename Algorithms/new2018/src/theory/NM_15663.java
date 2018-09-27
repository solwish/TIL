package theory;

import java.util.Arrays;
import java.util.HashSet;
import java.util.Scanner;
import java.util.Vector;

public class NM_15663 {
	static Vector<Integer> V = new Vector<>();
	static int table[], N, M;
	static StringBuffer sb = new StringBuffer();
	static boolean visit[];
	static HashSet<String> set = new HashSet<>();

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
			String s = "";
			for (int v : V)
				s += String.valueOf(v + " ");
			if (!set.contains(s)) {
				sb.append(s);
				sb.append("\n");
				set.add(s);
			}
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