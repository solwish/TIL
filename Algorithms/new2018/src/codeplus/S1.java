package codeplus;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.StringTokenizer;
import java.util.Vector;

public class S1 {
	static Vector<String> V = new Vector<>();
	static Vector<Integer> Vout = new Vector<>();

	public static void main(String[] args) throws Exception {

		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		boolean flag = true;
		while (flag) {
			String input = br.readLine();
			if (input.equals("END")) {
				flag = false;
				break;
			}

			V.add(input.substring(1, input.length() - 1));
		}
		StringTokenizer st;
		int A[] = new int[V.size()];
		String ss = "";
		for (int i = 0; i < V.size(); i++) {
			st = new StringTokenizer(V.get(i));
			while (st.hasMoreTokens()) {
				String s = st.nextToken();
				if (s.substring(0, 1).equals("2") || s.substring(0, 1).equals("1")) {
					int tmp = Integer.parseInt(s.substring(0, 1));

					if (tmp == 1) {
						String t1 = "20";
						String t2 = s.substring(0, 2);
						String t3;
						String t4;
						if (Integer.parseInt(s.substring(3, 4)) == 0) {
							t3 = s.substring(3, 5);
							t4 = s.substring(6, 8);
						} else {
							t3 = "0" + s.substring(3, 4);
							t4 = "0" + s.substring(5, 6);
						}
						ss = t1 + t2 + t3 + t4;
					}
					if (tmp == 2) {
						String t1 = s.substring(0, 4);
						String t2;
						String t3;
						if (Integer.parseInt(s.substring(5, 6)) == 0) {
							t2 = s.substring(5, 7);
							t3 = s.substring(7, 9);
						} else {
							t2 = "0" + s.substring(5, 6);
							t3 = "0" + s.substring(7, 8);
						}
						ss = t1 + t2 + t3;
					}
					A[i] = Integer.parseInt(ss);
				}
			}
		}
		int AA[] = new int[A.length];
		for (int i = 0; i < A.length; i++) {
			int max = 0;
			int max_index = -1;
			for (int j = 0; j < A.length; j++) {
				if (max < A[i]) {
					max = A[i];
					max_index = i;
				}
				AA[i] = max_index;
			}
		}
		for (int i = V.size() - 1; i >= 0; i--)
			System.out.println("\"" + V.get(AA[i]) + "\"");
	}

}
