package swExpert;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

//방에서의 위치를 나타내는 클래스
class ZSM {
	int x, y;

	public ZSM(int x, int y) {
		this.x = x;
		this.y = y;
	}
}

public class LunchTime {
	static int MAXN = 11;
	static int MAXT = 11 * 2 + 11 * 11;
	//N: 방의 한 변의 길이, M: 사람의 수, S(=2) : 계단의 수
	//map : 방의 지도
	//match[x] = y : x번째 사람이 y번째 계달을 타도록 결정된 상태
	static int answer = Integer.MAX_VALUE;
	static int[] match;
	static int M = 0;
	static int S = 0;
	static ZSM man[], stair[];
	static int[][] map;

	static int abs(int x) {
		if (x >= 0)
			return x;
		return -x;
	}

	static int max(int x, int y) {
		if (x >= y)
			return x;
		return y;
	}

	static int min(int x, int y) {
		if (x >= y)
			return y;
		return x;
	}
	
	//man_index인 사람과 stair_index인 계단 사이의 거리
	static int dist(int man_index, int stair_index) {
		int dx = abs(man[man_index].x - stair[stair_index].x);
		int dy = abs(man[man_index].y - stair[stair_index].y);
		return dx + dy;
	}
	
	//각 사람이 어느 계단을 이용할 지 모두 정해졌을 때에 필요한 시간을 계산하는 함수
	static void update() {
		//모든 사람들이 계단을 내려가는데 필요한 최소 시간
		int total_min_time = 0;
		
		//두 계단은 서로 독립적이므로 각각에 대해서 계산한다.
		for (int stair_index = 0; stair_index < 2; stair_index++) {
			ZSM now_stair = stair[stair_index];
			int arrival_time[] = new int[MAXN * 2];
			//arrival_time[t] : 시간 t일 때 계단에 도착하는 사람의 수
			int current_stair[] = new int[MAXT];
			//current_stair[t] : 시간 t일 때 계단을 내려가고 있는 사람의 수
			for (int i = 0; i < MAXT; i++)
				current_stair[i] = 0;
			for (int i = 0; i < MAXN; i++)
				arrival_time[i] = 0;
			for (int man_index = 0; man_index < M; man_index++) {
				if (match[man_index] == stair_index)
					arrival_time[dist(man_index, stair_index) + 1]++;
			}
			
			//stair_index 번째 계단을 내려가는 사람이 모두 작업을 마치기 위해 필요한 최소 시간
			int now_min_time = 0;
			
			//계단에 도착하는 시간 오름차순으로 각 사람이 계단을 내려가도록 시뮬레이션
			for (int time = 1; time <= 20; time++) {
				
				//time에 도착한 사람이 있다면
				while (arrival_time[time] > 0) {
					arrival_time[time]--;
					//해당 계단을 내려가는데 필요한 시간
					int remain_time = map[now_stair.x][now_stair.y];
					
					//도착한 시점부터 사람 3명이 동시에 내려가고 있지 않을 때에 1칸씩 밑으로 내려보낸다
					for (int walk_time = time; walk_time < MAXT; walk_time++) {
						if (current_stair[walk_time] < 3) {
							current_stair[walk_time]++;
							remain_time--;

							//계단을 다 내려갔으면 now_min_time 갱신
							if (remain_time == 0) {
								now_min_time = max(now_min_time, walk_time + 1);
								break;
							}
						}
					}
				}
			}
			//"전체 계단을 내려가는데 필요한 최소 시간"은 (두 계단을 내려가는데 필요한 최소 시간) 중 최댓값
			total_min_time = max(total_min_time, now_min_time);
		}
		//현재 match 상태일 때의 total_min_time을 정답으로 갱신
		answer = min(answer, total_min_time);
	}

	static void dfs(int man_index) {
		//모든 사람에 대해 각 사람이 사용할 계단을 다 정했다면
		if (man_index == M) {
			//해당 상태에서 필요한 시간을 계산하고 정답 갱신
			update();
			return;
		}
		//man_index 번째 사람이 stair_index번째 계단을 선택하고, 재귀 호출
		for (int stair_index = 0; stair_index < 2; stair_index++) {
			match[man_index] = stair_index;
			dfs(man_index + 1);
		}
	}

	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		int T = Integer.parseInt(br.readLine());
		int N;

		for (int t_case = 1; t_case <= T; t_case++) {
			N = Integer.parseInt(br.readLine());
			map = new int[N + 2][N + 2];
			StringTokenizer s;
			M = S = 0;
			man = new ZSM[N * N];
			stair = new ZSM[2];

			for (int i = 1; i <= N; i++) {
				s = new StringTokenizer(br.readLine());
				for (int j = 1; j <= N; j++) {
					map[i][j] = Integer.parseInt(s.nextToken());
					if (map[i][j] == 1) {
						//사람 위치 저장 1번째 사람, 2번째 사람...
						man[M++] = new ZSM(i, j);
					} else if (map[i][j] >= 2) {
						//계단 위치 좌표 저장
						stair[S++] = new ZSM(i, j);
					}
				}
			}
			//답 초기화
			answer = Integer.MAX_VALUE;
			match = new int[M];

			dfs(0);
			System.out.println("#" + t_case + " " + answer);
		}
	}

}
