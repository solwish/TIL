
public class CalculatorExample {

	public static void main(String[] args) {
		Calculator normal = new Calculator();
		Calculator engineering = new Calculator(CalcMode.ENGINEERING);
	//	Calculator myCalc = new Calculator();

	//	myCalc.powerOn();

		int result1 = normal.plus(2, 3);
		System.out.println("result1: " + result1);

		// byte x = 10;
		// byte y = 4;
		normal.powerOn();
		engineering.powerOn();

		System.out.println("결과" + normal.divide(2, 3));
		System.out.println("결과" + engineering.divide(2, 3));
	//	double result2 = myCalc.divide(x, y);
	//	System.out.println("result2: " + result2);

	//	myCalc.poweroff();

	}

}


