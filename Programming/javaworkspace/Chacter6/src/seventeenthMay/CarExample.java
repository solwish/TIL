package seventeenthMay;

import java.util.Scanner;

public class CarExample {

	public static void main(String[] args) {

		Car myCar =Car.getInstance();
		System.out.println("ó�� ������ �Է�");
		Scanner scanner = new Scanner(System.in);

		myCar.setGas(scanner.nextInt());

		boolean gasState = myCar.isLeftGas();
		
		
		for (; myCar.getDistance() > 0; ) {

			if (gasState) {
				System.out.println("����մϴ�.");
				myCar.run(); // Car�� ���޼ҵ� ȣ��
			}

			if (myCar.isLeftGas()) {// ī�� �̽�����Ʈ���� �޼ҵ� ȣ��
				System.out.println("gas�� ������ �ʿ䰡 �����ϴ�.");
			} else {
				System.out.println("������� ������ �Ÿ�: "+(1000-myCar.getDistance())+" Km");
				System.out.println("������ �����ϼ���. �Է�:");
				
			}
			if(myCar.getDistance()==0) break;
			myCar.setGas(scanner.nextInt());
			
			

		}
		System.out.println("������ �� �ִ� �Ÿ��� �������ϴ�.");
		System.out.println("�� ������ �Ÿ�: "+(1000-myCar.getDistance())+" Km");
	}

}
