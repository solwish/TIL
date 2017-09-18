
public class Calculator {

	Power power;// = Power.OFF;
	CalcMode mode; // = CalcMode.NORMAL;

	Calculator() {

		mode = CalcMode.NORMAL;
		power = Power.OFF;
	}
//	public 은 써줘도 그만 안써줘도 그만
	public Calculator(CalcMode mode) {
		this.mode = mode;
		power = Power.OFF;

	}

	void powerOn() {

		this.power = Power.ON;
		System.out.println("전원을 켭니다.");
	}

	int plus(int x, int y) {

		if (power == power.OFF) {
			System.out.println("전원이 꺼져있습니다.");
			return Integer.MIN_VALUE;

		}
		int result = x + y;

		return result;
	}
	

	double divide(int x, int y) {
		
		if (power == power.OFF) {
			System.out.println("전원이 꺼져있습니다.");
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
		System.out.println("전원을 끕니다.");
	}

}
