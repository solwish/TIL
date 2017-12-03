package swExpert;

import java.util.Scanner;

public class GNS {
	static int[] A = new int[10];

	public static void main(String[] args) throws Exception {
		Scanner sc = new Scanner(System.in);
		int T = sc.nextInt();
		String[] output = { "ZRO", "ONE", "TWO", "THR", "FOR", "FIV", "SIX", "SVN", "EGT", "NIN" };

		for (int tc = 1; tc <= T; tc++) {
			sc.next();
			int size = sc.nextInt();
			for (int i = 0; i < 10; i++)
				A[i] = 0;

			getInput(sc, size);

			System.out.println("#" + tc);
			for (int i = 0; i < 10; i++)
				for (int j = 0; j < A[i]; j++)
					System.out.print(output[i] + " ");
			System.out.println();
		}
	}

	private static void getInput(Scanner sc, int size) {
		for (int i = 0; i < size; i++) {
			switch (sc.next()) {
			case "ZRO":
				A[0]++;
				break;
			case "ONE":
				A[1]++;
				break;
			case "TWO":
				A[2]++;
				break;
			case "THR":
				A[3]++;
				break;
			case "FOR":
				A[4]++;
				break;
			case "FIV":
				A[5]++;
				break;
			case "SIX":
				A[6]++;
				break;
			case "SVN":
				A[7]++;
				break;
			case "EGT":
				A[8]++;
				break;
			case "NIN":
				A[9]++;
				break;
			default:
				break;
			}
		}
	}

}
