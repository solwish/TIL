package theory;

public class PracticeSort02 {

	public static void main(String[] args) {
		int A[] = { 82, 6, 8, 74, 21, 26, 23, 87, 34, 95, 1, 2, 3, 4, 5, 6, 7 };

		PracticeSort02 pr = new PracticeSort02();

		// pr.mergeSort(A, 0, A.length - 1);
		pr.quickSort(A, 0, A.length - 1);

		for (int i = 0; i < A.length; i++)
			System.out.print(A[i] + " ");
	}

	void mergeSort(int[] A, int p, int r) {
		int q = (p + r) / 2;
		if (p < r) {
			mergeSort(A, p, q);
			mergeSort(A, q + 1, r);
			merge(A, p, q, r);
		}
	}

	void merge(int[] data, int p, int q, int r) {
		int i = p, j = q + 1, k = p;
		int[] temp = new int[data.length];

		while (i <= q && j <= r)
			if (data[i] < data[j])
				temp[k++] = data[i++];
			else
				temp[k++] = data[j++];

		while (i <= q)
			temp[k++] = data[i++];
		while (j <= r)
			temp[k++] = data[j++];

		for (i = p; i <= r; i++)
			data[i] = temp[i];
	}

	void quickSort(int[] A, int p, int r) {
		int q;
		if (p < r) {
			q = partition(A, p, r);
			quickSort(A, p, q - 1);
			quickSort(A, q + 1, r);
		}
	}

	int partition(int[] A, int p, int r) {
		int pivot = A[r];
		int temp = 0;
		int i = p - 1;
		for (int j = p; j < r; j++) {
			if (A[j] <= pivot) {
				i++;
				temp = A[i];
				A[i] = A[j];
				A[j] = temp;
			}
		}
		temp = A[i + 1];
		A[i + 1] = A[r];
		A[r] = temp;
		return i + 1;
	}
}
