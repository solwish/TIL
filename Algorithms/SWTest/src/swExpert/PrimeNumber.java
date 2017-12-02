package swExpert;

public class PrimeNumber {

	public static void main(String[] args) {
		int num = (int) Math.pow(10, 6);
		int[] list = new int[num];

		for (int i = 2; i < num; i++)
			list[i] = i;

		for (int i = 2; i < num; i++) {
			if (list[i] == 0)
				continue;
			for (int j = i + i; j < num; j += i)
				list[j] = 0;
		}

		for (int i = 2; i < num; i++)
			if (list[i] != 0)
				System.out.println(list[i] + " ");

	}

}
