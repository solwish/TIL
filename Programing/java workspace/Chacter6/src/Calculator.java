
public class Calculator {

	Power power;// = Power.OFF;
	CalcMode mode; // = CalcMode.NORMAL;

	Calculator() {

		mode = CalcMode.NORMAL;
		power = Power.OFF;
	}
//	public �� ���൵ �׸� �Ƚ��൵ �׸�
	public Calculator(CalcMode mode) {
		this.mode = mode;
		power = Power.OFF;

	}

	void powerOn() {

		this.power = Power.ON;
		System.out.println("������ �մϴ�.");
	}

	int plus(int x, int y) {

		if (power == power.OFF) {
			System.out.println("������ �����ֽ��ϴ�.");
			return Integer.MIN_VALUE;

		}
		int result = x + y;

		return result;
	}
	

	double divide(int x, int y) {
		
		if (power == power.OFF) {
			System.out.println("������ �����ֽ��ϴ�.");
			return Double.MIN_VALUE;
		}
		double result;
		if(mode == CalcMode.ENGINEERING){
			result = (double) x / (double) y;
		}else{
			result=x/y;
		}
		
		return result;
	}

	void poweroff() {
		System.out.println("������ ���ϴ�.");
	}

}
