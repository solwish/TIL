package edu.smartfactory.forest.command;

import java.util.Scanner;

import edu.smartfactory.forest.repository.Member;
import edu.smartfactory.forest.service.MemberService;

public class FixCommand implements Command {

	@Override
	public void execute() {
		MemberService service = MemberService.getInstance();
		System.out.println("����� �����մϴ�.");

		Scanner scanner = new Scanner(System.in);

		System.out.println("���̵� �Է��ϼ���");
		String id = scanner.nextLine();

		// service.findMember(id);

		try {
			Member member = service.findMember(id);
			service.findMember(id);
			System.out.println("ã�ҽ��ϴ�");
			System.out.println(member);
			System.out.println("�̸�: ");
			String name = scanner.nextLine();
			member.setName(name);
			System.out.println("��й�ȣ: ");
			String password = scanner.nextLine();
			member.setPassword(password);
			System.out.println("�̸���: ");
			String email = scanner.nextLine();
			member.setEmail(email);
			
		} catch (Exception e) {
			e.printStackTrace();
		}
		
	}

}
