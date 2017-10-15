package theory;
import java.util.Arrays;

public class PracticeSort03 {

	public static void main(String[] args) {
		int[] A = { 15, 59, 37, 65, 84, 31, 72, 15, 56, 17, 67, 83, 69, 20, 8, 53, 8, 91, 58, 35 };

		PracticeSort03 p = new PracticeSort03();

//		p.quickSort(A, 0, A.length - 1);
		// p.mergeSort(A, 0, A.length - 1);
		Arrays.sort(A);
		
		for (int i = 0; i < A.length; i++) {
			System.out.print(A[i] + " ");
		}
	}

	void mergeSort(int[] A, int p, int r) {
		int q = (p + r) / 2;
		if (p < r) {
			mergeSort(A, p, q);
			mergeSort(A, q + 1, r);
			merge(A, p, q, r);
		}
	}

	void merge(int[] A, int p, int q, int r) {
		int i = p, k = p;
		int j = q + 1;
		int temp[] = new int[A.length];

		while (i <= q && j <= r) {
			if (A[i] <= A[j]) {
				temp[k++] = A[i++];
			} else
				temp[k++] = A[j++];
		}
		while (i <= q)
			temp[k++] = A[i++];
		while (j <= r)
			temp[k++] = A[j++];

		for (int c = p; c <= r; c++) {
			A[c] = temp[c];
		}
	}

	void quickSort(int[] A, int p, int r) {
		if (p < r) {
			int q = partition(A, p, r);
			quickSort(A, p, q - 1);
			quickSort(A, q + 1, r);
		}
	}

	int partition(int[] A, int p, int r) {
		int i = p - 1;
		int pivot = A[r];
		int temp;

		for (int j = p; j < r; j++) {
			if (A[j] <= pivot) {
				i++;
				temp = A[i];
				A[i] = A[j];
				A[j] = temp;
			}
		}
		temp = A[r];
		A[r] = A[i + 1];
		A[i + 1] = temp;

		return i + 1;
	}

}
