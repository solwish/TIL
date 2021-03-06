package swExpert;

import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class Mode {

	Map<Integer, Integer> map = new HashMap<Integer, Integer>();

	void clearMap() {
		map.clear();
		for (int i = 0; i <= 100; i++) {
			map.put(i, 0);
		}
	}

	public static void main(String[] args) {
		long start = System.currentTimeMillis();

		Scanner sc = new Scanner(System.in);
		int T = 10;

		for (int test_case = 0; test_case < T; test_case++) {
			int score;
			int maxCnt = -1;
			int max = -1;
			int num = sc.nextInt();
			Mode mode = new Mode();
			mode.clearMap();

			for (int i = 0; i < 1000; i++) {
				score = sc.nextInt();
				mode.map.put(score, mode.map.get(score) + 1);
			}

			for (int i = 0; i <= 100; i++) {
				if (maxCnt <= mode.map.get(i)) {
					maxCnt = mode.map.get(i);
					max = i;
				}
			}

			System.out.println("#" + (test_case + 1) + " " + max);
		}
		
		long end = System.currentTimeMillis();
		System.out.println("���� �ð� : " + (end - start) / 1000.0);
	}

}
