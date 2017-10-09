package homework;

public class PrintIdCommand implements Command {

	MemberService memberService = MemberService.getInstance();
	
	//맴버 아이디 출력
	@Override
	public void execute() {
		memberService.printMember();
		System.out.println("총 회원수: " + memberService.map.size());
		
	}

}
