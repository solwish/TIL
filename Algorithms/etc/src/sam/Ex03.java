package sam;

import java.util.Scanner;

public class Ex03 {
	static int N;

	static boolean validation(int x, int y) {
		if (0 <= x && x < N && 0 <= y & y < N)
			return true;
		else
			return false;
	}

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int T = sc.nextInt();
		int ans;
		for (int t_case = 1; t_case <= T; t_case++) {
			ans = 0;
			N = sc.nextInt();
			boolean[][] map = new boolean[N][N];
			sc.nextLine();
			String s = sc.nextLine();
			String[] cut = new String[3];

			int sIndex = 0;
			for (int i = 0; i < 3; i++) {
				int fIndex = s.indexOf(',', sIndex);
				if (fIndex == -1)
					fIndex = s.length();
				cut[i] = s.substring(sIndex, fIndex);
				sIndex = fIndex + 1;
			}
			int x, y;
			for (int i = 0; i < 3; i++) {
				for (int j = 0; j < cut[i].length(); j = j + 4) {
					x = Integer.parseInt(String.valueOf(cut[i].charAt(j)));
					y = Integer.parseInt(String.valueOf(cut[i].charAt(j + 2)));
					map[x][y] = true;
					for (int k = 1; k <= i + 1; k++) {
						if (validation(x - k, y))
							map[x - k][y] = true;
						if (validation(x + k, y))
							map[x + k][y] = true;
						if (validation(x, y - k))
							map[x][y - k] = true;
						if (validation(x, y + k))
							map[x][y + k] = true;
						if (validation(x + k, y + k))
							map[x + k][y + k] = true;
						if (validation(x + k, y - k))
							map[x + k][y - k] = true;
						if (validation(x - k, y - k))
							map[x - k][y - k] = true;
						if (validation(x - k, y + k))
							map[x - k][y + k] = true;
					}
				}
			}

			for (int i = 0; i < N; i++)
				for (int j = 0; j < N; j++)
					if (map[i][j] == false)
						ans++;

			System.out.println("#" + t_case + " " + ans);
		}
	}

}
