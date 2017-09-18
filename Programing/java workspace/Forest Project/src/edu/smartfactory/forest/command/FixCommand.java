package edu.smartfactory.forest.command;

import java.util.Scanner;

import edu.smartfactory.forest.repository.Member;
import edu.smartfactory.forest.service.MemberService;

public class FixCommand implements Command {

	@Override
	public void execute() {
		MemberService service = MemberService.getInstance();
		System.out.println("목록을 수정합니다.");

		Scanner scanner = new Scanner(System.in);

		System.out.println("아이디를 입력하세요");
		String id = scanner.nextLine();

		// service.findMember(id);

		try {
			Member member = service.findMember(id);
			service.findMember(id);
			System.out.println("찾았습니다");
			System.out.println(member);
			System.out.println("이름: ");
			String name = scanner.nextLine();
			member.setName(name);
			System.out.println("비밀번호: ");
			String password = scanner.nextLine();
			member.setPassword(password);
			System.out.println("이메일: ");
			String email = scanner.nextLine();
			member.setEmail(email);
			
		} catch (Exception e) {
			e.printStackTrace();
		}
		
	}

}
