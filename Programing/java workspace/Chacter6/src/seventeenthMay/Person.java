package seventeenthMay;

public class Person {
	final String nation = "korea";
	final String ssn;
	String name;
	
	public Person(String ssn, String name){
		this.ssn=ssn;
		this.name=name;
	}

	@Override
	public String toString() {
		return "Person [nation=" + nation + ", ssn=" + ssn + ", name=" + name + "]";
	}

}
