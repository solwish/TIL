import java.util.Scanner;

public class p135seven {

	public static void main(String[] args) {

	//	boolean run=true;
		
		int balance=0;
				
		Scanner scanner = new Scanner(System.in);
		
		
		while(true){
			System.out.println("-----------------------");
			System.out.println("1.예금|2.출금|3.잔고|4.종료");
			System.out.println("-----------------------");
			System.out.println("선택>");
			
			// 요기
			int input=scanner.nextInt();
			if(input==1){
				System.out.println("예금액>");
				int money=scanner.nextInt();
				balance=balance+money;
			}else if(input==2){
				System.out.println("출금액>");
				int money=scanner.nextInt();
				balance=balance-money;
			}else if(input==3){
				System.out.println("잔고>"+balance);				
			}else if(input==4)
				break;
				//run=false;
			else {
				System.out.println("잘못 입력하셨습니다.");
			}
			
		}
		
		System.out.println("프로그램 종료");
	}

}
