package seventeenthMay;

public class Car {
	// 필드
	
	
	private int gas;
	private int distance;

	// int inputGas;
	// 생성자

	
	///////싱글톤
	static private Car car = new Car(1000);
	private Car(int distance){
		this.distance = distance;
	}
	public static Car getInstance(){
		return car;
	}
	/////////////////
	
	int getDistance(){
		return distance;
	}
	
	
	
	
	// 메소드
	void setGas(int gas) {
		this.gas = gas;
	}

	boolean isLeftGas() {

		if (gas == 0) {
			System.out.println("gas가 없습니다.");

			return false;
		}
		System.out.println("gas가 있습니다.");
		{
			return true;
		}

	}

	void run() {

		while (true) {

			if (gas > 0) {
				if (distance <= 0) {
					break;
				}
				System.out.println("달립니다.(gas잔량:" + gas + ")");
				gas = gas - 1;
				distance = distance - 1;

			} else if (distance < 0) {
				return;
			} else {
				System.out.println("멈춥니다.(gas잔량:" + gas + ")");
				return;
			}
		}
	}

}
