import java.util.Scanner;

public class StarForExample {

	public static void main(String[] args) {
		System.out.println("값을 입력하세요>");
		Scanner scanner = new Scanner(System.in);
		int count = scanner.nextInt();
		for (int i = 1; i <= count; i++) {
			for (int k = count; k >= i; k--) {
				System.out.print(" ");
			}

			for (int j = 1; j <= 2 * i - 1; j++) {
				System.out.print("*");
			}
			System.out.println();
		}
	//	int x=1;
		for (int i = count; i >= 1; i--) {
			
			for (int k = count; k>i-2 ; k--) {
				System.out.print(" ");
			}
			for (int j = 3; j <= 2*i-1; j++) {
				System.out.print("*");
			}
	//		x++;
			System.out.println();
		}

	}

}
