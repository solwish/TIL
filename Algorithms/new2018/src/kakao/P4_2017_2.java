package kakao;

import java.util.Scanner;

public class P4_2017_2 {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		for (int i = 0; i < 7; i++) {
			String s = sc.nextLine();
			System.out.println(solution(s));
		}
	}

	static public int solution(String dartResult) {
		int answer = 0;
		int score[] = new int[3];
		int cnt = 0;
		for (int i = 0; i < dartResult.length(); i++) {
			char c = dartResult.charAt(i);
			int n;
			if (c >= '0' && c <= '9') {
				if (c == '1' && dartResult.charAt(i + 1) == '0') {
					n = 10;
					i++;
				} else
					n = c - '0';
				score[cnt] = n;
				cnt++;
			} else if (c == 'S' || c == 'D' || c == 'T') {
				if (c == 'D') {
					score[cnt - 1] = (int) Math.pow(score[cnt - 1], 2);
				} else if (c == 'T')
					score[cnt - 1] = (int) Math.pow(score[cnt - 1], 3);
			} else if (c == '*' || c == '#') {
				if (c == '*') {
					if (cnt > 1) {
						score[cnt - 2] *= 2;
						score[cnt - 1] *= 2;
					} else if (cnt == 1)
						score[cnt - 1] *= 2;
				} else if (c == '#')
					score[cnt - 1] *= -1;
			}
		}
		for (int i = 0; i < 3; i++) {
			answer += score[i];
		}
		return answer;
	}
}
