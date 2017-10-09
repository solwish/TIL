
public class CarExample {

	public static void main(String[] args) {

		Car myCar=new Car("소나타", "노랑", 555);
		Car yourCar=new Car("아반테", "검정");
		Car1 ourCar=new Car1();
		
		System.out.println(myCar.toString());
		System.out.println(yourCar.toString());
		System.out.println(ourCar.toString());
		System.out.println(myCar);
		
		/*		
		System.out.println("제작회사  "+ myCar.company);
		System.out.println("모델명  "+ myCar.model);
		System.out.println("색깔  "+ myCar.color);
		System.out.println("최고속도  "+ myCar.maxSpeed);
		System.out.println("현재속도  "+ myCar.speed);
		
		myCar.speed = 60;
		yourCar.speed = 80;
//		ourCar.speed = 30;
		System.out.println("수정된 속도  "+ myCar.speed);
		System.out.println("수정된 속도  "+ yourCar.speed);
		System.out.println("수정된 속도  "+ ourCar.speed);*/
	}

}
