package theory;

public class PracticeSort01 {

	public static void main(String[] args) {
		int A[] = { 82, 6, 8, 74, 21, 26, 23, 87, 34, 95, 1, 2, 3, 4, 5, 6, 7 };

		PracticeSort01 pr = new PracticeSort01();

		// pr.mergeSort(A, 0, A.length - 1);
		pr.quickSort(A, 0, A.length - 1);

		for (int i = 0; i < A.length; i++)
			System.out.print(A[i] + " ");
	}

	void mergeSort(int A[], int p, int r) {
		int q;
		if (p < r) {
			q = (p + r) / 2;
			mergeSort(A, p, q);
			mergeSort(A, q + 1, r);
			merge(A, p, q, r);
		}
	}

	void merge(int A[], int p, int q, int r) {
		int i = p, j = q + 1, k = p;
		int[] temp = new int[A.length];

		while (i <= q && j <= r) {
			if (A[i] <= A[j])
				temp[k++] = A[i++];
			else
				temp[k++] = A[j++];
		}

		while (i <= q)
			temp[k++] = A[i++];
		while (j <= r)
			temp[k++] = A[j++];

		for (i = p; i <= r; i++)
			A[i] = temp[i];
		// i는 p 부터 시작해야 맞지 부분적으로 진행되니까.
		// 분할 정복 합병 의 의미를 제대로 이해하자.
	}

	void quickSort(int[] A, int p, int r) {
		if (p < r) {
			int q = partition(A, p, r);
			quickSort(A, p, q - 1);
			quickSort(A, q + 1, r);
		}
	}

	int partition(int[] A, int p, int r) {
		int pivot = A[r];
		int i = p - 1;
		int temp = 0;

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
