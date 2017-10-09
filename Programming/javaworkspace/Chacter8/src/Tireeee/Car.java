package Tireeee;

public class Car {
	private Tire[] tires={
			new HankookTire(),
			new HankookTire(),
			new HankookTire(),
			new HankookTire()
	};
	
	void chageTire(int i,Tire tire){
		this.tires[i]= tire;
	}
	
	void run(){
		for(Tire tire : tires){
			tire.roll();
		}
	}

}
