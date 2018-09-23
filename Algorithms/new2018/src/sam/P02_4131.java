package sam;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class P02_4131 {
	static int N, X, map[][], hill1[], hill2[], answer;
	static boolean visit1[], visit2[];

	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		int T = Integer.parseInt(br.readLine());

		for (int t_case = 1; t_case <= T; t_case++) {
			answer = 0;
			StringTokenizer st = new StringTokenizer(br.readLine());
			N = Integer.parseInt(st.nextToken());
			X = Integer.parseInt(st.nextToken());
			map = new int[N][N];
			hill1 = new int[N];
			hill2 = new int[N];
			visit1 = new boolean[N];
			visit2 = new boolean[N];

			for (int i = 0; i < N; i++) {
				st = new StringTokenizer(br.readLine());
				for (int j = 0; j < N; j++)
					map[i][j] = Integer.parseInt(st.nextToken());
			}

			for (int i = 0; i < N; i++) {
				for (int j = 0; j < N; j++) {
					hill1[j] = map[i][j];
					hill2[j] = map[j][i];
				}
				checkSlope(hill1);
				checkSlope(hill2);
			}
			System.out.println("#" + t_case + " " + answer);
		}
	}

	private static void checkSlope(int[] hill) {
		// 초기화
		for (int i = 0; i < N; i++) {
			visit1[i] = false;
			visit2[i] = false;
		}

		// case 1. 높이 차이 2 나는 경우
		for (int i = 0; i < N - 1; i++)
			if (Math.abs(hill[i] - hill[i + 1]) > 1)
				return;

		// case 2. 공간 확보 못하는 경우
		for (int i = X; i < N; i++) {
			if (hill[i] - hill[i - 1] == 1) {
				for (int j = 1; j < X; j++) {
					if (hill[i - j - 1] != hill[i - j])
						return;
					else
						visit1[i - j - 1] = true;
				}
				visit1[i - 1] = true;
			}
		}
		// 사이드 공간확보 못하는경우 추가
		for (int i = 0; i < X - 1; i++)
			if (hill[i] < hill[i + 1])
				return;

		// 오른쪽부터 스캔
		for (int i = N - X - 1; i >= 0; i--) {
			if (hill[i] - hill[i + 1] == 1) {
				for (int j = 1; j < X; j++) {
					if (hill[i + j + 1] != hill[i + j])
						return;
					else
						visit2[i + j + 1] = true;
				}
				visit2[i + 1] = true;
			}
		}
		for (int i = N - 1; i > N - X; i--)
			if (hill[i] < hill[i - 1])
				return;

		// case 3. 겹치는 경우
		for (int i = 0; i < N; i++)
			if (visit1[i] && visit2[i])
				return;

		answer++;
	}

}
