package N0929;

import java.util.Scanner;
import java.util.StringTokenizer;
import java.util.Vector;

public class P1 {

	public static void main(String[] args) throws Exception {
		Scanner sc = new Scanner(System.in);
		StringTokenizer st = new StringTokenizer(sc.nextLine());
		Vector<Integer> V = new Vector<>();
		boolean flag = true;
		while (st.hasMoreTokens()) {
			int n = Integer.parseInt(st.nextToken());
			if (V.size() < 3)
				V.add(n);
			else if (V.contains(n)) {
				V.remove(V.indexOf(n));
				V.add(n);
			} else {
				flag = false;
				System.out.println(V.get(0));
				V.remove(0);
				V.add(n);
			}
		}
		if (flag)
			System.out.println(0);
	}

}
