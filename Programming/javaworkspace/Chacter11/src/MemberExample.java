
public class MemberExample {

	public static void main(String[] args) {
		Member obj1 = new Member("blue", 10);
		Member obj2 = new Member("blue", 10);
		Member obj3 = new Member("red", 30);
		
		if(obj1.equals(obj2)){
			System.out.println("obj1과 obj2는 동등합니다.");
		}else{
			System.out.println("obj1과 obj2는 동등하지 않습니다.");
		}
		
		if(obj1.equals(obj3)){
			System.out.println("obj1과 obj3는 동등홥니다.");
		}else{
			System.out.println("obj1과 obj3는 동등하지 않습니다.");
		}
		
	
		
	}

}
