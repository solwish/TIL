package kakao_2018;

public class S2 {

	public static void main(String[] args) {
		int N = 5;
		int[] stages = { 2, 1, 2, 3, 2, 3, 3, 3 };
		int[] ans = solution(N, stages);
		for (int i = 0; i < N; i++)
			System.out.println(ans[i]);
	}

	static public int[] solution(int N, int[] stages) {
		int[] answer = new int[N];
		double[] fail = new double[N + 1];
		int[] pass = new int[N + 2];
		int[] stay = new int[N + 1];

		for (int i = 0; i < stages.length; i++) {
			for (int j = 1; j <= stages[i]; j++) {
				pass[j]++;
			}
			if (stages[i] != N + 1) {
				stay[stages[i]]++;
			}
		}

		for (int i = 1; i <= N; i++)
			if (pass[i] != 0)
				fail[i] = (double) stay[i] / pass[i];
			else
				fail[i] = 0;

		int cnt = 0;
		for (int i = 1; i <= N; i++) {
			double max = -1;
			int tmp = 0;
			for (int j = 1; j <= N; j++)
				if (fail[j] > max) {
					max = fail[j];
					tmp = j;
				}
			answer[cnt] = tmp;
			fail[tmp] = -99;
			cnt++;
		}
		return answer;
	}
}
