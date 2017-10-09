import java.util.LinkedList;
import java.util.Queue;
import java.util.Scanner;

public class BFS {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		Queue<Integer> Q = new LinkedList<Integer>();
		int[][] A = new int[8][8];
		// int[] check = new int[8];
		int[] d = new int[8]; // s�κ��� v������ �ִ� ����� ���� (������ ����)
		int[] pie = new int[8]; // s�κ��� v������ �ִܰ�λ󿡼� v�� ���� ���(predecessor)
		
		// �Է°�. ���ظ� ���� ������ �׷��� �ϵ� �ڵ�.
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

		int s = 1 - 1; // ������ 1�� ���

		Q.offer(s);
		d[s] = 0; // ���������� ������������ �Ÿ� 0�� ���Ƿ� �������� 0���� ����.
		pie[s] = -1; // ������ �� ���� ����. -1�� ���� �� �ǹ�
		while (!(Q.isEmpty())) {
			int u = Q.poll();
			for (int v = 0; v < 8; v++) {
				if (A[u][v] == 1) {
					if (d[v] == -1) { // unvisited �����϶�
						d[v] = d[u] + 1; // d[v]�� -1�� �ʱ�ȭ �صΰ�, -1�̸� unvisited, �ƴϸ� visit���� �Ǵ�.
						pie[v] = u;
						Q.offer(v);
					}
				}
			}
		}
		int v = 6 - 1; // ����. ���� 6

		// �ִ� ��� ����ϱ�
		printPath(pie, s, v);
	}

	private static void printPath(int[] pie, int s, int v) {
		if (v == s) {
			System.out.println(s + 1); //������ ��� ���
		} else if (pie[v] == -1) {
			System.out.println("no way from s to v exists"); //�������� ���� ��ΰ� ���� ���
		} else {
			printPath(pie, s, pie[v]);  //���� ��θ� ��������� predecessor�� ���.
			System.out.println(v + 1);
		}
	}
}