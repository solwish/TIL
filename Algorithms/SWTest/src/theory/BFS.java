package theory;
import java.util.LinkedList;
import java.util.Queue;
import java.util.Scanner;

public class BFS {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		Queue<Integer> Q = new LinkedList<Integer>();
		int[][] A = new int[8][8];
		// int[] check = new int[8];
		int[] d = new int[8]; // s로부터 v까지의 최단 경로의 길이 (에지의 개수)
		int[] pie = new int[8]; // s로부터 v까지의 최단경로상에서 v의 직전 노드(predecessor)
		
		// 입력값. 이해를 위해 예제의 그래프 하드 코딩.
		//10
		//1 2 1 3 3 7 3 8 7 8 3 5 2 4 2 5 4 5 5 6
		
		int z = sc.nextInt();
		for (int i = 0; i < z; i++) {
			int n = sc.nextInt() - 1;
			int m = sc.nextInt() - 1;
			A[n][m] = 1;
			A[m][n] = 1;
		}

		for (int i = 0; i < 8; i++) {
			d[i] = -1;
			pie[i] = -1;
		}

		int s = 1 - 1; // 시작점 1번 노드

		Q.offer(s);
		d[s] = 0; // 시작점에서 시작점까지의 거리 0임 임의로 시작점을 0으로 잡음.
		pie[s] = -1; // 시작전 전 노드는 없음. -1로 없는 걸 의미
		while (!(Q.isEmpty())) {
			int u = Q.poll();
			for (int v = 0; v < 8; v++) {
				if (A[u][v] == 1) {
					if (d[v] == -1) { // unvisited 상태일때
						d[v] = d[u] + 1; // d[v]를 -1로 초기화 해두고, -1이면 unvisited, 아니면 visit으로 판단.
						pie[v] = u;
						Q.offer(v);
					}
				}
			}
		}
		int v = 6 - 1; // 끝점. 노드상 6

		// 최단 경로 출력하기
		printPath(pie, s, v);
	}

	private static void printPath(int[] pie, int s, int v) {
		if (v == s) {
			System.out.println(s + 1); //시작점 노드 출력
		} else if (pie[v] == -1) {
			System.out.println("no way from s to v exists"); //끝점까지 가는 경로가 없을 경우
		} else {
			printPath(pie, s, pie[v]);  //가는 경로를 재귀적으로 predecessor을 출력.
			System.out.println(v + 1);
		}
	}
}
