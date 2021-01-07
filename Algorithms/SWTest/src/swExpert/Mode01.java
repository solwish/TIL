package swExpert;

import java.util.HashMap;
import java.util.Scanner;

public class Mode01 {
	static HashMap<Integer, Integer> cnt = new HashMap<Integer, Integer>();

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int T = sc.nextInt();
		
		for (int t_case = 0; t_case < T; t_case++) {
			int tt = sc.nextInt();
			int temp = -1;

			cnt.clear();
			for (int i = 0; i <= 100; i++) {
				cnt.put(i, 0);
			}

			for (int i = 0; i < 1000; i++) {
				temp = sc.nextInt();
				cnt.put(temp, cnt.get(temp) + 1);
			}

			int maxCnt = 0;
			int maxScore = 0;
			for (int i = 0; i <= 100; i++)
				if (maxCnt <= cnt.get(i)) {
					maxCnt = cnt.get(i);
					maxScore = i;
				}

			System.out.println("#" + tt + " " + maxScore);
		}
	}

}
