
public class ThrowsExample {

	public static void main(String[] args) {
//	findClass(); //�߷ο� �ͻ��� ������ ���⿡ ����
		try {
			findClass();
		} catch (ClassNotFoundException e) {
			System.out.println("Ŭ������ �������� �ʽ��ϴ�.");
		}
		
		
		
		

	}
	public static void findClass() throws ClassNotFoundException{//throw �ͼ��� ����� �Ʒ��� ���� 
		Class clazz = Class.forName("java.lang.String2");
	}

}
