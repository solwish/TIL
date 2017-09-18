
public class TryCatchFinallyExample {

	public static void main(String[] args) {

		try {
			Class clazz = Class.forName("java.lang.String2");
		} catch (ClassNotFoundException e) {
			
			e.printStackTrace(); //생략해주면 그냥 넘어감(정상처럼 보임)
		}
		System.out.println("프로그램을 종료합니다.");

		
	}

}
