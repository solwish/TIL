package theory;

public class MeasureEx01 {

	public static void main(String[] args) {

		// � ������ ��� ��� �� �ڽ��� ������ ����� ��� ���ϸ� �ڽŰ� �������� ���� �ִ�. ������� 6�� ���
		// 1,2,3,6 �� 6�� ������ 1,2,3�� ���ϸ� 6�� �Ǿ� �ڽŰ� ��������. 4���� 1000������ ���� �� �̷���
		// ����� ���� ���� ã�� �� ������ ����϶�.

		int tc = 0;
		int r;
		int tot;

		for (int n = 4; n <= 1000; n++) {
			tot = 0;
			r = n / 2;

			for (int j = 1; j <= r; j++) {
				if (n % j == 0) {
					tot = tot + j;
				}
			}

			if (tot == n) {
				// System.out.println(n);
				tc = tc + 1;
			}
		}

		System.out.println(tc);
	}
}
