package system;

public class GetPropertyExample {

	public static void main(String[] args) {
		String osName = System.getProperty("os.name");
		String userName = System.getProperty("user.name");
		String userHome = System.getProperty("user.home");
		
		System.out.println("�ü�� �̸�: " + osName);
		System.out.println("����� �̸�" + userName);
		System.out.println("����� Ȩ���丮: "+ userHome);

		String javaHome = System.getenv("JAVA_HOME");
		System.out.println("[ JAVA_HOME ] "+ javaHome);
		
		

	}

}
