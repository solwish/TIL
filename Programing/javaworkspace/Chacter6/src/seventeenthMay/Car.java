package seventeenthMay;

public class Car {
	// �ʵ�
	
	
	private int gas;
	private int distance;

	// int inputGas;
	// ������

	
	///////�̱���
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
	
	
	
	
	// �޼ҵ�
	void setGas(int gas) {
		this.gas = gas;
	}

	boolean isLeftGas() {

		if (gas == 0) {
			System.out.println("gas�� �����ϴ�.");

			return false;
		}
		System.out.println("gas�� �ֽ��ϴ�.");
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
				System.out.println("�޸��ϴ�.(gas�ܷ�:" + gas + ")");
				gas = gas - 1;
				distance = distance - 1;

			} else if (distance < 0) {
				return;
			} else {
				System.out.println("����ϴ�.(gas�ܷ�:" + gas + ")");
				return;
			}
		}
	}

}
