
public class MemberExample {

	public static void main(String[] args) {
		Member obj1 = new Member("blue", 10);
		Member obj2 = new Member("blue", 10);
		Member obj3 = new Member("red", 30);
		
		if(obj1.equals(obj2)){
			System.out.println("obj1�� obj2�� �����մϴ�.");
		}else{
			System.out.println("obj1�� obj2�� �������� �ʽ��ϴ�.");
		}
		
		if(obj1.equals(obj3)){
			System.out.println("obj1�� obj3�� �����d�ϴ�.");
		}else{
			System.out.println("obj1�� obj3�� �������� �ʽ��ϴ�.");
		}
		
	
		
	}

}
