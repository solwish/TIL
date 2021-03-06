package codeground;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Ex01 {
	static int Answer;

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);

		int T = sc.nextInt();
		for (int test_case = 0; test_case < T; test_case++) {
			Answer = 0;
			int n = sc.nextInt();
			List<Integer> array = new ArrayList<Integer>();
			List<Integer> count = new ArrayList<Integer>();

			for (int i = 0; i < n; i++) {
				array.add(sc.nextInt());
				count.add(1);
			}

			for (int i = 0; i < array.size(); i++) {
				if (count.get(i) % 2 == 1) {
					Answer = Answer ^ array.get(i);
				}
			}
			System.out.println("Case #" + (test_case + 1));
			System.out.println(Answer);
		}
	}
}
