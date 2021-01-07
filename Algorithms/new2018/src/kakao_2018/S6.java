package kakao_2018;

import java.util.HashMap;
import java.util.StringTokenizer;

public class S6 {

	public static void main(String[] args) {
		String word = "Muzi";
		String[] sss = {
				"<html lang=\"ko\" xml:lang=\"ko\" xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n  <meta charset=\"utf-8\">\n  <meta property=\"og:url\" content=\"https://careers.kakao.com/interview/list\"/>\n</head>  \n<body>\n<a href=\"https://programmers.co.kr/learn/courses/4673\"></a>#!MuziMuzi!)jayg07con&&\n\n</body>\n</html>",
				"<html lang=\"ko\" xml:lang=\"ko\" xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n  <meta charset=\"utf-8\">\n  <meta property=\"og:url\" content=\"https://www.kakaocorp.com\"/>\n</head>  \n<body>\ncon%\tmuzI92apeach&2<a href=\"https://hashcode.co.kr/tos\"></a>\n\n\t^\n</body>\n</html>" };
		solution(word, sss);
	}

	static public int solution(String word, String[] pages) {
		HashMap<Integer, int[]> map = new HashMap<>();
		String URL[] = new String[pages.length];
		int answer = 0;
		for (int i = 0; i < pages.length; i++)
			pages[i] = pages[i].toLowerCase();
		word = word.toLowerCase();

		StringTokenizer st;
		for (int i = 0; i < pages.length; i++) {
			st = new StringTokenizer(pages[i]);

			String tmp;
			String url;
			while (true) {
				tmp = st.nextToken();
				if (tmp.contains("content=")) {
					url = tmp.substring(9, tmp.length() - 3);
					URL[i] = url;
					break;
				}
			}
			int[] tmpa = { 0, 0, 0 };
			map.put(i, tmpa);
		}
		for (int i = 0; i < pages.length; i++) {
			st = new StringTokenizer(pages[i]);
			String tmp;
			String link;
			while (st.hasMoreTokens()) {
				tmp = st.nextToken();
				if (tmp.contains("href=")) {
					int itmp = tmp.indexOf(">");
					link = tmp.substring(7, itmp);
					int[] aa = { map.get(i)[0], map.get(i)[1] + 1, map.get(i)[2] };
					map.put(i, aa);
					break;
				}
			}
		}
		return answer;
	}
}
