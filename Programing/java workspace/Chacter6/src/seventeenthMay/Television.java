package seventeenthMay;

public class Television {
	static String company = "���";
	static String model = "���Ҵ�LED";
	static String info;
	
	static{
		info=company+ "-" +model;
	}

	@Override
	public String toString() {
		return "Television [getClass()=" + getClass() + ", hashCode()=" + hashCode() + ", toString()="
				+ super.toString() + "]";
	}
	

}
