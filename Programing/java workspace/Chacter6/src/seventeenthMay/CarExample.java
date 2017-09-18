package seventeenthMay;

import java.util.Scanner;

public class CarExample {

	public static void main(String[] args) {

		Car myCar =Car.getInstance();
		System.out.println("처음 가스를 입력");
		Scanner scanner = new Scanner(System.in);

		myCar.setGas(scanner.nextInt());

		boolean gasState = myCar.isLeftGas();
		
		
		for (; myCar.getDistance() > 0; ) {

			if (gasState) {
				System.out.println("출발합니다.");
				myCar.run(); // Car의 런메소드 호출
			}

			if (myCar.isLeftGas()) {// 카의 이스레프트가스 메소드 호출
				System.out.println("gas를 주입할 필요가 없습니다.");
			} else {
				System.out.println("현재까지 주행한 거리: "+(1000-myCar.getDistance())+" Km");
				System.out.println("가스를 주입하세요. 입력:");
				
			}
			if(myCar.getDistance()==0) break;
			myCar.setGas(scanner.nextInt());
			
			

		}
		System.out.println("주행할 수 있는 거리가 끝났습니다.");
		System.out.println("총 주행한 거리: "+(1000-myCar.getDistance())+" Km");
	}

}
