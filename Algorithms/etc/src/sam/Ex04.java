package sam;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.Stack;

public class Ex04 {

	public static void main(String[] args) throws Exception {
		Stack<Character> stack = new Stack<>();
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		int T = Integer.valueOf(br.readLine());

		for (int t_case = 1; t_case <= T; t_case++) {
			System.out.print("#" + t_case + " ");
			String s = br.readLine();

			int idx = 0;
			String ans = new String();
			while (s.length() >= idx + 1) {
				if (s.charAt(idx) == '(') {
					stack.push(s.charAt(idx));
					idx++;
				} else if (s.charAt(idx) == ')') {
					while (stack.peek() != '(') {
						ans += stack.pop();
						ans += ' ';
					}
					stack.pop();
					idx++;
				} else if (s.charAt(idx) >= '0' && s.charAt(idx) <= '9') {
					do {
						ans += s.charAt(idx);
						idx++;
						if (s.length() == idx)
							break;
					} while (s.charAt(idx) >= '0' && s.charAt(idx) <= '9');
					ans += ' ';
					while (!stack.empty()) {
						idx += stack.pop();
						ans += ' ';
					}
				}
			}
			System.out.println(ans);
		}
	}

}
