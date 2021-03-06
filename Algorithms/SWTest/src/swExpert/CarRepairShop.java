package swExpert;

import java.util.LinkedList;
import java.util.Queue;
import java.util.Scanner;

class customer {
	int customer, time;

	public customer(int customer, int time) {
		this.customer = customer;
		this.time = time;
	}

	@Override
	public String toString() {
		return "customer [customer=" + customer + ", time=" + time + "]";
	}

}

public class CarRepairShop {
	static int N, M, K, A, B;
	static int[] regist, repair;
	static customer[] customers;
	static customer[] registCust;
	static customer[] repairCust;
	static int t;
	static boolean flag;
	static boolean[] registOccupied, repairOccupied;
	static int min = Integer.MAX_VALUE;

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int T = sc.nextInt();

		for (int t_case = 1; t_case <= T; t_case++) {
			N = sc.nextInt();
			M = sc.nextInt();
			K = sc.nextInt();
			A = sc.nextInt();
			B = sc.nextInt();
			regist = new int[N];
			registOccupied = new boolean[N];
			registCust = new customer[N];
			repair = new int[M];
			repairOccupied = new boolean[M];
			repairCust = new customer[M];
			customers = new customer[K];
			int[][] answer = new int[2][K];// 1줄 손님. 2줄 접수창구. 3줄 정비창구
			for (int i = 0; i < 2; i++)
				for (int j = 0; j < K; j++)
					answer[i][j] = -1;
			min = Integer.MAX_VALUE;

			for (int i = 0; i < N; i++)
				regist[i] = sc.nextInt();
			for (int i = 0; i < M; i++)
				repair[i] = sc.nextInt();
			for (int i = 0; i < K; i++) {
				customers[i] = new customer(i, sc.nextInt());
				if (min > customers[i].time)
					min = customers[i].time;
			}

			Queue<customer> QwaitRegi = new LinkedList<>();
			Queue<customer> QwaitRepa = new LinkedList<>();
			t = min;
			flag = true;
			int leftCust = 0;
			boolean registflag = false;
			boolean repairflag = false;

			while (flag) {
				for (int i = leftCust; i < K; i++)
					if (customers[i].time == t) {
						QwaitRegi.offer(customers[i]);
						leftCust++;
					} else
						break;

				// 접수창구
				for (int i = 0; i < N; i++)
					if (registOccupied[i] == true)
						if (regist[i] == registCust[i].time) {
							registOccupied[i] = false;
							QwaitRepa.offer(registCust[i]);
						}

				// 접수창구에 보내기
				for (int i = 0; i < N; i++)
					if (!QwaitRegi.isEmpty() && registOccupied[i] == false) {
						registOccupied[i] = true;
						registCust[i] = QwaitRegi.poll();
						registCust[i].time = 0;
						answer[0][registCust[i].customer] = i;
					}

				// 접수창구
				for (int i = 0; i < N; i++)
					if (registOccupied[i] == true) {
						if (regist[i] == registCust[i].time) {
							registOccupied[i] = false;
							QwaitRepa.offer(registCust[i]);
							registflag = true;
						} else
							registCust[i].time++;
					}

				// 비는 순간 접수창구에 보내기
				if (registflag) {
					registflag = false;
					for (int i = 0; i < N; i++)
						if (!QwaitRegi.isEmpty() && registOccupied[i] == false) {
							registOccupied[i] = true;
							registCust[i] = QwaitRegi.poll();
							registCust[i].time = 1;
							answer[0][registCust[i].customer] = i;
						}
				}

				// 수리창구
				for (int i = 0; i < M; i++)
					if (repairOccupied[i] == true)
						if (repair[i] == repairCust[i].time) {
							repairOccupied[i] = false;
							repairflag = true;
						}

				// 수리창구에 보내기
				for (int i = 0; i < M; i++)
					if (!QwaitRepa.isEmpty() && repairOccupied[i] == false) {
						repairOccupied[i] = true;
						repairCust[i] = QwaitRepa.poll();
						repairCust[i].time = 0;
						answer[1][repairCust[i].customer] = i;
					}

				// 수리창구
				for (int i = 0; i < M; i++)
					if (repairOccupied[i] == true) {
						if (repair[i] == repairCust[i].time) {
							repairOccupied[i] = false;
							repairflag = true;
						} else
							repairCust[i].time++;
					}

				// 비는 순간 수리창구에 보내기
				if (repairflag) {
					repairflag = false;
					for (int i = 0; i < M; i++)
						if (!QwaitRepa.isEmpty() && repairOccupied[i] == false) {
							repairOccupied[i] = true;
							repairCust[i] = QwaitRepa.poll();
							repairCust[i].time = 1;
							answer[1][repairCust[i].customer] = i;
						}
				}

				t++;
				for (int i = 0; i < K; i++) {
					if (answer[0][i] == -1 || answer[1][i] == -1) {
						flag = true;
						break;
					} else
						flag = false;
				}
			}

			int cnt = 0;
			for (int i = 0; i < K; i++)
				if (answer[0][i] == A - 1 && answer[1][i] == B - 1)
					cnt += i + 1;
			if (cnt == 0)
				cnt = -1;
			System.out.println("#" + t_case + " " + cnt);
		}
	}
}