
public class QuickSort {

	public static void main(String[] args) {
		QuickSort qs = new QuickSort();
		int A[] = { 82, 6, 8, 74, 21, 26, 23, 87, 34, 95 };

		qs.quickSort(A, 0, A.length - 1);

		for (int i = 0; i < A.length; i++)
			System.out.print(A[i] + " ");
	}

	void quickSort(int A[], int p, int r) {
		if (p < r) {
			int q = partition(A, p, r);
			quickSort(A, p, q - 1);
			quickSort(A, q + 1, r);
		}
	}

	int partition(int A[], int p, int r) {
		int pivot;
		int temp;
		pivot = A[r];
		int i = p - 1;
		for (int j = p; j <= r - 1; j++) {
			if (A[j] <= pivot) {
				i = i + 1;
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
