package theory;

public class MeasureEx01 {

	public static void main(String[] args) {

		// 어떤 정수의 모든 약수 중 자신을 제외한 약수를 모두 합하면 자신과 같아지는 수가 있다. 예를들어 6의 약수
		// 1,2,3,6 중 6을 제외한 1,2,3을 더하면 6이 되어 자신과 같아진다. 4부터 1000까지의 정수 중 이러한
		// 약수를 갖는 수를 찾아 그 개수를 출력하라.

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
