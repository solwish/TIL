package edu.smartfactory.forest.command;

import java.util.Scanner;

import edu.smartfactory.forest.repository.Member;
import edu.smartfactory.forest.service.MemberService;

public class SearchCommand implements Command {

	@Override
	public void execute() {
		System.out.println("����� �˻��մϴ�.");

		MemberService service = MemberService.getInstance();

		Scanner scanner = new Scanner(System.in);

		System.out.println("���̵� �Է��ϼ���");
		String id = scanner.nextLine();

		// service.findMember(id);

		try {
			Member member = service.findMember(id);
			service.findMember(id);
			System.out.println("ã�ҽ��ϴ�");
			System.out.println(member);
		} catch (Exception e) {
			e.printStackTrace();
		}

		// f(service.findMember(id)==null){
		// System.out.println("ã�� ȸ���� �����ϴ�.");
		// }else{
		// // System.out.println("ã�ҽ��ϴ�"+id);

	}

}
