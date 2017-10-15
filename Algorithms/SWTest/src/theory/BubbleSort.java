package theory;

public class BubbleSort {

	// ���� �񱳹���� ���� ���� �˰����� �����̴�.
	// �� ���� ���� ����� �����Ͽ� �ѹ��� ���ʿ��� ���������� �����ϸ鼭 �ִ� ����
	// �������� ������, �ѹ��� �����ʿ��� �������� �����ϸ鼭 �ּ� ���� �������� ������
	// ����� �ݺ��ϸ鼭 �����ϴ� ����̴�. �� �˰����� �̿��Ͽ� ũ�Ⱑ 10�� �迭��
	// ����Ǿ� �ִ� 10���� ������ ������������ �����ϰ��� �Ѵ�.
	public static void main(String[] args) {
		int[] d = { 3, 7, 5, 4, 1, 2, 6, 9, 10, 8 };
		int n = 10;
		int left = 0;
		int right = n - 1;
		int buf = 0;
		int shift = -1;
		int i;

		while (left < right) {
			i = left;
			while (i < right) {
				if (d[i] > d[i + 1]) {
					buf = d[i];
					d[i] = d[i + 1];
					d[i + 1] = buf;
					shift = i;
				}
				i = i + 1;
			}
			right = shift;
			i = right;
			while (i > left) {
				if (d[i - 1] > d[i]) {
					buf = d[i - 1];
					d[i - 1] = d[i];
					d[i] = buf;
					shift = i;
				}
				i = i - 1;
			}
			left = shift;
		}
		for (int j = 0; j <= 9; j++) {
			System.out.print(d[j] + " ");
		}
	}
}
