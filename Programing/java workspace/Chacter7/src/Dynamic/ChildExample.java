package Dynamic;

public class ChildExample {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		Child child = new Child();
		
		Parent parent = child;
		
		parent.method1();
		
		parent.method2();  //�����ǵ� ��ҵ尡 ȣ��� �ſ� �߿�!!!!!!!!!!
		
		//parent.method3();

	}

}
