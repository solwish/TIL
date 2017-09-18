package edu.smartfactory.forest;

import java.nio.ReadOnlyBufferException;
import java.util.Scanner;

import javax.swing.DebugGraphics;

import edu.smartfactory.forest.command.AddCommand;
import edu.smartfactory.forest.command.Command;
import edu.smartfactory.forest.command.FixCommand;
import edu.smartfactory.forest.command.ListCommand;
import edu.smartfactory.forest.command.RemoveCommand;
import edu.smartfactory.forest.command.SearchCommand;



public class Forest2 {

	public static void main(String[] args) {
		
	//	Command exit = new Command(){
	//		public void exit(){
	//		System.exit(0);
	//		}
	//	};
		
		Command[] commands = {
				new ListCommand(),
				new SearchCommand(),
				new AddCommand(),
				new FixCommand(),
				new RemoveCommand(),
				//익명 구현 클래스 만드는 방법 모르겄따
				new Command(){
					@Override
					public void execute() {
						System.exit(0);
					}
				}
		};
		
	//	for(int i=0; i<commands.length; i++){
	//		System.out.println(i+". "+ commands[i]);
	//	}
		while(true){
			System.out.println("메뉴선택");
			
			Scanner scanner = new Scanner(System.in);
			int sel = scanner.nextInt();
			commands[sel].execute();
		
		}
		
		
		
		//systemexit(0)
		

	}

	

}
