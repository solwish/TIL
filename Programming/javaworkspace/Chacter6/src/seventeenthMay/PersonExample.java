package seventeenthMay;

public class PersonExample {

	public static void main(String[] args) {
		
		Person p1 = new Person("123456-1234567", "°è¹é");
		Person p2 = new Person("654321-7654321", "±èÀ¯½Å");
		
		System.out.println((p1.nation));
		System.out.println((p1.ssn));
		System.out.println(p1.name);
		
		System.out.println(p1);
		System.out.println(p2);
		//p1.nation = "usa";
		//p1.ssn = "654321-7654321";
		p1.name = "À»Áö¹®´ö";
		System.out.println(p1.name);

	}

}
