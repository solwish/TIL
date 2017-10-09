package Dynamic;

public class HankookTire extends Tire {

	public HankookTire(String location, int maxRotation){
		super(location, maxRotation);
	}

	@Override
	public boolean roll(){
		++accumulatedRotation; //���� ȸ���� 1����
		if(accumulatedRotation<maxRotation){
			System.out.println(location + " HankookTire ����: "+
								(maxRotation - accumulatedRotation)+"ȸ");
			return true;
			
		}else{
			System.out.println("***"+location+"HankookTire ��ũ ***");
			return false;	
		}
	}
	
	
	
	
}
