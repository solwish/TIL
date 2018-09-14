package kakao;

public class P3_2017_1 {

	public static void main(String[] args) {
		int arr1[] = { 9, 20, 28, 18, 11 };
		int arr2[] = { 30, 1, 21, 17, 28 };

		String[] ss = solution(5, arr1, arr2);
		for (int i = 0; i < ss.length; i++)
			System.out.println(ss[i]);
	}

	static public String[] solution(int n, int[] arr1, int[] arr2) {
		String[] answer = new String[n];
		int map[][] = new int[n][n];

		for (int i = 0; i < n; i++) {
			int tmp = arr1[i];
			int rest;
			int cnt = 0;
			while (tmp != 0) {
				rest = tmp % 2;
				if (rest == 1) {
					map[i][n - 1 - cnt] = 1;
				}
				cnt++;
				tmp /= 2;
			}
		}
		for (int i = 0; i < n; i++) {
			int tmp = arr2[i];
			int rest;
			int cnt = 0;
			while (tmp != 0) {
				rest = tmp % 2;
				if (rest == 1) {
					map[i][n - 1 - cnt] = 1;
				}
				cnt++;
				tmp /= 2;
			}
		}
		for (int i = 0; i < n; i++) {
			String s = "";
			for (int j = 0; j < n; j++) {
				if (map[i][j] == 1)
					s += '#';
				else
					s += ' ';
			}
			answer[i] = s;
		}
		return answer;
	}
}
