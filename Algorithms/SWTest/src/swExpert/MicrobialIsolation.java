package swExpert;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

class node {
	int cnt; // 미생물의 수

	int dir; // 진행방향

	int maxcnt; // 해당 칸으로 여러 미생물이 왔을 경우 가장 큰 미생물 수

	public void reset() {
		cnt = 0;
		dir = 0;
		maxcnt = 0;
	}

	public void reset(int _cnt, int _dir, int _maxcnt) {
		cnt = _cnt;
		dir = _dir;
		maxcnt = _maxcnt;
	}

	public void reset(node t) {
		cnt = t.cnt;
		dir = t.dir;
		maxcnt = t.maxcnt;
	}
}

public class MicrobialIsolation {

	static final int N = 100;
	static final int K = 1000;

	static final int UP = 1;
	static final int DOWN = 2;
	static final int LEFT = 3;
	static final int RIGHT = 4;

	static int n, m, k;
	static node map[][] = new node[N + 1][N + 1]; // 맵에 위치한 미생물들의 현재 정보
	static node next_map[][] = new node[N + 1][N + 1]; // 미생물이 1시간 뒤 이동한 맵의 정보

	// 1상 2하 3좌 4우
	static final int xy[][] = { { 0, 0 }, { -1, 0 }, { 1, 0 }, { 0, -1 }, { 0, 1 } };

	// 미생물을 1시간 움직임
	static void move() {
		for (int i = 0; i < n; i++)
			for (int j = 0; j < n; j++)
				if (map[i][j].cnt > 0) {
					int dir = map[i][j].dir;
					int nextx = i + xy[dir][0];
					int nexty = j + xy[dir][1];

					// 이동가능한 곳이 약품처리된 곳일 경우
					if (nextx == 0 || nextx == n - 1 || nexty == 0 || nexty == n - 1) {
						next_map[nextx][nexty].cnt = map[i][j].cnt / 2;

						if (dir == UP)
							next_map[nextx][nexty].dir = DOWN;
						else if (dir == DOWN)
							next_map[nextx][nexty].dir = UP;
						else if (dir == RIGHT)
							next_map[nextx][nexty].dir = LEFT;
						else if (dir == LEFT)
							next_map[nextx][nexty].dir = RIGHT;
					}
					// 이동가능한 곳이 일반적인 경우
					else {
						// 이동할 곳에 미생물이 이미 이동해 있는 경우
						if (next_map[nextx][nexty].maxcnt > 0) {
							// 미생물 수 추가
							next_map[nextx][nexty].cnt += map[i][j].cnt;

							// 이미 이동한 미생물 보다 더 큰 미생물이 같은 자리로 오는 경우
							if (next_map[nextx][nexty].maxcnt < map[i][j].cnt) {
								// 가장 큰 미생물의 이동방향으로 변경
								next_map[nextx][nexty].maxcnt = map[i][j].cnt;
								next_map[nextx][nexty].dir = map[i][j].dir;
							}
						} else {
							// 미생물 수 추가
							next_map[nextx][nexty].cnt = map[i][j].cnt;
							next_map[nextx][nexty].maxcnt = next_map[nextx][nexty].cnt;

							// 미생물 방향
							next_map[nextx][nexty].dir = map[i][j].dir;
						}
					}
				}

		// next_map 정보를 map으로 옮겨주고, next_map 초기화
		for (int i = 0; i < n; i++)
			for (int j = 0; j < n; j++) {
				map[i][j].reset(next_map[i][j]);
				next_map[i][j].reset();
			}
	}

	// 남아있는 총 미생물의 수를 리턴
	static int get_answer() {
		int sum = 0;
		for (int i = 0; i < n; i++)
			for (int j = 0; j < n; j++)
				sum += map[i][j].cnt;
		return sum;
	}

	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		int T = Integer.parseInt(br.readLine());
		StringTokenizer s;

		for (int t_case = 1; t_case <= T; t_case++) {
			// input & init
			int tmp_x, tmp_y, tmp_cnt, tmp_dir;

			s = new StringTokenizer(br.readLine());
			n = Integer.parseInt(s.nextToken());
			m = Integer.parseInt(s.nextToken());
			k = Integer.parseInt(s.nextToken());

			for (int i = 0; i < n; i++)
				for (int j = 0; j < n; j++) {
					next_map[i][j] = new node();
					map[i][j] = new node();
					map[i][j].reset();
				}

			for (int i = 0; i < k; i++) {
				s = new StringTokenizer(br.readLine());
				tmp_x = Integer.parseInt(s.nextToken());
				tmp_y = Integer.parseInt(s.nextToken());
				tmp_cnt = Integer.parseInt(s.nextToken());
				tmp_dir = Integer.parseInt(s.nextToken());
				map[tmp_x][tmp_y].reset(tmp_cnt, tmp_dir, tmp_cnt);
			}

			// process m times
			for (int i = 0; i < m; i++)
				move();

			// output
			System.out.println("#" + t_case + " " + get_answer());
		}
	}
}

// class MicroXY {
// int i, j, num, direct;
//
// public MicroXY(int i, int j, int num, int direct) {
// this.i = i;
// this.j = j;
// this.num = num;
// this.direct = direct;
// }
//
// @Override
// public String toString() {
// return "MicroXY [i=" + i + ", j=" + j + ", num=" + num + ", direct=" + direct
// + "]";
// }
// }
//
// public class MicrobialIsolation {
//
// static int[] Iaxis = { 0, -1, 1, 0, 0 };
// static int[] Jaxis = { 0, 0, 0, -1, 1 };
// static int N, M, K;
// static int[][] map;
// static MicroXY[] micros;
//
// public static void main(String[] args) throws Exception {
// BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
// int T = Integer.parseInt(br.readLine());
// StringTokenizer s;
//
// for (int t_case = 1; t_case <= T; t_case++) {
// s = new StringTokenizer(br.readLine());
// N = Integer.parseInt(s.nextToken());
// M = Integer.parseInt(s.nextToken());
// K = Integer.parseInt(s.nextToken());
// map = new int[N][N];
// micros = new MicroXY[K];
//
// for (int i = 0; i < K; i++) {
// s = new StringTokenizer(br.readLine());
// micros[i] = new MicroXY(Integer.parseInt(s.nextToken()),
// Integer.parseInt(s.nextToken()),
// Integer.parseInt(s.nextToken()), Integer.parseInt(s.nextToken()));
// }
// for (int i = 0; i < N; i++) {
// map[0][i] = -1;
// map[N - 1][i] = -1;
// map[i][0] = -1;
// map[i][N - 1] = -1;
// }
// for (int i = 0; i < K; i++) {
// map[micros[i].i][micros[i].j] = micros[i].num;
// }
//
// for (int time = 0; time < M; time++) {
// for (int i = 0; i < K; i++) {
// micros[i].i = Iaxis[micros[i].direct];
//
//
// }
// }
// }
//
// }
//
// }
