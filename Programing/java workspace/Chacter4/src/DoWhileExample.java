import java.util.Scanner;

public class DoWhileExample {

	public static void main(String[] args) {
		System.out.println("�޼����� �Է��ϼ���");
		System.out.println("���α׷��� �����Ϸ��� q�� �Է��ϼ���	");
		
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
		System.out.println("���α׷� ����");

	}

}
