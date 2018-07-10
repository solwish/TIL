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
		// numbers.add(2, 25);
		// numbers.removeFirst();
		// numbers.remove(1);
		// numbers.removeLast();

		// System.out.println(numbers.node(2));
		// System.out.println(numbers);
		// System.out.println(numbers.size());
		// System.out.println(numbers.get(1));
		// System.out.println(numbers.indexOf(25));
		LinkedList.ListIterator i = numbers.listIterator();
		// System.out.println(i.next());
		// System.out.println(i.next());
		// System.out.println(i.hasNext());
		// System.out.println(i.next());
		// System.out.println(i.hasNext());
		// while (i.hasNext()) {
		// System.out.println(i.next());
		// }
		// i.add(5);
		// i.next();
		// i.add(15);
		while (i.hasNext()) {
			if ((int) i.next() == 20)
				i.remove();
		}
		System.out.println(numbers);
	}

}
