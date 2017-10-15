import java.util.Scanner;

public class DFS {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int[][] A = new int[8][8];

		int[] visited = new int[8];
		// int[] d = new int[8]; // s로부터 v까지의 최단 경로의 길이 (에지의 개수)
		// int[] pie = new int[8]; // s로부터 v까지의 최단경로상에서 v의 직전 노드(predecessor)

		// 입력값. 이해를 위해 예제의 그래프 하드 코딩.
		// 10
		// 1 2 1 3 3 7 3 8 7 8 3 5 2 4 2 5 4 5 5 6
		int z = sc.nextInt();
		for (int i = 0; i < z; i++) {
			int n = sc.nextInt() - 1;
			int m = sc.nextInt() - 1;
			A[n][m] = 1;
			A[m][n] = 1;
		}
		int s = 1 - 1; // 시작점 1번 노드

		dfs(visited, s, A);

	}

	static void dfs(int[] visited, int v, int[][] A) {
		visited[v] = 1;
		System.out.println(v + 1);
		for (int u = 0; u < 8; u++) {
			if (A[v][u] == 1) {
				if (visited[u] == 0) {
					dfs(visited, u, A);
				}
			}
		}
	}
}
