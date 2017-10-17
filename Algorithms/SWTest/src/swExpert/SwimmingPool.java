package swExpert;

import java.util.Scanner;

public class SwimmingPool {

	// 최솟값 초기화
	static int min = Integer.MAX_VALUE;

	// 1일/1개월/3개월/12개월 비용
	static int[] costTable = new int[4];
	// 이용 횟수
	static int[] Plan = new int[12];

	// 백트래킹 방식으로 찾을 함수.
	static void search(int month, int cost) {
		// 계산 중 12월이 지나갈 경우 재귀를 멈추기 위하여 검사를 합니다.
		if (month >= 12) {
			// 현재 전달된 cost의 입력을 확인하여 min 값보다 작은 경우 min에 값에 넣어 준다
			// 결과적으로 가장 작은 비용을 가지고 12월을 도착하는 숫자가 min에 남게 됩니다.
			if (cost < min)
				min = cost;
			// 12월까지 계산을 모두 했으니 더 이상 search를 찾지 않고 돌아갑니다.
			return;
		}

		// month달에 1일 이용권을 이용하도록 비용을 계산하고 다음 달로 넘어갑니다.
		search(month + 1, cost + costTable[0] * Plan[month]);
		// month달을 한달 이용권으로 계산
		search(month + 1, cost + costTable[1]);
		// month달을 3달 이용권으로 계산
		search(month + 3, cost + costTable[2]);
		// month달을 1년 이용권으로 계산
		search(month + 12, cost + costTable[3]);
	}

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);

		int t = sc.nextInt();
		for (int t_case = 1; t_case <= t; t_case++) {
			// 최솟값 초기화
			min = Integer.MAX_VALUE;
			for (int i = 0; i < 4; i++)
				costTable[i] = sc.nextInt();
			for (int i = 0; i < 12; i++)
				Plan[i] = sc.nextInt();
			// 재귀 호출을 시작합니다.
			search(0, 0);
			System.out.println("#" + t_case + " " + min);
		}
	}

}