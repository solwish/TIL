
public class LuxuryHello {

	public static void main(String[] args) {
		
		/*
		printCharacter('=',30);
		printCharacter('-',30);
		System.out.println('\t'+" "+"Hello, Java");
		printCharacter('-', 30);
		printCharacter('=',30);

	}
	
	static void printCharacter(char ch, int num) {
		for (int cnt = 0; cnt < num; cnt=cnt+1){
			if(cnt%2==0) {
					System.out.print(ch);
			}
			else {
			System.out.print("*");
		}}
		System.out.println();
	}
	

		*/
		int result;
		result = add(3,4);
		System.out.println(result);
		double result22;
		result22 = average(3,4);
		System.out.println(result22);
		
	}
	
	static int add(int num1, int num2) {
		int sum;
		sum = num1 + num2;
		return sum;
		
		
	}
	
	static double average(int ch1, int ch2){
		double aver;
		//aver= ((double)ch1+(double)ch2)/2;
		aver = add(ch1,ch2)/2.;
		return aver;
				
		
	}
	
	}



