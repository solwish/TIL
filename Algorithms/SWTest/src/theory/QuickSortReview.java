package theory;

import java.util.Arrays;
import java.util.Scanner;

public class QuickSortReview {
	static int[] A = new int[10];

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		for (int i = 0; i < A.length; i++)
			A[i] = sc.nextInt();

		quickSort(0, A.length - 1);

		for (int i = 0; i < A.length; i++)
			System.out.print(A[i] + " ");
	}

	static void quickSort(int str, int end) {
		if (str < end) {
			int mid = partition(str, end);
			quickSort(str, mid - 1);
			quickSort(mid + 1, end);
		}
	}

	static int partition(int str, int end) {
		int mid = (str + end) / 2;
		int[] AA = new int[3];
		AA[0] = A[str];
		AA[1] = A[mid];
		AA[2] = A[end];
		Arrays.sort(AA);
		int pivot = AA[1];
		int temp;

		int i = str - 1;
		for (int j = str; j <= end; j++)
			if (A[j] >= pivot)
				continue;
			else {
				temp = A[++i];
				A[i] = A[j];
				A[j] = temp;
			}

		temp = A[i + 1];
		A[i + 1] = A[end];
		A[end] = temp;
		return i + 1;
	}

}