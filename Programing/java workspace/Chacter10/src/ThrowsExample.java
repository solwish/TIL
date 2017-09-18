
public class ThrowsExample {

	public static void main(String[] args) {
//	findClass(); //뜨로우 익색션 때문에 여기에 밑줄
		try {
			findClass();
		} catch (ClassNotFoundException e) {
			System.out.println("클래스가 존재하지 않습니다.");
		}
		
		
		
		

	}
	public static void findClass() throws ClassNotFoundException{//throw 익셉션 지우면 아래에 밑줄 
		Class clazz = Class.forName("java.lang.String2");
	}

}
