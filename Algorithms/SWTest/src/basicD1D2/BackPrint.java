package basicD1D2;

import java.util.Scanner;

public class BackPrint {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int n = sc.nextInt();
		for (int i = n; i >= 0; i--) {
			System.out.print(i + " ");
		}
		System.out.println();
	}
}
