package homework;

public class ExitCommand implements Command {

	@Override
	public void execute() {
		
		System.out.println("�����մϴ�.");
		System.exit(0);

	}

}
