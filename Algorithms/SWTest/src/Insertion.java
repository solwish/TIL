import java.util.Scanner;

public class Insertion {

	public static void main(String[] args) {

		Scanner sc = new Scanner(System.in);
		int[] array = { 99, 31, 95, 84, 79, 17, 42, 80, 43, 82 };
		int key = 0;
		int j = 0;

		for (int i = 1; i < array.length; i++) {
			key = array[i];
			// for (j = i - 1; j >= 0; j--) {
			// if (array[j] > key) {
			// array[j + 1] = array[j];
			// }else {
			// break;
			// }
			// }
			for (j = i - 1; j >= 0 && array[j] > key; j--) {
				array[j + 1] = array[j];
			}
			array[j + 1] = key;
		}

		for (int i = 0; i < array.length; i++) {
			System.out.print(array[i] + " ");
		}
	}

}
