
public class Calcul {

	Power power = Power.OFF;
	CalcMode mode = CalcMode.NORMAL;

	void powerOn(){
		this.power= Power.ON;
		
	}
	
	
	int add(int x, int y) {
		int result = x + y;
		return result;
	}


	@Override
	public String toString() {
		return "Calcul [power=" + power + ", mode=" + mode + "]";
	}

	
	
}
