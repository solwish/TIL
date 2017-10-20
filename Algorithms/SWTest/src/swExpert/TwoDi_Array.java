package swExpert;

import java.util.HashMap;
import java.util.Scanner;

class TwodiD {
	int x, y;

	public TwodiD(int x, int y) {
		this.x = x;
		this.y = y;
	}

}

public class TwoDi_Array {

	public static void main(String[] args) {
		int tempx, tempy;
		HashMap<Integer, TwodiD> map = new HashMap<>();
		int endp = 1;
		tempx = 1;
		tempy = 1;
		for (int i = 1; i <= 100000; i++) {
			map.put(i, new TwodiD(tempx, tempy));
			if (tempx == endp) {
				endp++;
				tempx = 1;
				tempy = endp;
			} else {
				tempx++;
				tempy--;
			}
		}
		int T, p, q;
		Scanner sc = new Scanner(System.in);
		T = sc.nextInt();

		for (int t_case = 1; t_case <= T; t_case++) {
			p = sc.nextInt();
			q = sc.nextInt();
			int x, y;
			x = map.get(p).x + map.get(q).x;
			y = map.get(p).y + map.get(q).y;
			for (int i = p + q; i < 100000; i++) {
				if (map.get(i).x == x && map.get(i).y == y) {
					System.out.println("#" + t_case + " " + i);
					break;
				}
			}
		}

	}

}
