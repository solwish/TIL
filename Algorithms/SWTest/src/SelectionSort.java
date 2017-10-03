import java.util.Scanner;

public class SelectionSort {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int[] array = new int[10];
		int[] cnt = new int[10];
		int temp = 0;
		int max;

		for (int i = 0; i < array.length; i++) {
			array[i] = sc.nextInt();
		}
		System.arraycopy(array, 0, cnt, 0, array.length);

		for (int i = array.length - 1; i > 0; i--) {
			max = i;
			for (int j = i - 1; j >= 0; j--) {
				if (array[max] < array[j]) {
					max = j;
				}
			}
			temp = array[max];
			array[max] = array[i];
			array[i] = temp;
			for (int k = 0; k < array.length; k++) {
				System.out.print(array[k] + " ");
			}
			System.out.println();
		}

		for (int i = 0; i < array.length; i++) {
			System.out.print(array[i] + " ");
		}
		// System.out.println();
		// for (int i = 0; i < array.length; i++) {
		// System.out.print(cnt[i] + " ");
		// }
		// for (int i = 0; i < cnt.length; i++) {
		// if (cnt[i] == array[9] || cnt[i] == array[8]) {
		// System.out.print("A+ ");
		// } else if (array[7] == cnt[i]) {
		// System.out.print("A ");
		// } else if (array[6] == cnt[i]) {
		// System.out.print("B+ ");
		// } else if (array[5] == cnt[i]) {
		// System.out.print("B ");
		// } else if (array[4] == cnt[i]) {
		// System.out.print("C+ ");
		// } else if (array[3] == cnt[i]) {
		// System.out.print("C ");
		// } else if (array[2] == cnt[i]) {
		// System.out.print("D+ ");
		// } else if (array[1] == cnt[i]) {
		// System.out.print("D ");
		// } else if (array[0] == cnt[i]) {
		// System.out.print("F ");
		// }
		//
		// }
	}
}
