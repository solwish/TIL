package homework;

public class PrintIdCommand implements Command {

	MemberService memberService = MemberService.getInstance();
	
	//�ɹ� ���̵� ���
	@Override
	public void execute() {
		memberService.printMember();
		System.out.println("�� ȸ����: " + memberService.map.size());
		
	}

}
