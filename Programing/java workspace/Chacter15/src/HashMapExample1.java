import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.Scanner;
import java.util.Set;

public class HashMapExample1 {

	public static void main(String[] args) {
		// �� �÷��� ����
		Map<String, Integer> map = new HashMap<>();

		// ��ü ����
		map.put("�ſ��", 85);
		map.put("ȫ�浿", 90);
		map.put("���屺", 80);
		map.put("ȫ�浿", 95);
		System.out.println("�� Entry ��: " + map.size());

		// ��ü ã��
		Scanner scanner = new Scanner(System.in);
		System.out.println("������ �� ����� �Է��ϼ���");
		String aa = scanner.nextLine();
		if (map.get(aa) == null) {
			System.out.println("����� �����ϴ�.");
		} else {
			System.out.println(aa + " :" + map.get(aa));
			System.out.println();
		}
		// ��ü�� �ϳ��� ó��
		Set<String> keySet = map.keySet();
		Iterator<String> keyIterator = keySet.iterator();
		while (keyIterator.hasNext()) {
			String key = keyIterator.next();
			Integer value = map.get(key);
			System.out.println("\t" + key + " " + value);
		}
		System.out.println();
		
		// ��ü ����
		map.remove("ȫ�浿");
		System.out.println("�� Entry ��: " + map.size());

	}

}
