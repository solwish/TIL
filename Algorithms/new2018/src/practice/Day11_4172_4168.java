package practice;

import java.util.Scanner;
import java.util.Vector;

public class Day11_4172_4168 {
	static boolean visit[];
	static int max, N, money, clothes[][], cnt;
	static Vector<Integer> Vc = new Vector<>();
	static Vector<Integer> Va = new Vector<>();

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int T = sc.nextInt();

		for (int t_case = 1; t_case <= T; t_case++) {
			money = sc.nextInt();
			N = sc.nextInt();
			Vc.clear();
			Va.clear();
			visit = new boolean[N];
			clothes = new int[2][N];
			max = 0;
			for (int i = 0; i < N; i++) {
				clothes[0][i] = sc.nextInt();// µ·
				clothes[1][i] = sc.nextInt();// ¸¸Á·µµ
			}

			for (int i = 0; i < N; i++) {
				cnt = i + 1;
				dfs(0);
			}
			System.out.print("#" + t_case + " ");
			for (int i = 0; i < Va.size(); i++)
				System.out.print(Va.get(i) + " ");
			System.out.println(max);
		}

	}

	private static void dfs(int index) {
		if (Vc.size() == cnt) {
			getMax();
			return;
		}
		for (int i = index; i < N; i++)
			if (!visit[i] && money - clothes[0][i] >= 0) {
				visit[i] = true;
				Vc.add(i);
				money -= clothes[0][i];
				dfs(i + 1);
				money += clothes[0][i];
				Vc.remove(Vc.size() - 1);
				visit[i] = false;
			}
	}

	private static void getMax() {
		int l_satisfaction = 0;
		for (int i = 0; i < Vc.size(); i++) {
			l_satisfaction += clothes[1][Vc.get(i)];
		}
		if (max < l_satisfaction) {
			max = l_satisfaction;
			Va.clear();
			for (int i = 0; i < Vc.size(); i++) {
				Va.add(Vc.get(i));
			}
		}
	}

}
