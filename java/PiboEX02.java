package zedu05;

public class PiboEX02 {

	public static void main(String[] args) {
//		1 + 1 + 2 + 3 + 5 + 8 + 13 + 21 +34�� �˰����� ���� ���϶�.
//		ó������
//		- A=����, B=����, T=���պ���, H=����
		
		int A = 1;
		int B = 1;
		int T = 2;
		int H = 0;
		
		while(H<34){
			H = A + B;
			T = T + H;
			A = B;
			B = H;
		}
		
		System.out.println("�˰����� ���� " + T);

	}

}
