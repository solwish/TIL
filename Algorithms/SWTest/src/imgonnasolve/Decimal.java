package imgonnasolve;

import java.util.ArrayList;

public class Decimal {

	public static void main(String[] args) {
		ArrayList<Integer> list = new ArrayList<Integer>();
		int num = (int) Math.pow(10, 6);
		list.add(2);

		for (int i = 2; i <= num; i++) {
			for (int j = 0; j < list.size(); j++) {
				if (i % list.get(j) == 0)
					break;

				if (j + 1 == list.size())
					list.add(i);

			}
		}
		for (int i = 0; i < list.size(); i++)
			System.out.print(list.get(i) + " ");
	}

}
