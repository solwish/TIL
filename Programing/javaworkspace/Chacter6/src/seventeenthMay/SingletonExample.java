package seventeenthMay;

public class SingletonExample {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Earth aa= new Earth();
		Singleton obj1= Singleton.getInstance();
		Singleton obj2= Singleton.getInstance();
		
		if (obj1==obj2){
			System.out.println("���� �̱��� ��ü");
		}else{
			System.out.println("�ٸ� �̱��� ��ü");
		}

		System.out.println("");
	}

}
