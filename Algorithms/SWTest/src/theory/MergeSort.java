package theory;

public class MergeSort {

	public static void main(String[] args) {

		MergeSort mg = new MergeSort();

		int A[] = { 82, 6, 8, 74, 21, 26, 23, 87, 34, 95 };

		mg.mergeSort(A, 0, A.length - 1);

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

	void merge(int data[], int p, int q, int r) {
		int i = p, j = q + 1, k = p;
		int[] tmp = new int[data.length];

		while (i <= q && j <= r) {
			if (data[i] <= data[j])
				tmp[k++] = data[i++];
			else
				tmp[k++] = data[j++];
		}

		while (i <= q)
			tmp[k++] = data[i++];
		while (j <= r)
			tmp[k++] = data[j++];
		for (i = p; i <= r; i++)
			data[i] = tmp[i];
	}
}
