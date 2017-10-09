
public class RemoteControlExample {

	public static void main(String[] args) {

//		RemoteControl rc;
//		rc = new Television();
//		rc = new Audio();

		/*
		RemoteControl rc = new RemoteControl() {
			
			@Override
			public void turnOn() {
				// TODO Auto-generated method stub
				
			}
			
			@Override
			public void turnOff() {
				// TODO Auto-generated method stub
				
			}
			
			@Override
			public void setVolume(int volume) {
				// TODO Auto-generated method stub
				
			}
		};
		
		rc = new Television();
		rc = new Audio();*/
		
		RemoteControl rc = null;  //인터페이스 변수 선언
		rc = new Television();
		rc.turnOn();
		rc.turnOff();
		
		rc= new Audio();
		rc.turnOn();
		rc.turnOff();
		
		SmartTelevision st = new SmartTelevision();
		RemoteControl rc2 = st;
		rc2.turnOn();
		Searchable sc = st;
		sc.search("인터페이스");
		
	}

}
