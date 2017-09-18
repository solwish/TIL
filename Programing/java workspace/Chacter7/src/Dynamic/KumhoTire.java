package Dynamic;

public class KumhoTire extends Tire {

	public KumhoTire(String location, int maxRotation) {
			super(location, maxRotation);
	}

	@Override
	public boolean roll(){
		++accumulatedRotation; //���� ȸ���� 1����
		if(accumulatedRotation<maxRotation){
			System.out.println(location + " KumhoTire ����: "+
								(maxRotation - accumulatedRotation)+"ȸ");
			return true;
			
		}else{
			System.out.println("***"+location+"KumhoTire ��ũ ***");
			return false;	
		}
	}
	
	

}
