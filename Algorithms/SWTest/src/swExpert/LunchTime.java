package swExpert;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

//�濡���� ��ġ�� ��Ÿ���� Ŭ����
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
	//N: ���� �� ���� ����, M: ����� ��, S(=2) : ����� ��
	//map : ���� ����
	//match[x] = y : x��° ����� y��° ����� Ÿ���� ������ ����
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
	
	//man_index�� ����� stair_index�� ��� ������ �Ÿ�
	static int dist(int man_index, int stair_index) {
		int dx = abs(man[man_index].x - stair[stair_index].x);
		int dy = abs(man[man_index].y - stair[stair_index].y);
		return dx + dy;
	}
	
	//�� ����� ��� ����� �̿��� �� ��� �������� ���� �ʿ��� �ð��� ����ϴ� �Լ�
	static void update() {
		//��� ������� ����� �������µ� �ʿ��� �ּ� �ð�
		int total_min_time = 0;
		
		//�� ����� ���� �������̹Ƿ� ������ ���ؼ� ����Ѵ�.
		for (int stair_index = 0; stair_index < 2; stair_index++) {
			ZSM now_stair = stair[stair_index];
			int arrival_time[] = new int[MAXN * 2];
			//arrival_time[t] : �ð� t�� �� ��ܿ� �����ϴ� ����� ��
			int current_stair[] = new int[MAXT];
			//current_stair[t] : �ð� t�� �� ����� �������� �ִ� ����� ��
			for (int i = 0; i < MAXT; i++)
				current_stair[i] = 0;
			for (int i = 0; i < MAXN; i++)
				arrival_time[i] = 0;
			for (int man_index = 0; man_index < M; man_index++) {
				if (match[man_index] == stair_index)
					arrival_time[dist(man_index, stair_index) + 1]++;
			}
			
			//stair_index ��° ����� �������� ����� ��� �۾��� ��ġ�� ���� �ʿ��� �ּ� �ð�
			int now_min_time = 0;
			
			//��ܿ� �����ϴ� �ð� ������������ �� ����� ����� ���������� �ùķ��̼�
			for (int time = 1; time <= 20; time++) {
				
				//time�� ������ ����� �ִٸ�
				while (arrival_time[time] > 0) {
					arrival_time[time]--;
					//�ش� ����� �������µ� �ʿ��� �ð�
					int remain_time = map[now_stair.x][now_stair.y];
					
					//������ �������� ��� 3���� ���ÿ� �������� ���� ���� ���� 1ĭ�� ������ ����������
					for (int walk_time = time; walk_time < MAXT; walk_time++) {
						if (current_stair[walk_time] < 3) {
							current_stair[walk_time]++;
							remain_time--;

							//����� �� ���������� now_min_time ����
							if (remain_time == 0) {
								now_min_time = max(now_min_time, walk_time + 1);
								break;
							}
						}
					}
				}
			}
			//"��ü ����� �������µ� �ʿ��� �ּ� �ð�"�� (�� ����� �������µ� �ʿ��� �ּ� �ð�) �� �ִ�
			total_min_time = max(total_min_time, now_min_time);
		}
		//���� match ������ ���� total_min_time�� �������� ����
		answer = min(answer, total_min_time);
	}

	static void dfs(int man_index) {
		//��� ����� ���� �� ����� ����� ����� �� ���ߴٸ�
		if (man_index == M) {
			//�ش� ���¿��� �ʿ��� �ð��� ����ϰ� ���� ����
			update();
			return;
		}
		//man_index ��° ����� stair_index��° ����� �����ϰ�, ��� ȣ��
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
						//��� ��ġ ���� 1��° ���, 2��° ���...
						man[M++] = new ZSM(i, j);
					} else if (map[i][j] >= 2) {
						//��� ��ġ ��ǥ ����
						stair[S++] = new ZSM(i, j);
					}
				}
			}
			//�� �ʱ�ȭ
			answer = Integer.MAX_VALUE;
			match = new int[M];

			dfs(0);
			System.out.println("#" + t_case + " " + answer);
		}
	}

}