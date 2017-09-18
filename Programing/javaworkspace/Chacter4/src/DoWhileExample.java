import java.util.Scanner;

public class DoWhileExample {

	public static void main(String[] args) {
		System.out.println("메세지를 입력하세요");
		System.out.println("프로그램을 종료하려면 q를 입력하세요	");
		
		Scanner scanner = new Scanner(System.in);
		String inputString;
		
		while(true) {
			System.out.print(">");
			inputString = scanner.nextLine();
			System.out.println();
			if (inputString.equals("q")||inputString.equals("Q")){
				break;
			}
		}	
		//} while (!inputString.equals("q"));
		
		System.out.println();
		System.out.println("프로그램 종료");

	}

}
