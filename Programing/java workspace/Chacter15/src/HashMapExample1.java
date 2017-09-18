import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.Scanner;
import java.util.Set;

public class HashMapExample1 {

	public static void main(String[] args) {
		// 맵 컬렉션 생성
		Map<String, Integer> map = new HashMap<>();

		// 객체 저장
		map.put("신용권", 85);
		map.put("홍길동", 90);
		map.put("동장군", 80);
		map.put("홍길동", 95);
		System.out.println("총 Entry 수: " + map.size());

		// 객체 찾기
		Scanner scanner = new Scanner(System.in);
		System.out.println("점수를 볼 대상을 입력하세요");
		String aa = scanner.nextLine();
		if (map.get(aa) == null) {
			System.out.println("대상이 없습니다.");
		} else {
			System.out.println(aa + " :" + map.get(aa));
			System.out.println();
		}
		// 객체를 하나씩 처리
		Set<String> keySet = map.keySet();
		Iterator<String> keyIterator = keySet.iterator();
		while (keyIterator.hasNext()) {
			String key = keyIterator.next();
			Integer value = map.get(key);
			System.out.println("\t" + key + " " + value);
		}
		System.out.println();
		
		// 객체 삭제
		map.remove("홍길동");
		System.out.println("총 Entry 수: " + map.size());

	}

}
