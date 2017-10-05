package swExpert;

import java.util.Arrays;
import java.util.Comparator;

public class JavaArraysSort implements Comparable<JavaArraysSort> {

	 public static void main(String[] args) {

		 JavaArraysSort[] t = new JavaArraysSort[2];
		 t[0] = new JavaArraysSort(25, "aa");
		 t[1] = new JavaArraysSort(18, "bb");
		 
//		 Arrays.sort(t, nameComparator);
		 Arrays.sort(t, quantityComparator);
		 for(JavaArraysSort i: t) {
			 System.out.println(i.name);
		 }
	 }

	int quantity;
	String name;

	public JavaArraysSort(int quantity, String name) {
		this.quantity = quantity;
		this.name = name;
	}

	@Override
	public int compareTo(JavaArraysSort others) {
		// return name.compareTo(others.name);
		return quantity - others.quantity;
		// 양수냐 음수냐에 따라 비교.
	}

	static Comparator<JavaArraysSort> nameComparator = new Comparator<JavaArraysSort>() {
		public int compare(JavaArraysSort t1, JavaArraysSort t2) {
			return t1.name.compareTo(t2.name);
		}
	};

	static Comparator<JavaArraysSort> quantityComparator = new Comparator<JavaArraysSort>() {
		@Override
		public int compare(JavaArraysSort o1, JavaArraysSort o2) {
			return o1.quantity - o2.quantity;
		}
	};
	
	
}
