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
		else if (f[n] > -1) // 배열 f가 -1으로 초기화되어 있다고 가정
			return f[n]; // 즉 이미 계산된 값이라는 의미
		else {
			f[n] = fib(n - 2) + fib(n - 1); // 재귀적으로 호출함
			return f[n];
		}
	}

	static int fib2(int n) {
		f[1] = 1;
		f[2] = 1;
		for (int i = 3; i <= n; i++) // 순차적인 접근방식
			f[n] = f[n - 1] + f[n - 2];

		return f[n];
	}

}
