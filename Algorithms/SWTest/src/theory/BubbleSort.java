package theory;

public class BubbleSort {

	// 인접 비교방식을 통한 정렬 알고리즘의 일종이다.
	// 즉 버블 정렬 기법을 응용하여 한번은 왼쪽에서 오른쪽으로 진행하면서 최대 값을
	// 우측으로 보내고, 한번은 오른쪽에서 왼쪽으로 진행하면서 최소 값을 좌측으로 보내는
	// 방법을 반복하면서 정렬하는 기법이다. 이 알고리즘을 이용하여 크기가 10인 배열에
	// 저장되어 있는 10개의 정수를 오름차순으로 정렬하고자 한다.
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
