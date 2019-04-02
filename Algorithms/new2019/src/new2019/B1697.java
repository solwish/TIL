package new2019;

import java.util.LinkedList;
import java.util.Queue;
import java.util.Scanner;

public class B1697 {
	static int N, K;
	static boolean[] visit = new boolean[100001];;

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		N = sc.nextInt();
		K = sc.nextInt();

		if (N > K)
			System.out.println(N - K);
		else
			System.out.println(bfs());
	}

	private static int bfs() {
		Queue<t_data> Q = new LinkedList<>();
		Q.offer(new t_data(0, N));

		while (!Q.isEmpty()) {
			t_data tl = Q.poll();

			if (tl.location == K)
				return tl.time;

			int[] next_location = { tl.location + 1, tl.location - 1, tl.location * 2 };
			for (int i = 0; i < 3; i++)
				if (0 <= next_location[i] && next_location[i] <= 100000)
					if (!visit[next_location[i]]) {
						Q.offer(new t_data(tl.time + 1, next_location[i]));
						visit[next_location[i]] = true;
					}

		}
		return 0;
	}

}

class t_data {
	int time;
	int location;

	public t_data(int time, int location) {
		this.time = time;
		this.location = location;
	}

}