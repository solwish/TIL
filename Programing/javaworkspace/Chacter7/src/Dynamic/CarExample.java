package Dynamic;

public class CarExample {
	public static void main(String[] args) {
		
		Car car= new Car();
		
		for(int i=1;i<=5;i++){
			int problemLocation = car.run();
			if (problemLocation !=0) {
				System.out.println(car.tires[problemLocation-1].location+"HankookTire�� ��ü");
				car.tires[problemLocation-1]=new HankookTire(car.tires[problemLocation-1].location, 15);
		}
		
		
		
		
		
		
		
		/*
		for(int i=1; i<=5; i++){
			int problemLocation = car.run();
			switch (problemLocation) {
			case 1://�տ��� Ÿ�̾� ��ũ�� �������� �ٲ�
				System.out.println("�տ��� HankookTire�� ��ü");
				car.frontLeftTire=new HankookTire("�տ���", 15);
				break;
			case 2:	//�տ����� Ÿ�̾� ��ũ�� ŭȣŸ�̾�� ��ü
				System.out.println("�տ����� kumhoTire�� ��ü");
				car.frontRightTire=new KumhoTire("�տ�����", 13);
				break;
			case 3:	//�ڿ����� Ÿ�̾� ��ũ�� ŭȣŸ�̾�� ��ü
				System.out.println("�ڿ��� hankokTire�� ��ü");
				car.backLeftTire=new HankookTire("�ڿ���", 14);
				break;
			case 4:	//�ڿ����� Ÿ�̾� ��ũ�� ŭȣŸ�̾�� ��ü
				System.out.println("�ڿ����� kumhoTire�� ��ü");
				car.backRightTire=new KumhoTire("�տ�����", 13);
				break;
			}*/
			System.out.println("-------------------------------");
		}
		
		

	}

}
