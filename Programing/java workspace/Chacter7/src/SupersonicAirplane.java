
public class SupersonicAirplane extends Airplane {

	public static final int NORMAL = 1;
	public static final int SUPERSONIC = 2;
	
	public int flyMode = NORMAL;

	@Override
	public void fly() {
		if (flyMode==SUPERSONIC){
			System.out.println("������ �����մϴ�.");
		}else {
			// �����÷��� ��ü�� �ö��� �޼ҵ� ȣ��
			super.fly();	
		}
		// TODO Auto-generated method stub
		
	}
	
	
	
	
	

}
