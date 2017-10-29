package theory;

class Ztest001 {
	int a;

	public Ztest001(int a) {
		super();
		this.a = a;
	}

}

public class CallbyValue {

	public static void main(String[] args) {
		Ztest001 A = new Ztest001(3);
		Ztest001 B = new Ztest001(4);

		Zmeth(A, B);
		System.out.println(A.a + " " + B.a);

		Zmeth2(A, B);
		System.out.println(A.a + " " + B.a);

	}

	private static void Zmeth2(Ztest001 a, Ztest001 b) {
		int temp;
		temp = a.a;
		a.a = b.a;
		b.a = temp;
	}

	private static void Zmeth(Ztest001 a, Ztest001 b) {
		Ztest001 temp;
		temp = a;
		a = b;
		b = temp;
	}

}
