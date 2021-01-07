package kakao_2018;

import java.util.LinkedList;

public class S4 {

	public static void main(String[] args) {
		int A[] = { 3, 1, 2 };
		int k = 5;
		System.out.println(solution(A, k));
	}

	static public int solution(int[] food_times, long k) {
		if (k == 0)
			return 1;
		int answer = 1;
		LinkedList<Integer> list = new LinkedList<>();
		long kk = k;

		for (int i = 0; i < food_times.length; i++)
			list.add(food_times[i]);

		int now = 0;
		while (kk != -1) {
			if (list.isEmpty()) {
				now = -1;
				break;
			}
			while (true) {
				// System.out.println();
				// for (int i = 0; i < list.size(); i++)
				// System.out.print(list.get(i) + " ");
				if (list.get(now) != 0) {
					list.set(now, list.get(now) - 1);
					kk--;
					now++;
					now %= list.size();
					break;
				} else if (list.get(now) == 0) {
					list.remove(now);
				}
				now %= list.size();
			}
		}
		answer = now;
		return answer;
	}

}
