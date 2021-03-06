package imgonnasolve;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.LinkedList;
import java.util.Queue;
import java.util.StringTokenizer;

public class JejuTripPlan {
//모르겠다 나중에 다시 풀어보기
	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		int T = Integer.parseInt(br.readLine());

		for (int test_case = 1; test_case <= T; test_case++) {
			StringTokenizer s;
			s = new StringTokenizer(br.readLine());
			int N = Integer.parseInt(s.nextToken());
			int M = Integer.parseInt(s.nextToken());
			int[][] d = new int[N][N];
			PointInfo[] pointInfo = new PointInfo[N];

			for (int i = 0; i < N - 1; i++) {
				s = new StringTokenizer(br.readLine());
				for (int j = i + 1; j < N; j++) {
					d[i][j] = Integer.parseInt(s.nextToken());
					d[j][i] = d[i][j];
				}
			}

			for (int i = 0; i < N; i++) {
				s = new StringTokenizer(br.readLine());
				char check = s.nextToken().charAt(0);
				if (check == 'P')
					pointInfo[i] = new PointInfo(check, Integer.parseInt(s.nextToken()),
							Integer.parseInt(s.nextToken()));
				else
					pointInfo[i] = new PointInfo(check, -1, -1);
			}

			Queue<PointInfo> Q = new LinkedList<PointInfo>();
			Q.offer(pointInfo[0]);
			int maxTime = 9 * 60;
			int[] pie = new int[N];

			for (int day = 1; day <= M; day++) {
				PointInfo p = Q.poll();

			}

		}
	}

	public static class PointInfo {
		char pointType;
		int sTime;
		int satis;

		public PointInfo(char pointType, int sTime, int satis) {
			this.pointType = pointType;
			this.sTime = sTime;
			this.satis = satis;
		}
	}
}
