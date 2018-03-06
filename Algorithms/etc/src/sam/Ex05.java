package sam;

import java.io.BufferedReader;
import java.io.InputStreamReader;

class Palindrome { // 팰린드롬 반별
	boolean check(char input[], int k) {
		int pal = 0; // 판별 변수
		int j = 0;
		int limit;
		for (int i = 0; i < j; i++) {
			if (input[i] != '\0')
				j++;
		}
		limit = j;
		for (int i = 0; i < j; i++, j--) {
			if (input[i + k] == input[j - 1 + k]) // 좌우대칭이 되면
				pal++;
		}
		if (pal == (limit + 1) / 2)
			return true; // 회문
		else
			return false; // 회문이 아님
	}
}

public class Ex05 {
	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		int T = Integer.parseInt(br.readLine());
		int strLen;

		for (int t_case = 1; t_case <= T; t_case++) {
			String s = br.readLine();
			Palindrome palindrome = new Palindrome();
			System.out.print("#" + t_case + "\n");
			System.out.print("입력한 문자열 : " + s + "\n");
			strLen = s.length();
			System.out.print("#" + t_case + " ");
			int count = 0;
			for (int k = 3; k <= strLen; k++) {
				for (int j = 0; j < strLen - k + 1; j++) {
					char[] temp = new char[s.length() + 1];
					for (int i = j; i < k + j; i++)
						temp[i] = s.charAt(i);
					temp[k + j] = '\0';
					if (palindrome.check(temp, j)) {
						char output[] = new char[k];
						for (int i = 0; i < k; i++)
							output[i] = temp[j + i];
						System.out.print(" : 회문" + "\n" + output);
						count++;
					}
				}
			}
			System.out.print("총 회문 개수 : " + count + "\n\n");
		}
	}
}
