import java.util.Scanner;

public class advancedExample {

	public static void main(String[] args) {

		// boolean run=true;

		int balance = 0;

		Scanner scanner = new Scanner(System.in);

		//시작
		String[] aaa = {
				"예금",   //주석달 수 있는 장점이 있음.
				"출금",	//세로배열 짱
				"잔고",	
				"종료","호오 신기신기"
				};
		
		printMenu(aaa);
		
		
		
		
		while (true) {
		/*	System.out.println("-----------------------");
			System.out.println("1.예금|2.출금|3.잔고|4.종료");
			System.out.println("-----------------------");    */
			System.out.println("선택>");
			
			// 요기
			int input = scanner.nextInt();
			if (input == 1) {
				System.out.println("예금액>");
				int money = scanner.nextInt();
				balance = balance + money;
			} else if (input == 2) {
				System.out.println("출금액>");
				int money = scanner.nextInt();
				balance = balance - money;
			} else if (input == 3) {
				System.out.println("잔고>" + balance);
			} else if (input == 4)
				break;
			// run=false;
			else {
				System.out.println("잘못 입력하셨습니다.");
			}

		}

		System.out.println("프로그램 종료");
	}

	static void printMenu(String[] bbb){
		for(int i=0;i<bbb.length;i++){
			System.out.println(i+1 +". "+bbb[i]);
		}
	}
	
	
}
