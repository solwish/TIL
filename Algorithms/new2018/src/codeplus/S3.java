package codeplus;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.LinkedList;
import java.util.Queue;
import java.util.StringTokenizer;

public class S3 {
	static int h, w, A[][], ans, x[] = { 2, 2, -2, -2, -1, 1, 1, -1 }, y[] = { -1, 1, 1, -1, 2, 2, -2, -2 };
	static Queue<Integer> Q = new LinkedList<>();
	static boolean visit[][];

	static boolean boundary(int x, int y) {
		if (x < 0 || y < 0 || x >= h || y >= w)
			return false;
		return true;
	}

	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		String input = br.readLine();
		StringTokenizer st = new StringTokenizer(input);
		h = Integer.parseInt(st.nextToken());
		w = Integer.parseInt(st.nextToken());
		A = new int[h][w];
		visit = new boolean[h][w];
		Q.offer(0);
		Q.offer(0);
		Q.offer(0);
		visit[0][0] = true;

		while (!Q.isEmpty()) {
			int ux = Q.poll();
			int uy = Q.poll();
			int cnt = Q.poll() + 1;
			for (int k = 0; k < 8; k++) {
				int dx = ux + x[k];
				int dy = uy + y[k];
				if (boundary(dx, dy) && !visit[dx][dy]) {
					visit[dx][dy] = true;
					A[dx][dy] = cnt;
					Q.offer(dx);
					Q.offer(dy);
					Q.offer(cnt);
				}
			}
		}
		String s = "T";
		boolean flag = false;
		for (int i = 0; i < h; i++) {
			if (flag)
				break;
			for (int j = 0; j < w; j++)
				if (visit[i][j] == false) {
					s = "F";
					flag = true;
					break;
				}
		}
		int max = 0;
		for (int i = 0; i < h; i++)
			for (int j = 0; j < w; j++)
				if (max < A[i][j])
					max = A[i][j];

		System.out.println(s + max);
	}

}
