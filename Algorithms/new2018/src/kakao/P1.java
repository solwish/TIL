package kakao;

import java.util.Arrays;

public class P1 {

	public static void main(String[] args) {
		int t_1[] = { 4, 1, 3, 2 };
		int t_2[] = { 4, 1, 3 };
		System.out.println(solution(t_1));
		System.out.println(solution(t_2));

	}

	static public boolean solution(int[] arr) {
		boolean answer = true;
		Arrays.sort(arr);
		for (int i = 0; i < arr.length; i++) {
			if (arr[i] != i + 1) {
				answer = false;
				break;
			}
		}

		return answer;
	}
}
