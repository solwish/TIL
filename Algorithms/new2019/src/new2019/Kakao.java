package new2019;

public class Kakao {

	public static void main(String[] args) {
		// int[] answer = {};
		int[] tt = new int[11];
		for (int i = 0; i < 3; i++) {
			for (int j = 0; j < 2; j++) {
				tt[v[i][j]]++;
			}
		}

		int a = 0;
		int b = 0, c = 0;
		for (int i = 0; i < tt.length; i++)
			if (tt[i] == 1)
				if (c == 0) {
					a = tt[i];
					c = 1;
				} else {
					b = tt[i];
				}
		int answer[] = { a,b };
		answer[0] = a;
		answer[1] = b;

	}

}
