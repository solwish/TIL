package theory;

public class PiboEx01 {

	public static void main(String[] args) {
		
//		 1 + 1 + 2 + 5 + 8 + 13 + ... �� ������ �����Ǵ�
//		�Ǻ���ġ������ 10��° �ױ����� �հ踦 ���ϴ� �������� �ۼ��Ͻÿ�.
		
		int a = 1;
		int b = 1;
		int sum = 2;
				
		for(int i=2;i<=9; i++){
			int c = a+b;
			sum = sum + c;
			a = b;
			b = c;
		}
		
		System.out.println("10��° �ױ����� ���� " + sum);
		
		
	}

}
