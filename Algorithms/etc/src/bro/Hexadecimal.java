package bro;

import java.util.Scanner;
import java.util.Stack;

public class Hexadecimal {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		Stack<Integer> stack = new Stack<>();
		int n = sc.nextInt();

		while (n != 0) {
			stack.push(n % 16);
			n /= 16;
		}

		int temp;
		while (!stack.isEmpty()) {
			temp = stack.pop();
			if (temp == 10)
				System.out.print("a");
			else if (temp == 11)
				System.out.print("b");
			else if (temp == 12)
				System.out.print("c");
			else if (temp == 13)
				System.out.print("d");
			else if (temp == 14)
				System.out.print("e");
			else if (temp == 15)
				System.out.print("f");
			else
				System.out.print(temp);
		}
		System.out.println();
	}

}
