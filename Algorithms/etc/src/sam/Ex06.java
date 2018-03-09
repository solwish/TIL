package sam;

import java.util.Scanner;

public class Ex06 {
	static String s;

	static boolean checkRegion(String region) {
		if (region.equals("000001") || region.equals("000010") || region.equals("000100") || region.equals("001000")
				|| region.equals("010000") || region.equals("100000"))
			return true;
		else
			return false;
	}

	static boolean checkbirthday(String birthday) {
		int year = Integer.parseInt(birthday.substring(0, 4));
		int month = Integer.parseInt(birthday.substring(4, 6));
		int date = Integer.parseInt(birthday.substring(6, 8));

		if (1900 <= year && year <= 2014)
			if (1 <= month && month <= 12)
				if ((year % 400 == 0) || (year % 4 == 0 && year % 100 != 0)) {
					if (month == 2)
						if (1 <= date && date <= 28)
							return true;
						else
							return false;
				} else {
					if (month <= 7) {
						if (month % 2 == 1)
							if (1 <= date && date <= 31)
								return true;
							else
								return false;
						else {
							if (1 <= date && date <= 30)
								return true;
							else
								return false;
						}
					} else {
						if (month % 2 == 0)
							if (1 <= date && date <= 31)
								return true;
							else
								return false;
						else {
							if (1 <= date && date <= 30)
								return true;
							else
								return false;
						}
					}
				}

		return false;
	}

	static boolean checkOrder(String order) {
		if (order.equals("000"))
			return false;
		else
			return true;
	}

	static boolean checkSum(String checkSum) {
		int tmp;
		int sum = 0;
		for (int i = 0; i < 17; i++) {
			tmp = Integer.parseInt(s.substring(i, i + 1));
			sum += tmp * Math.pow(2, 17 - i);
		}
		int code = sum % 11;

		if (Integer.parseInt(checkSum) == code && code != 10)
			return true;
		else
			return false;
	}

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		s = sc.nextLine();
		String region = s.substring(0, 6);
		String birthday = s.substring(6, 14);
		String order = s.substring(14, 17);
		String checkSum = s.substring(17, 18);

		if (checkRegion(region) && checkbirthday(birthday) && checkOrder(order) && checkSum(checkSum))
			if (Integer.parseInt(order) % 2 == 0)
				System.out.println("Female");
			else
				System.out.println("Male");
		else
			System.out.println("Invaild");
	}

}
