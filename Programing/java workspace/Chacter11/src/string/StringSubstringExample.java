package string;

public class StringSubstringExample {

	public static void main(String[] args) {
		String ssn = "880815-1234567 ";

		String firstNum = ssn.substring(0, 6);
		System.out.println(firstNum);

		String secondNum = ssn.substring(7);
		System.out.println(secondNum);

		int index = ssn.indexOf("-");
		if (index > -1) { // ��� �ڵ�

			String firstNum1 = ssn.substring(0, index);
			System.out.println(firstNum1);

			String secondNum1 = ssn.substring(index + 1);
			System.out.println(secondNum1);
		}
		
		String fileName = "my.Song.mp3";
		int lastindex = fileName.lastIndexOf(".");
		if (lastindex > -1) { // ��� �ڵ�

			String Aa = fileName.substring(index+1);
			if (Aa.equals(".mp3")) {
				System.out.println("mp3 �����Դϴ�.");
			}else{
				System.out.println("mp3������ �ƴմϴ�.");
			}

		}

	}
}
