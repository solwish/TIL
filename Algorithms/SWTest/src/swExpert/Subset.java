package swExpert;

public class Subset {
	static char data[] = { 'a', 'b', 'c', 'd', 'e', 'f' };
	static int n = data.length;
	static boolean[] include = new boolean[n];

	static void powerSet(int k) {
		if (k == n) {
			if (k == n) {
				for (int i = 0; i < n; i++)
					if (include[i])
						System.out.print(data[i] + " ");
				System.out.println();
				return;
			}
		}
		include[k] = false;
		powerSet(k + 1);
		include[k] = true;
		powerSet(k + 1);
	}

	public static void main(String[] args) {
		powerSet(0);
	}

}
