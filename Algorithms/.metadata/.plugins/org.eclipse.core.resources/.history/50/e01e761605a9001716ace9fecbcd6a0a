package SWexpert;

import java.util.Scanner;

public class Stack {

	private int top;
	private int maxSize;
	private Object[] stackArray;

	public Stack(int maxSize) {
		this.maxSize = maxSize;
		this.stackArray = new Object[maxSize];
		this.top = -1;
	}

	public boolean push(Object item) {
		if (top == maxSize - 1) {
			System.out.println("stack overflow");
			return false;
		}
		stackArray[++top] = item;
		return true;
	}

	public Object pop() {
		if (top == -1) {
			System.out.println("stack is empty!");
			return null;
		} else {
			Object item = stackArray[top];
			stackArray[top] = null;
			top--;
			return item;
		}
	}

	// 스택 출력
	public void printStack() {
		if (top != -1) {
			for (int i = top; i <= top; i--) {
				if (i == -1)
					break;
				System.out.println("| " + stackArray[i] + " |");
				System.out.println("------");
			}
		} else {
			System.out.println("stack is empty!");
		}
	}

	public static void main(String[] args) {

		Scanner sc = new Scanner(System.in);

		System.out.println("스택 크기 입력 : ");
		int size = sc.nextInt();
		Stack stack = new Stack(size);

		boolean flag = true;

		while (flag) {
			printMenu();
			String s = sc.next();

			switch (s) {
			case "1":
				System.out.print("PUSH : ");
				String data = sc.next();
				stack.push(data);
				break;
			case "2":
				System.out.println("POP : " + stack.pop());
				break;
			case "3":
				stack.printStack();
				break;
			case "q":
			case "Q":
				flag = false;
				break;
			}
		}
	}

	public static void printMenu() {
		System.out.println("1. push");
		System.out.println("2. pop");
		System.out.println("3. STACK");
		System.out.println("Q. Exit");
	}
}
