
public class SupersonicAirplane extends Airplane {

	public static final int NORMAL = 1;
	public static final int SUPERSONIC = 2;
	
	public int flyMode = NORMAL;

	@Override
	public void fly() {
		if (flyMode==SUPERSONIC){
			System.out.println("초음속 비행합니다.");
		}else {
			// 에어플레인 객체의 플라이 메소드 호출
			super.fly();	
		}
		// TODO Auto-generated method stub
		
	}
	
	
	
	
	

}
