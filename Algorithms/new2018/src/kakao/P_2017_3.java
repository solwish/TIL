package kakao;

import java.util.LinkedList;

public class P_2017_3 {

	public static void main(String[] args) {
		int n = 3;
		String cities[] = { "Jeju", "Pangyo", "Seoul", "NewYork", "LA", "Jeju", "Pangyo", "Seoul", "NewYork", "LA" };
		System.out.println(solution(n, cities));
	}

	static int solution(int cacheSize, String[] cities) {
		int answer = 0;
		LinkedList<String> cache = new LinkedList<>();
		for (int i = 0; i < cities.length; i++) {
			String city = cities[i].toLowerCase();

			if (cache.contains(city)) {
				cache.remove(city);
				cache.add(city);
				answer += 1;
				continue;
			}

			if (cache.size() < cacheSize)
				cache.add(city);
			else if (cacheSize > 0) {
				cache.removeFirst();
				cache.add(city);
			}
			answer += 5;
		}

		return answer;
	}
}