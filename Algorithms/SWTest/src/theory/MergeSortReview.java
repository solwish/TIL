package theory;

import java.util.Scanner;

public class MergeSortReview {
	static int[] A = new int[10];

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		for (int i = 0; i < A.length; i++)
			A[i] = sc.nextInt();

		mergeSort(0, A.length - 1);

		for (int i = 0; i < A.length; i++)
			System.out.print(A[i] + " ");
	}

	static void mergeSort(int str, int end) {
		if (str < end) {
			int mid = (str + end) / 2;
			mergeSort(str, mid);
			mergeSort(mid + 1, end);
			merge(str, mid, end);
		}
	}

	static void merge(int str, int mid, int end) {
		int temp[] = new int[A.length];
		int i = str;
		int j = mid + 1;
		int f = str;

		while (i <= mid && j <= end) {
			if (A[i] < A[j])
				temp[f++] = A[i++];
			else
				temp[f++] = A[j++];
		}

		while (i <= mid)
			temp[f++] = A[i++];
		while (j <= end)
			temp[f++] = A[j++];

		for (int k = str; k <= end; k++)
			A[k] = temp[k];
	}

}