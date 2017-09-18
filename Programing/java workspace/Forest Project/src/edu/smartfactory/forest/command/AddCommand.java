package edu.smartfactory.forest.command;

import java.util.Scanner;

import edu.smartfactory.forest.repository.Member;
import edu.smartfactory.forest.service.MemberService;

public class AddCommand implements Command {

	@Override
	public void execute() {
		MemberService service = MemberService.getInstance();
		System.out.println("����� �߰��մϴ�.");
		
		Scanner scanner = new Scanner(System.in);
		System.out.println("�Ƶ� �Է�.");
		String id = scanner.nextLine();
		System.out.println("�̸� �Է�.");
		String name = scanner.nextLine();
		System.out.println("��� �Է�.");
		String password = scanner.nextLine();
		System.out.println("�̸��� �Է�.");
		String email = scanner.nextLine();
		
		//Member member = new Member(id, name, password, email);
		
		service.add(new Member(id, name, password, email));

	}

}
