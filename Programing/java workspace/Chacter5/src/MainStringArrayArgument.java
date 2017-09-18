
public class MainStringArrayArgument {
	public static void main(String[] args) {
		if (args.length != 2) { // 입력된 데이터 개수 검사
			System.out.println("프로그램의 사용법");
			System.out.println("java MainStringArrayArgument num1 num2");
			System.exit(0); // 프로그래미 강제 종료 or return 0;
		}
		String strNum1 = args[0]; // 첫번째 데이터 얻기
		String strNum2 = args[1]; // 두번째 데이터 얻기
		int num1 = Integer.parseInt(strNum1); // 문자열을 정수로 변환
		int num2 = Integer.parseInt(strNum2); // 문자열을 정수로 변환
		int result = num1 + num2;
		System.out.println(num1 + " + " + num2 + " = " + result);
	}
}