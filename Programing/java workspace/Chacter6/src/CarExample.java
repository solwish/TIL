
public class CarExample {

	public static void main(String[] args) {

		Car myCar=new Car("�ҳ�Ÿ", "���", 555);
		Car yourCar=new Car("�ƹ���", "����");
		Car1 ourCar=new Car1();
		
		System.out.println(myCar.toString());
		System.out.println(yourCar.toString());
		System.out.println(ourCar.toString());
		System.out.println(myCar);
		
		/*		
		System.out.println("����ȸ��  "+ myCar.company);
		System.out.println("�𵨸�  "+ myCar.model);
		System.out.println("����  "+ myCar.color);
		System.out.println("�ְ�ӵ�  "+ myCar.maxSpeed);
		System.out.println("����ӵ�  "+ myCar.speed);
		
		myCar.speed = 60;
		yourCar.speed = 80;
//		ourCar.speed = 30;
		System.out.println("������ �ӵ�  "+ myCar.speed);
		System.out.println("������ �ӵ�  "+ yourCar.speed);
		System.out.println("������ �ӵ�  "+ ourCar.speed);*/
	}

}
