package practice;

public class Day9kakao {
	public static void main(String[] args) {

		int arr[] = { 4, 1, 3, 2 };
		System.out.println(solution(arr));
	}

	public static boolean solution(int[] arr) {
		boolean answer = true;
		int length = arr.length;
		boolean[] ch = new boolean[length + 1];
		for (int i = 0; i < arr.length; i++) {
			int temp = arr[i];
			if (temp > length)
				return false;
			if (ch[temp] == true)
				return false;
			else
				ch[temp] = true;
		}
		return answer;
	}

}
