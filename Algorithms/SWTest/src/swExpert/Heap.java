package swExpert;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.Comparator;
import java.util.PriorityQueue;
import java.util.StringTokenizer;

public class Heap {

	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		int T = Integer.parseInt(br.readLine());

		for (int t_case = 1; t_case <= T; t_case++) {
			System.out.print("#" + t_case + " ");
			int N = Integer.parseInt(br.readLine());
			PriorityQueue<Integer> Q = new PriorityQueue<>(new Comparator<Integer>() {
				public int compare(Integer w1, Integer w2) {
					return w2.compareTo(w1); // descendant order
				}
			});
			StringTokenizer s;

			for (int i = 0; i < N; i++) {
				s = new StringTokenizer(br.readLine());
				int control = Integer.parseInt(s.nextToken());

				if (control == 1)
					Q.add(Integer.parseInt(s.nextToken()));
				else if (Q.isEmpty())
					System.out.print(-1 + " ");
				else
					System.out.print(Q.poll() + " ");
			}
			System.out.println();
		}
	}

}