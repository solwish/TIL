package edu.smartfactory.forest.command;

import edu.smartfactory.forest.service.MemberService;

public class ListCommand implements Command {

	@Override
	public void execute() {
	//	System.out.println(MemberService.getInstance());
		System.out.println("����� �����ݴϴ�.");
		MemberService service= MemberService.getInstance();
		
		service.print();
		
	}

}
