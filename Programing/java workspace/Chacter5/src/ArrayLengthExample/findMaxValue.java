package ArrayLengthExample;

public class findMaxValue {

	public static void main(String[] args) {
		
		int[] scores = { 83, 90, 87, 10, 274, 11, -41 };
		int max = findMax(scores);
//		int te = Integer.MIN_VALUE;
		int min = findMin(scores);
//		System.out.println(te);
		System.out.println("최소값은"+min);
		int aa = max + 1;
		System.out.println("최대값위치는 " + (max+1) + "번째이고 "+"그 값은 " + scores[max]+"입니다.");
		// 값찾기

		int xx = findvalue(scores, 10);
		int xxx = xx + 1;
		if (xx == -1) {
			System.out.println("그 값이 없습니다.");
		} else {
			System.out.println("그 값의 위치는 " + xxx + "입니다.");
		}
	}

	public static int findMax(int[] scores) {
		int max = scores[0];
		int x = -1;
		for (int i = 0; i < scores.length; i++) {

			if (max <= scores[i]) {
				max = scores[i];
				x = i;
			}
		}
		return x;

	}

	public static int findMin(int[] scores) {
		int min = Integer.MAX_VALUE;
		for (int i = 0; i < scores.length; i++) {

			if (min >= scores[i]) {
				min = scores[i];
			}

		}
		return min;
	}

	public static int findvalue(int[] values, int num) {
		int y = -1;
	//	in 
		for (int i = 0; i < values.length; i++) {
			if (values[i] == num) {
				y = i;
			} 

		}
		return y;
	}

}
