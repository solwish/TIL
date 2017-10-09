package Dynamic;

public class ChildExample {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		Child child = new Child();
		
		Parent parent = child;
		
		parent.method1();
		
		parent.method2();  //재정의된 모소드가 호출됨 매우 중요!!!!!!!!!!
		
		//parent.method3();

	}

}
