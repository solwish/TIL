package seventeenthMay;

public class CalculatorExample {

	public static void main(String[] args) {
		
		double result1=10*10*Calculator.pi;
		Calculator result2 = new Calculator();
		
		int result3 = Calculator.minus(10,5);
		
		System.out.println(result1);
		System.out.println(result2.plus(10, 5));
		System.out.println(result3);
		
	}

}
