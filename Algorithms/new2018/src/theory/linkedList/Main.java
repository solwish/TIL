package theory.linkedList;

public class Main {

	public static void main(String[] args) {
		LinkedList numbers = new LinkedList();
		// numbers.addFirst(30);
		// numbers.addFirst(20);
		// numbers.addFirst(10);

		numbers.addLast(10); // 0
		numbers.addLast(20); // 1
		numbers.addLast(30); // 2
		numbers.add(2, 25);

		// System.out.println(numbers.node(2));
		System.out.println(numbers);

	}

}
