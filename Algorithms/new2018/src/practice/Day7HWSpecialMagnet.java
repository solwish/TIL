package practice;

import java.util.Scanner;
import java.util.Vector;

public class Day7HWSpecialMagnet {
	static Vector<Integer> V1 = new Vector<>();
	static Vector<Integer> V2 = new Vector<>();
	static Vector<Integer> V3 = new Vector<>();
	static Vector<Integer> V4 = new Vector<>();
	static int score;
	static boolean[] visit = new boolean[5];

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int T = sc.nextInt();

		for (int t_case = 1; t_case <= T; t_case++) {
			int K = sc.nextInt();
			score = 0;
			V1.clear();
			V2.clear();
			V3.clear();
			V4.clear();
			for (int i = 0; i < 8; i++)
				V1.add(sc.nextInt());
			for (int i = 0; i < 8; i++)
				V2.add(sc.nextInt());
			for (int i = 0; i < 8; i++)
				V3.add(sc.nextInt());
			for (int i = 0; i < 8; i++)
				V4.add(sc.nextInt());

			int flag;
			int tmp;
			for (int i = 0; i < K; i++) {
				flag = sc.nextInt();
				tmp = sc.nextInt();
				for (int j = 1; j <= 4; j++)
					visit[j] = false;
				visit[flag] = true;
				if (tmp == 1)
					turnRight(flag, true);
				else if (tmp == -1)
					turnLeft(flag, true);
			}
			if (V1.get(0) == 1)
				score += 1;
			if (V2.get(0) == 1)
				score += 2;
			if (V3.get(0) == 1)
				score += 4;
			if (V4.get(0) == 1)
				score += 8;
			System.out.println("#" + t_case + " " + score);
		}
	}

	static void turnRight(int flag, boolean isStart) {
		Vector<Integer> V = null;
		switch (flag) {
		case 1:
			V = V1;
			break;
		case 2:
			V = V2;
			break;
		case 3:
			V = V3;
			break;
		case 4:
			V = V4;
			break;
		default:
			break;
		}
		V.add(0, V.get(V.size() - 1));
		V.remove(V.size() - 1);

		// if (V.get(0) == 1)
		// score += Math.pow(2, flag - 1);

		Vector<Integer> VV = null;
		if (isStart) {
			if (flag == 1) {
				VV = V2;
				if (V.get(3) != VV.get(6)) {
					visit[2] = true;
					turnLeft(2, false);
				}
			} else if (flag == 4) {
				VV = V3;
				if (V.get(7) != VV.get(2)) {
					visit[3] = true;
					turnLeft(3, false);
				}
			} else if (flag == 3) {
				VV = V4;
				if (V.get(3) != VV.get(6)) {
					visit[4] = true;
					turnLeft(4, false);
				}
				VV = V2;
				if (V.get(7) != VV.get(2)) {
					visit[2] = true;
					turnLeft(2, false);
				}
			} else if (flag == 2) {
				VV = V3;
				if (V.get(3) != VV.get(6)) {
					visit[3] = true;
					turnLeft(3, false);
				}
				VV = V1;
				if (V.get(7) != VV.get(2)) {
					visit[1] = true;
					turnLeft(1, false);
				}
			}
		} else if (flag != 1 && flag != 4) {
			if (flag == 2)
				VV = V3;
			else if (flag == 3)
				VV = V4;
			if (V.get(3) != VV.get(6))
				if (!visit[flag + 1]) {
					visit[flag + 1] = true;
					turnLeft(flag + 1, false);
				}
			if (flag == 2)
				VV = V1;
			else if (flag == 3)
				VV = V2;
			if (V.get(7) != VV.get(2))
				if (!visit[flag - 1]) {
					visit[flag - 1] = true;
					turnLeft(flag - 1, false);
				}
		}

	}

	private static void turnLeft(int flag, boolean isStart) {
		Vector<Integer> V = null;
		switch (flag) {
		case 1:
			V = V1;
			break;
		case 2:
			V = V2;
			break;
		case 3:
			V = V3;
			break;
		case 4:
			V = V4;
			break;
		default:
			break;
		}
		V.add(V.get(0));
		V.remove(0);

		// if (V.get(0) == 1)
		// score += Math.pow(2, flag - 1);

		Vector<Integer> VV = null;
		if (isStart) {
			if (flag == 1) {
				VV = V2;
				if (V.get(1) != VV.get(6)) {
					visit[2] = true;
					turnRight(2, false);
				}
			} else if (flag == 4) {
				VV = V3;
				if (V.get(5) != VV.get(2)) {
					visit[3] = true;
					turnRight(3, false);
				}
			} else if (flag == 3) {
				VV = V4;
				if (V.get(1) != VV.get(6)) {
					visit[4] = true;
					turnRight(4, false);
				}
				VV = V2;
				if (V.get(5) != VV.get(2)) {
					visit[2] = true;
					turnRight(2, false);
				}
			} else if (flag == 2) {
				VV = V3;
				if (V.get(1) != VV.get(6)) {
					visit[3] = true;
					turnRight(3, false);
				}
				VV = V1;
				if (V.get(5) != VV.get(2)) {
					visit[1] = true;
					turnRight(1, false);
				}
			}
		} else if (flag != 1 && flag != 4) {
			if (flag == 2)
				VV = V3;
			else if (flag == 3)
				VV = V4;
			if (V.get(1) != VV.get(6))
				if (!visit[flag + 1]) {
					visit[flag + 1] = true;
					turnRight(flag + 1, false);
				}
			if (flag == 2)
				VV = V1;
			else if (flag == 3)
				VV = V2;
			if (V.get(5) != VV.get(2))
				if (!visit[flag - 1]) {
					visit[flag - 1] = true;
					turnRight(flag - 1, false);
				}
		}
	}
}
