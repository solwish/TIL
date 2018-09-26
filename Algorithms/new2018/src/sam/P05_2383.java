package sam;

import java.util.Scanner;

class PT {
	int i, j;

	public PT(int i, int j) {
		this.i = i;
		this.j = j;
	}

}

public class P05_2383 {
	static int MAXN = 11;
	static int MAXT = MAXN * 2 + MAXN * MAXN;
	// N: 방의 한 변의 길이, M: 사람의 수, S(=2) : 계단의 수
	// match[x] = y: x번째 사람이 y번째 계단을 타도록 결정된 상태
	static int N;
	static int map[][], match[];
	static int M, S;

	static int answer;
	static PT man[], stair[];

	// 계단 사이의 거리
	static int dist(int man_index, int stair_index) {
		return Math.abs(man[man_index].i - stair[stair_index].i) + Math.abs(man[man_index].j - stair[stair_index].j);
	}

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int T = sc.nextInt();

		for (int t_case = 1; t_case <= T; t_case++) {
			int N = sc.nextInt();
			M = S = 0;
			map = new int[N + 2][N + 2];
			man = new PT[N * N];
			stair = new PT[2];
			for (int i = 1; i <= N; i++)
				for (int j = 1; j <= N; j++) {
					map[i][j] = sc.nextInt();
					if (map[i][j] == 1)
						man[M++] = new PT(i, j);
					if (map[i][j] >= 2)
						stair[S++] = new PT(i, j);
				}

			answer = Integer.MAX_VALUE;
			match = new int[M];
			dfs(0);
			System.out.println("#" + t_case + " " + answer);
		}
	}

	private static void dfs(int man_index) {
		if (man_index == M) {
			// 도착시간계산
			update();
			return;
		}
		for (int stair_index = 0; stair_index < 2; stair_index++) {
			match[man_index] = stair_index;
			dfs(man_index + 1);
		}
	}

	private static void update() {
		int total_min_time = 0;

		for (int stair_index = 0; stair_index < 2; stair_index++) {
			PT now_stair = stair[stair_index];
			int arrival_time[] = new int[MAXN * 2];
			// arrival_time[t]: 시간 t 일 때 계단에 도착하는 사람의 수
			int current_stair[] = new int[MAXT];
			// current_stair[t : 시간 t 일 때 계단을 내려가고 있는 사람의 수
			for (int i = 0; i < MAXT; i++)
				current_stair[i] = 0;
			for (int i = 0; i < 2 * MAXN; i++)
				arrival_time[i] = 0;

			for (int man_index = 0; man_index < M; man_index++)
				if (match[man_index] == stair_index)
					arrival_time[dist(man_index, stair_index) + 1]++;

			// stair_index 번째 계단을 내려가는 사람이 모두 작업을 마치기 위해 필요한 최소 시간
			int now_min_time = 0;

			// 계단에 도착하는 시간 오름차순으로 각 사람이 계단을 내려가도록 시뮬레이션
			for (int time = 1; time <= 20; time++) {

				// time에 도착한 사람이 있다면
				while (arrival_time[time] > 0) {
					arrival_time[time]--;
					// 해당 계단을 내려가는데 필요한 시간
					int remain_time = map[now_stair.i][now_stair.j];

					// 도착한 시점에서 사람 3명이 동시에 내려가고 있지 않을 때에 1칸씩 밑으로 내려 보낸다
					for (int walk_time = time; walk_time < MAXT; walk_time++) {
						if (current_stair[walk_time] < 3) {
							current_stair[walk_time]++;
							remain_time--;

							// 계단을 다 내려갔으면 now_min_time 갱신
							if (remain_time == 0) {
								now_min_time = Math.max(now_min_time, walk_time + 1);
								break;
							}
						}
					}
				}
			}
			// "전체 계단을 내려가는데 필요한 최소 시간"은 (두 계단을 내려가는데 필요한 최소 시간) 중 최댓값
			total_min_time = Math.max(total_min_time, now_min_time);
		}
		// 현재 match 상태일 때의 total_min_time을 정답으로 갱신
		answer = Math.min(answer, total_min_time);
	}

	// private static void getStr() {
	// for (int i = 0; i < Vp.size(); i++) {
	// getStair[i] = Math.abs(Vp.get(i).i - Vs.get(choose[i] - 1).i) +
	// Math.abs(Vp.get(i).j - Vs.get(choose[i] - 1).j);
	// }
	// int time = 0;
	// // boolean[] isStart = new boolean[Vp.size()];
	// for (int stair_index = 0; stair_index < 2; stair_index++) {
	// time = 0;
	// for (int i = 0; i < Vp.size(); i++)
	// if (choose[i] == 1)
	// cntdown[i] = ts1;
	// else if (choose[i] == 2)
	// cntdown[i] = ts2;
	// for (int i = 0; i < Vp.size(); i++)
	// finStair[i] = 0;
	// for (int man_index = 0; man_index < Vp.size(); man_index++) {
	// if (choose[man_index] == stair_index)
	// finStair[man_index]++;
	// }
	// int now_time = 0;
	//
	// while (true) {
	//
	// break;
	// }
	//
	// for (int i = 0; i < Vp.size(); i++)
	// if (onStair[i] != 0 && onStair[i] != 3) {
	// cntdown[i]--;
	// }
	//
	// for (int i = 0; i < Vp.size(); i++)
	// if (onStair[i] != 0 && onStair[i] != 3 && cntdown[i] == 0) {
	// onStair[i] = 3;
	// finStair[i] = getStair[i] + time;
	// if (choose[i] == 1)
	// cnt1--;
	// else if (choose[i] == 2)
	// cnt2--;
	// }
	//
	// int tmp[] = new int[Vp.size()];
	// for (int i = 0; i < Vp.size(); i++)
	// tmp[i] = getStair[i];
	//
	// // int max = 0;
	// // for (int i = 0; i < Vp.size(); i++) {
	// // max = (max < tmp[i] ? tmp[i] : max);
	// // }
	// for (int k = 0; k < 3; k++) {
	// Arrays.sort(tmp);
	// for (int i = 0; i < Vp.size(); i++) {
	// if (onStair[i] == 0 && getStair[i] == tmp[0]) {
	// if (choose[i] == 1 && cnt1 < 3) {
	// onStair[i] = choose[i];
	// cntdown[i] = ts1;
	// tmp[i] = 100;
	// cnt1++;
	// // isStart[i] = true;
	// } else if (choose[i] == 2 && cnt2 < 3) {
	// onStair[i] = choose[i];
	// cntdown[i] = ts2;
	// getStair[i] = 100;
	// cnt2++;
	// // isStart[i] = true;
	// }
	// }
	// }
	// }
	//
	// // for (int i = 0; i < Vp.size(); i++)
	// // if (isStart[i])
	// // isStart[i] = false;
	// // else
	//
	// time++;
	// boolean flag = true;
	// for (int i = 0; i < Vp.size(); i++) {
	// if (onStair[i] != 3)
	// flag = false;
	// }
	// if (flag)
	// break;
	// }
	// int max = 0;
	// for (int i = 0; i < Vp.size(); i++)
	// max = (max < finStair[i] ? finStair[i] : max);
	//
	// if (min > max)
	// min = max;
	// }

}
