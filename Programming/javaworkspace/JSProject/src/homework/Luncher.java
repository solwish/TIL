package homework;

import java.util.Arrays;
import java.util.List;
import java.util.Scanner;

public class Luncher {

	public static void main(String[] args) {
		
		List<Command> commands = Arrays.asList(
				new PrintIdCommand(), 
				new SearchCommand(), 
				new ExitCommand()
					);
	
		Command listCommand = new ListCommand();
		
		Scanner scanner = new Scanner(System.in);
		while(true) {
			listCommand.execute();
			System.out.print("�޴�����>");
			try {
				int sel = scanner.nextInt();
				commands.get(sel-1).execute();
			} catch (Exception e) {
				System.out.println("�߸��Է��Ͽ����ϴ�.");
			}
			
		}
	}

}
