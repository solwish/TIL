package sam;

import java.io.BufferedReader;
import java.io.InputStreamReader;

class Palindrome { // �Ӹ���� �ݺ�
	boolean check(char input[], int k) {
		int pal = 0; // �Ǻ� ����
		int j = 0;
		int limit;
		for (int i = 0; i < j; i++) {
			if (input[i] != '\0')
				j++;
		}
		limit = j;
		for (int i = 0; i < j; i++, j--) {
			if (input[i + k] == input[j - 1 + k]) // �¿��Ī�� �Ǹ�
				pal++;
		}
		if (pal == (limit + 1) / 2)
			return true; // ȸ��
		else
			return false; // ȸ���� �ƴ�
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
			System.out.print("�Է��� ���ڿ� : " + s + "\n");
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
						System.out.print(" : ȸ��" + "\n" + output);
						count++;
					}
				}
			}
			System.out.print("�� ȸ�� ���� : " + count + "\n\n");
		}
	}
}
