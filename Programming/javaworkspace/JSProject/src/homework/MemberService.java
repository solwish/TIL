package homework;

import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.Scanner;
import java.util.Set;

public class MemberService {

	private static MemberService memberService = new MemberService();

	private MemberService() {
		map.put("test1", new Member("test1", "���ڹ�", Gender.male, "1234", 21, "010-1234-5678"));
		map.put("test2", new Member("test2", "�ſ��", Gender.male, "2345", 57, "010-9999-5678"));
		map.put("test3", new Member("test3", "���", Gender.female, "3456", 34, "010-1004-8282"));
		map.put("test4", new Member("test4", "�����", Gender.female, "4567", 18, "010-5959-7956"));
		map.put("test5", new Member("test5", "���ӽ�", Gender.male, "5678", 45, "010-4564-5292"));
	}

	public static MemberService getInstance() {
		return memberService;
	}

	Map<String, Member> map = new HashMap<>();

	// ��ü ã��
	public Member findMember(String id) throws MemberNotFoundException {
		if (map.containsKey(id)) {
			Scanner scanner = new Scanner(System.in);
			System.out.println("��й�ȣ�� �Է��ϼ���");
			System.out.println("�׽�Ʈ ���α׷��̶� ���Ƿ� ��й�ȣ�� ����ص帳�ϴ�. "+map.get(id).getId()
					+"�� ��й�ȣ�� "+map.get(id).getPassword());
			String password = scanner.nextLine();
			if (memberService.checkpassword(id, password)) {
				return map.get(id);
			} else {
				throw new MemberNotFoundException("��й�ȣ�� Ʋ�Ƚ��ϴ�.");
			}
		} else {
			throw new MemberNotFoundException("���� ȸ���Դϴ�.");
		}
	}

	// ��й�ȣ check
	public boolean checkpassword(String id, String password) {
		if (map.get(id).getPassword().equals(password)) {
			return true;
		} else {
			return false;
		}
	}

	// ��ü�� id ���
	public void printMember() {
		Set<String> keySet = map.keySet();
		Iterator<String> keyIterator = keySet.iterator();
		while (keyIterator.hasNext()) {
			String key = keyIterator.next();
			// Member value = map.get(key);//�ɹ� ��� ���� ����Ҷ�
			System.out.println("\t" + key);
		}
	}

}