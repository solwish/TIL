package theory;

public class PiboEx01 {

	public static void main(String[] args) {
		
//		 1 + 1 + 2 + 5 + 8 + 13 + ... 의 순서로 나열되는
//		피보나치수열의 10번째 항까지의 합계를 구하는 순서도를 작성하시오.
		
		int a = 1;
		int b = 1;
		int sum = 2;
				
		for(int i=2;i<=9; i++){
			int c = a+b;
			sum = sum + c;
			a = b;
			b = c;
		}
		
		System.out.println("10번째 항까지의 합은 " + sum);
		
		
	}

}
