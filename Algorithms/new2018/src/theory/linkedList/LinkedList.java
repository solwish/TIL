package theory.linkedList;

public class LinkedList {
	private Node head;
	private Node tail;
	private int size = 0;

	private class Node {
		private Object data;
		private Node next;

		public Node(Object input) {
			this.data = input;
			this.next = null;
		}

		public String toString() {
			return String.valueOf(this.data);
		}
	}

	public void addFirst(Object input) {
		Node newNode = new Node(input);
		newNode.next = head;
		head = newNode;
		size++;
		if (head.next == null)
			tail = head;
	}

	public void addLast(Object input) {
		Node newNode = new Node(input);
		if (size == 0)
			addFirst(input);
		else {
			tail.next = newNode;
			tail = newNode;
			size++;
		}
	}

	Node node(int index) {
		Node x = head;
		for (int i = 0; i < index; i++)
			x = x.next;
		return x;
	}

	public void add(int k, Object input) {
		if (k == 0)
			addFirst(input);
		else {
			Node temp1 = node(k - 1);
			Node temp2 = node(k);
			Node newNode = new Node(input);
			temp1.next = newNode;
			newNode.next = temp2;
			size++;
			if (newNode.next == null)
				tail = newNode;
		}
	}

	public String toString() {
		if (head == null)
			return "[]";
		Node temp = head;
		String str = "[";

		while (temp.next != null) {
			str += temp.data + ", ";
			temp = temp.next;
		}
		str += temp.data;

		return str + "]";
	}
}
