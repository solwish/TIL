package practice;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Day7HWairstrip {
	static final int max = 20;
	static int N, X;
	static int map[][] = new int[max][max];
	static int height[] = new int[max];
	static int ans;

	static boolean isFlatBetween(int s, int e) {
		if (s < 0 || N <= e)
			return false;
		for (int i = s; i < e; i++)
			if (height[i] != height[i + 1])
				return false;
		return true;
	}

	static boolean canRunway() {

		// case1 두 지역의 높이 차이가 2 이상 나는 경우
		for (int i = 0; i < N - 1; i++)
			if (Math.abs(height[i] - height[i + 1]) >= 2)
				return false;

		boolean upSlope[] = new boolean[N];
		boolean downSlope[] = new boolean[N];

		// case2 높이 차이가 1인데 경사로를 설치할 수 없는 경우
		for (int i = 0; i < N - 1; i++) {
			if (height[i] + 1 == height[i + 1]) {
				int s = i - X + 1;
				int e = i;
				if (isFlatBetween(s, e)) {
					for (int j = s; j <= e; j++)
						upSlope[j] = true;
				} else
					return false;
			} else if (height[i] - 1 == height[i + 1]) {
				int s = i + 1;
				int e = i + X;

				if (isFlatBetween(s, e)) {
					for (int j = s; j <= e; j++)
						downSlope[j] = true;
				} else
					return false;
			}
		}

		// case3 경사로가 겹치는 경우
		for (int i = 0; i < N; i++)
			if (upSlope[i] && downSlope[i])
				return false;

		return true;
	}

	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		int T = Integer.parseInt(br.readLine());

		for (int t_case = 1; t_case <= T; t_case++) {
			ans = 0;
			StringTokenizer st = new StringTokenizer(br.readLine());
			N = Integer.parseInt(st.nextToken());
			X = Integer.parseInt(st.nextToken());
			for (int i = 0; i < N; i++) {
				st = new StringTokenizer(br.readLine());
				for (int j = 0; j < N; j++)
					map[i][j] = Integer.parseInt(st.nextToken());
			}

			int rowCnt = 0, colCnt = 0;
			for (int i = 0; i < N; i++) {
				for (int j = 0; j < N; j++)
					height[j] = map[i][j];
				if (canRunway())
					rowCnt++;
			}
			for (int i = 0; i < N; i++) {
				for (int j = 0; j < N; j++)
					height[j] = map[j][i];
				if (canRunway())
					colCnt++;
			}
			ans = rowCnt + colCnt;
			System.out.println("#" + t_case + " " + ans);
		}
	}

}
