package Carrrrrrr;

public class CarExample {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		Car myCar= new Car();
		
		//�߸��� �ӵ�
		myCar.setSpeed(-50);
		
		System.out.println("���� �ӵ�: "+myCar.getSpeed());
		
		myCar.setSpeed(60);
		
		//����
		if(!myCar.isStop()){
			myCar.setStop(true);
		}
		
		System.out.println("���� �ӵ�: "+myCar.getSpeed());

	}

}
