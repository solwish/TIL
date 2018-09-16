package kakao_2018;

import java.util.HashMap;
import java.util.StringTokenizer;

public class S1 {

	public static void main(String[] args) {
		String[] record = { "Enter uid1234 Muzi", "Enter uid4567 Prodo", "Leave uid1234", "Enter uid1234 Prodo",
				"Change uid4567 Ryan" };

		String[] ans = solution(record);
		for (int i = 0; i < ans.length; i++)
			System.out.println(ans[i]);
	}

	static public String[] solution(String[] record) {
		String[] bot = new String[record.length + 1];
		String[] idnum = new String[record.length + 1];
		HashMap<String, String> map = new HashMap<>();
		StringTokenizer st;

		int cnt = 0;
		for (int i = 0; i < record.length; i++) {
			st = new StringTokenizer(record[i]);
			String command = st.nextToken();
			String uid = st.nextToken();
			if (command.equals("Enter")) {
				if (!map.containsKey(uid)) {
					map.put(uid, st.nextToken());
				} else {
					map.put(uid, st.nextToken());
				}
				idnum[cnt] = new String(uid);
				bot[cnt] = new String("´ÔÀÌ µé¾î¿Ô½À´Ï´Ù.");
				cnt++;
			} else if (command.equals("Leave")) {
				idnum[cnt] = new String(uid);
				bot[cnt] = new String("´ÔÀÌ ³ª°¬½À´Ï´Ù.");
				cnt++;
			} else if (command.equals("Change")) {
				map.put(uid, st.nextToken());
			}
		}
		String[] answer = new String[cnt];
		for (int i = 0; i < answer.length; i++) {
			answer[i] = new String(map.get(idnum[i]) + bot[i]);
		}
		return answer;
	}
}
