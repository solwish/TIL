package N0929;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.LinkedList;
import java.util.Queue;
import java.util.StringTokenizer;
import java.util.Vector;

public class H4 {
	static int map[][], N, dx[] = { 0, 0, 1, -1 }, dy[] = { -1, 1, 0, 0 };
	static Vector<boolean[]> V = new Vector<>();

	static boolean boundary(int x, int y) {
		if (x < 0 || y < 0 || x >= N || y >= N)
			return false;
		return true;
	}

	public static void main(String[] args) throws Exception {
		boolean[] tmp0 = { true, true, true, true };
		V.add(0, tmp0);
		boolean[] tmp1 = { false, true, true, true };
		V.add(1, tmp1);
		boolean[] tmp2 = { true, false, true, true };
		V.add(2, tmp2);
		boolean[] tmp3 = { false, false, true, true };
		V.add(3, tmp3);
		boolean[] tmp4 = { true, true, false, true };
		V.add(4, tmp4);
		boolean[] tmp5 = { false, true, false, true };
		V.add(5, tmp5);
		boolean[] tmp6 = { true, false, true, false };
		V.add(6, tmp6);
		boolean[] tmp7 = { false, false, false, true };
		V.add(7, tmp7);
		boolean[] tmp8 = { true, true, true, false };
		V.add(8, tmp8);
		boolean[] tmp9 = { false, true, true, false };
		V.add(9, tmp9);
		boolean[] tmp10 = { true, false, true, false };
		V.add(10, tmp10);
		boolean[] tmp11 = { false, false, true, false };
		V.add(11, tmp11);
		boolean[] tmp12 = { true, true, false, false };
		V.add(12, tmp12);
		boolean[] tmp13 = { false, true, false, false };
		V.add(13, tmp13);
		boolean[] tmp14 = { true, false, false, false };
		V.add(14, tmp14);
		boolean[] tmp15 = { false, false, false, false };
		V.add(15, tmp15);

		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		N = Integer.parseInt(br.readLine());
		boolean visit[][] = new boolean[N][N];
		map = new int[N][N];
		Queue<Integer> Q = new LinkedList<>();
		for (int i = 0; i < N; i++) {
			StringTokenizer st = new StringTokenizer(br.readLine());
			for (int j = 0; j < N; j++) {
				map[i][j] = st.nextToken().charAt(0) - '0';
				if (map[i][j] > 15) {
					Q.offer(i);
					Q.offer(j);
					visit[i][j] = true;
				}
			}
		}

		while (true) {
			int[][] nmap = new int[N][N];
			for (int i = 0; i < N; i++)
				for (int j = 0; j < N; j++)
					nmap[i][j] = map[i][j];

			for (int i = 0; i < N; i++)
				for (int j = 0; j < N; j++)
					if (map[i][j] >= 0 && map[i][j] <= 15) {
						int nearcounry = 0;
						int counry = 0;
						for (int k = 0; k < 4; k++) {
							int nx = i + dx[k];
							int ny = j + dy[k];
							if (boundary(nx, ny) && map[nx][ny] > 15) {
								nearcounry++;
								counry = map[nx][ny];
							}
						}
						if (nearcounry == 1) {
							map[i][j] = counry;
						}
					}

			boolean flag = true;
			for (int i = 0; i < N; i++)
				for (int j = 0; j < N; j++)
					if (nmap[i][j] != map[i][j])
						flag = false;
			if (flag)
				break;

		}

		for (int i = 0; i < N; i++) {
			for (int j = 0; j < N; j++)
				System.out.print((char) (map[i][j] + '0') + " ");
			System.out.println();
		}
	}

}
