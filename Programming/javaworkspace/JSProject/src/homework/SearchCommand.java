package homework;

import java.util.Scanner;

public class SearchCommand implements Command {

	@Override
	public void execute() {

		MemberService memberService = MemberService.getInstance();
		Scanner scanner = new Scanner(System.in);

		System.out.println("아이디를 입력하세요");
		String id = scanner.nextLine();
		try {
			Member member = memberService.findMember(id);
			System.out.println("찾았습니다. 출력하시겠습니까??");
			System.out.println("YES:\"1\"입력");
			System.out.println("NO: 1이외에 아무거나 입력");
			int choice = scanner.nextInt();
			if (choice == 1) {
				System.out.println(member);
			} else {
				System.out.println("메뉴로 돌아갑니다.");
			}
		} catch (MemberNotFoundException e) {
			String message = e.getMessage();
			System.out.println(message);

		}
	}
}
