import java.util.Scanner;

public class advancedExample {

	public static void main(String[] args) {

		// boolean run=true;

		int balance = 0;

		Scanner scanner = new Scanner(System.in);

		//����
		String[] aaa = {
				"����",   //�ּ��� �� �ִ� ������ ����.
				"���",	//���ι迭 ¯
				"�ܰ�",	
				"����","ȣ�� �ű�ű�"
				};
		
		printMenu(aaa);
		
		
		
		
		while (true) {
		/*	System.out.println("-----------------------");
			System.out.println("1.����|2.���|3.�ܰ�|4.����");
			System.out.println("-----------------------");    */
			System.out.println("����>");
			
			// ���
			int input = scanner.nextInt();
			if (input == 1) {
				System.out.println("���ݾ�>");
				int money = scanner.nextInt();
				balance = balance + money;
			} else if (input == 2) {
				System.out.println("��ݾ�>");
				int money = scanner.nextInt();
				balance = balance - money;
			} else if (input == 3) {
				System.out.println("�ܰ�>" + balance);
			} else if (input == 4)
				break;
			// run=false;
			else {
				System.out.println("�߸� �Է��ϼ̽��ϴ�.");
			}

		}

		System.out.println("���α׷� ����");
	}

	static void printMenu(String[] bbb){
		for(int i=0;i<bbb.length;i++){
			System.out.println(i+1 +". "+bbb[i]);
		}
	}
	
	
}
