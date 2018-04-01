package swExpert;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.HashMap;

public class CardCounting {

	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		int T = Integer.parseInt(br.readLine());
		for (int t_case = 1; t_case <= T; t_case++) {
			String s = br.readLine();
			String s1 = "";
			HashMap<String, Boolean> cards = new HashMap<>();
			for (int j = 1; j <= 4; j++) {
				char flag;
				if (j == 1)
					flag = 'S';
				else if (j == 2)
					flag = 'D';
				else if (j == 3)
					flag = 'H';
				else
					flag = 'C';
				for (int i = 1; i <= 13; i++) {
					String tmp;
					if (i < 10)
						tmp = flag + "0" + String.valueOf(i);
					else
						tmp = flag + String.valueOf(i);
					cards.put(tmp, false);
				}
			}
			boolean isError = false;
			int ansS = 0;
			int ansD = 0;
			int ansH = 0;
			int ansC = 0;

			for (int i = 0; i < s.length(); i++) {
				s1 += s.charAt(i);
				if ((i + 1) % 3 == 0) {
					if (cards.get(s1) == false)
						cards.put(s1, true);
					else {
						isError = true;
						break;
					}
					s1 = "";
				}
			}
			if (isError)
				System.out.println("#" + t_case + " ERROR");
			else {
				for (int j = 1; j <= 4; j++) {
					char flag;
					if (j == 1)
						flag = 'S';
					else if (j == 2)
						flag = 'D';
					else if (j == 3)
						flag = 'H';
					else
						flag = 'C';
					for (int i = 1; i <= 13; i++) {
						String tmp;
						if (i < 10)
							tmp = flag + "0" + String.valueOf(i);
						else
							tmp = flag + String.valueOf(i);
						if (cards.get(tmp) == false)
							if (flag == 'S')
								ansS++;
							else if (flag == 'D')
								ansD++;
							else if (flag == 'H')
								ansH++;
							else
								ansC++;
					}
				}
				System.out.println("#" + t_case + " " + ansS + " " + ansD + " " + ansH + " " + ansC);
			}
		}
	}

}
