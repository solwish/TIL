package bro;

import java.util.Scanner;

public class LeapYear {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int year = sc.nextInt();
		boolean isLeap = false;

		if (year % 4 == 0) {
			if (year % 400 == 0)
				isLeap = true;
			else if (year % 100 == 0)
				;
			else
				isLeap = true;
		}

		if (isLeap)
			System.out.println("Leap Year");
		else
			System.out.println("Not Leap Year");
	}
}
