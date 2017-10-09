
public class ProductExample {

	public static void main(String[] args) {
		Product<Tv, String> product1 = new Product<>();
		product1.setKind(new Tv());
		product1.setModel("½º¸¶Æ® Tv");
		Tv tv = product1.getKind();
		String tvModel = product1.getModel();
		
		Product<Car, String> product2 = new Product<>();
		product2.setKind(new Car());
		product2.setModel("µðÁ©");
		Car car = product2.getKind();
		String carModel = product2.getModel();
		
		System.out.println(product1);
		System.out.println(product2);
	
	}

}
