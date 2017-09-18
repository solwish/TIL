package edu.smartfactory.forest.command;

import java.util.Scanner;

import edu.smartfactory.forest.repository.Member;
import edu.smartfactory.forest.service.MemberService;

public class AddCommand implements Command {

	@Override
	public void execute() {
		MemberService service = MemberService.getInstance();
		System.out.println("목록을 추가합니다.");
		
		Scanner scanner = new Scanner(System.in);
		System.out.println("아뒤 입력.");
		String id = scanner.nextLine();
		System.out.println("이름 입력.");
		String name = scanner.nextLine();
		System.out.println("비번 입력.");
		String password = scanner.nextLine();
		System.out.println("이메일 입력.");
		String email = scanner.nextLine();
		
		//Member member = new Member(id, name, password, email);
		
		service.add(new Member(id, name, password, email));

	}

}
