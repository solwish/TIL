package theory;

public class DynamicEX01 {
	static int[] f = new int[500];

	public static void main(String[] args) {
		for (int i = 0; i < 500; i++) {
			f[i] = -1;
		}
		for (int j = 1; j <= 10; j++)
			System.out.print(fib(j) + " ");
	}

	static int fib(int n) {
		if (n == 1 || n == 2)
			return 1;
		else if (f[n] > -1) // �迭 f�� -1���� �ʱ�ȭ�Ǿ� �ִٰ� ����
			return f[n]; // �� �̹� ���� ���̶�� �ǹ�
		else {
			f[n] = fib(n - 2) + fib(n - 1); // ��������� ȣ����
			return f[n];
		}
	}

	static int fib2(int n) {
		f[1] = 1;
		f[2] = 1;
		for (int i = 3; i <= n; i++) // �������� ���ٹ��
			f[n] = f[n - 1] + f[n - 2];

		return f[n];
	}

}
