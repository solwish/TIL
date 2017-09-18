package string;

public class StringSubstringExample {

	public static void main(String[] args) {
		String ssn = "880815-1234567 ";

		String firstNum = ssn.substring(0, 6);
		System.out.println(firstNum);

		String secondNum = ssn.substring(7);
		System.out.println(secondNum);

		int index = ssn.indexOf("-");
		if (index > -1) { // 방어 코드

			String firstNum1 = ssn.substring(0, index);
			System.out.println(firstNum1);

			String secondNum1 = ssn.substring(index + 1);
			System.out.println(secondNum1);
		}
		
		String fileName = "my.Song.mp3";
		int lastindex = fileName.lastIndexOf(".");
		if (lastindex > -1) { // 방어 코드

			String Aa = fileName.substring(index+1);
			if (Aa.equals(".mp3")) {
				System.out.println("mp3 파일입니다.");
			}else{
				System.out.println("mp3파일이 아닙니다.");
			}

		}

	}
}
