import java.util.Hashtable;
import java.util.Map;
import java.util.Scanner;

public class HashmapExample {

	public static void main(String[] args) {
		Map<String, String> map = new Hashtable<>();

		map.put("spring", "12");
		map.put("summer", "123");
		map.put("fall", "1234");
		map.put("winter", "12345");

		Scanner scanner = new Scanner(System.in);

		while (true) {
			System.out.println("���̵�� ��й�ȣ�� �Է����ּ���");
			System.out.println("���̵�:");
			String id = scanner.nextLine();

			System.out.println("��й�ȣ:");
			String password = scanner.nextLine();
			System.out.println();

			if (map.containsKey(id)) {
				if (map.get(id).equals(password)) {
					System.out.println("�α��� �Ǿ����ϴ�.");
					break;
				} else {
					System.out.println("��й�ȣ�� Ʋ�Ƚ��ϴ�.");
				}
			} else {
				System.out.println("�Է��Ͻ� ���̵� �����ϴ�.");
			}

		}

	}

}
