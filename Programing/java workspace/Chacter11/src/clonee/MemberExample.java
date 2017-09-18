package clonee;

public class MemberExample {

	public static void main(String[] args) {
		
		Member original = new Member("blue", "ȫ�浿", "12345", 25, true);
		
		Member cloned = original.getMember();
		cloned.password = "67890";
		
		System.out.println(cloned);
		System.out.println();
		System.out.println(original);

	}

}
