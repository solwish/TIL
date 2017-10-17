package swExpert;

import java.util.Scanner;

public class SwimmingPool {

	// �ּڰ� �ʱ�ȭ
	static int min = Integer.MAX_VALUE;

	// 1��/1����/3����/12���� ���
	static int[] costTable = new int[4];
	// �̿� Ƚ��
	static int[] Plan = new int[12];

	// ��Ʈ��ŷ ������� ã�� �Լ�.
	static void search(int month, int cost) {
		// ��� �� 12���� ������ ��� ��͸� ���߱� ���Ͽ� �˻縦 �մϴ�.
		if (month >= 12) {
			// ���� ���޵� cost�� �Է��� Ȯ���Ͽ� min ������ ���� ��� min�� ���� �־� �ش�
			// ��������� ���� ���� ����� ������ 12���� �����ϴ� ���ڰ� min�� ���� �˴ϴ�.
			if (cost < min)
				min = cost;
			// 12������ ����� ��� ������ �� �̻� search�� ã�� �ʰ� ���ư��ϴ�.
			return;
		}

		// month�޿� 1�� �̿���� �̿��ϵ��� ����� ����ϰ� ���� �޷� �Ѿ�ϴ�.
		search(month + 1, cost + costTable[0] * Plan[month]);
		// month���� �Ѵ� �̿������ ���
		search(month + 1, cost + costTable[1]);
		// month���� 3�� �̿������ ���
		search(month + 3, cost + costTable[2]);
		// month���� 1�� �̿������ ���
		search(month + 12, cost + costTable[3]);
	}

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);

		int t = sc.nextInt();
		for (int t_case = 1; t_case <= t; t_case++) {
			// �ּڰ� �ʱ�ȭ
			min = Integer.MAX_VALUE;
			for (int i = 0; i < 4; i++)
				costTable[i] = sc.nextInt();
			for (int i = 0; i < 12; i++)
				Plan[i] = sc.nextInt();
			// ��� ȣ���� �����մϴ�.
			search(0, 0);
			System.out.println("#" + t_case + " " + min);
		}
	}

}