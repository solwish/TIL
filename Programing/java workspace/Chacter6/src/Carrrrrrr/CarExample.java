package Carrrrrrr;

public class CarExample {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		Car myCar= new Car();
		
		//잘못된 속도
		myCar.setSpeed(-50);
		
		System.out.println("현재 속도: "+myCar.getSpeed());
		
		myCar.setSpeed(60);
		
		//멈춤
		if(!myCar.isStop()){
			myCar.setStop(true);
		}
		
		System.out.println("현재 속도: "+myCar.getSpeed());

	}

}
