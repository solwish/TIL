
public class TryCatchFinallyExample {

	public static void main(String[] args) {

		try {
			Class clazz = Class.forName("java.lang.String2");
		} catch (ClassNotFoundException e) {
			
			e.printStackTrace(); //�������ָ� �׳� �Ѿ(����ó�� ����)
		}
		System.out.println("���α׷��� �����մϴ�.");

		
	}

}
