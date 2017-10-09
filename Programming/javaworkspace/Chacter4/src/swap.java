
public class swap {

	public static void main(String[] args) {
		int num1 = 10;
		int num2 = 20;
		
		swap(num1,num2);
		
		System.out.println(num1);
		System.out.println(num2);
		

	}
	
	static void swap(int num1, int num2){
		int temp;
		temp = num1;
		num1 = num2;
		num2 = temp;
	}

}
