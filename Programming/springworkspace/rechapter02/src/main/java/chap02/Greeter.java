package chap02;

public class Greeter {
	
	public String format;
	
	public Greeter(String format) {
		super();
		this.format = format;
	}

	public Greeter() {
		super();
	}
	
	
	
	
	public String greet(String guest){
		return String.format(format, guest);
	}

	public void setFormat(String format) {
		this.format = format;
	}


	
	

}
