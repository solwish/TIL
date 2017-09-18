package edu.smartfactory.forest.command;

import java.util.Scanner;

import edu.smartfactory.forest.repository.Member;
import edu.smartfactory.forest.service.MemberService;

public class SearchCommand implements Command {

	@Override
	public void execute() {
		System.out.println("목록을 검색합니다.");

		MemberService service = MemberService.getInstance();

		Scanner scanner = new Scanner(System.in);

		System.out.println("아이디를 입력하세요");
		String id = scanner.nextLine();

		// service.findMember(id);

		try {
			Member member = service.findMember(id);
			service.findMember(id);
			System.out.println("찾았습니다");
			System.out.println(member);
		} catch (Exception e) {
			e.printStackTrace();
		}

		// f(service.findMember(id)==null){
		// System.out.println("찾는 회원이 없습니다.");
		// }else{
		// // System.out.println("찾았습니다"+id);

	}

}
