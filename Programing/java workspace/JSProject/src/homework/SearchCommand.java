package homework;

import java.util.Scanner;

public class SearchCommand implements Command {

	@Override
	public void execute() {

		MemberService memberService = MemberService.getInstance();
		Scanner scanner = new Scanner(System.in);

		System.out.println("���̵� �Է��ϼ���");
		String id = scanner.nextLine();
		try {
			Member member = memberService.findMember(id);
			System.out.println("ã�ҽ��ϴ�. ����Ͻðڽ��ϱ�??");
			System.out.println("YES:\"1\"�Է�");
			System.out.println("NO: 1�̿ܿ� �ƹ��ų� �Է�");
			int choice = scanner.nextInt();
			if (choice == 1) {
				System.out.println(member);
			} else {
				System.out.println("�޴��� ���ư��ϴ�.");
			}
		} catch (MemberNotFoundException e) {
			String message = e.getMessage();
			System.out.println(message);

		}
	}
}
