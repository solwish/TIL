package swExpert;

public class Subset {
	static char data[] = { 'a', 'b', 'c', 'd', 'e', 'f' };
	static int n = data.length;
	static boolean[] include = new boolean[n];
	static int cnt;

	static void powerSet(int k) {
		if (k == n) {
			if (k == n) {
				for (int i = 0; i < n; i++)
					if (include[i])
						System.out.print(data[i] + " ");
				System.out.println();
//				cnt++;
				return;
			}
		}
		include[k] = false;
		powerSet(k + 1);
		include[k] = true;
		powerSet(k + 1);
	}

	public static void main(String[] args) {
		cnt = 0;
		powerSet(0);
		System.out.println(cnt);
	}

}
