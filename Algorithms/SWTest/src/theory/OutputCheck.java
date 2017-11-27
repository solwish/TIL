package theory;

import java.io.BufferedReader;
import java.io.InputStreamReader;

public class OutputCheck {

	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		String[] s1 = new String[1000];
		String[] s2 = new String[1000];

		for (int i = 0; i < 1000; i++)
			s1[i] = br.readLine();
		for (int i = 0; i < 1000; i++)
			s2[i] = br.readLine();
		for (int i = 0; i < 1000; i++)
			if (!s1[i].equals(s2[i]))
				System.out.println(i + 1);
	}
}
