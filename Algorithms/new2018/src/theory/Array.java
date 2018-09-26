package theory;

public class Array {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		int[][] test1 = { { 1, 1 }, { 1, 1 } };

		te(test1);

		System.out.println(test1[0][0]);

	}

	private static void te(int[][] test1) {
		test1[0][0] = 0;
		System.out.println(test1[0][0]);
	}

}
