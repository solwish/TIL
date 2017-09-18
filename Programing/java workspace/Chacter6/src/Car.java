
public class Car {

	
		
		String company="현대자동차";
		String model;
		String color;
		int maxSpeed;
	//	int speed;
		
		Car() {}
	public Car(String model) {
	//	super();
		this(model, null, 0);
	//	this.model = model;
	}
	public Car(String model, String color) {
	//	super();
		this(model, color, 0);
		
		//	this.model = model;
	//	this.color = color;
	}
	public Car(String model, String color, int maxSpeed) {
		super();
		this.model = model;
		this.color = color;
		this.maxSpeed = maxSpeed;
	}
	@Override
	public String toString() {
		return "Car [company=" + company + ", model=" + model + ", color=" + color + ", maxSpeed=" + maxSpeed + "]";
	}
		
		
}
