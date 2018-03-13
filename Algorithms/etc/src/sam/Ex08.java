package sam;

import java.io.BufferedReader;
import java.io.InputStreamReader;

public class Ex08 {
	static int ans;
	static String tmp;
	static int num;
	static boolean flag;
	static char cal;

	static void caculator(char a, boolean b) {
		if (b) {
			if (a == '+' || a == '-') {
				if (!flag) {
					flag = true;
					ans = Integer.parseInt(tmp);
					tmp = "";
				} else {
					num = Integer.parseInt(tmp);
					if (cal == '+')
						ans += num;
					else
						ans -= num;
					tmp = "";
				}
			} else {
				tmp += a;
			}
			if (a == '+' || a == '-') {
				cal = a;
			}
		} else {
			tmp += a;
			num = Integer.parseInt(tmp);
			if (cal == '+')
				ans += num;
			else
				ans -= num;
		}
	}

	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		String s = br.readLine();
		ans = 0;
		flag = false;
		tmp = "";
		for (int i = 0; i < s.length() - 1; i++)
			caculator(s.charAt(i), true);
		caculator(s.charAt(s.length() - 1), false);
		System.out.println(ans);
	}

}
