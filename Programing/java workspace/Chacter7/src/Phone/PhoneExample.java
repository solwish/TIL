package Phone;

public class PhoneExample {

	public static void main(String[] args) {
		//Phone phone =new Phone();   (x)
		
		SmartPhone smartPhone = new SmartPhone("홍길동");
		
		smartPhone.turnOn(); // 폰의 메서드
		smartPhone.internetSearch();
		smartPhone.turnOff(); //폰의 메서드
		
		Phone phone = new SmartPhone("홍길동");//업캐스팅
		
		phone.turnOn(); //폰의 메서드
		((SmartPhone)phone).internetSearch();//다운캐스팅 인터넷 검색 메소드를 쓰기위해
		phone.turnOff();
				
		

	}

}
