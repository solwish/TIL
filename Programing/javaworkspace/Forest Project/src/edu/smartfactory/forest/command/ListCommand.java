package edu.smartfactory.forest.command;

import edu.smartfactory.forest.service.MemberService;

public class ListCommand implements Command {

	@Override
	public void execute() {
	//	System.out.println(MemberService.getInstance());
		System.out.println("목록을 보여줍니다.");
		MemberService service= MemberService.getInstance();
		
		service.print();
		
	}

}
