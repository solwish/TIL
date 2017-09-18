package chap02;

public class Greeter {

	private String format;

	public String Greet(String guest) {
		return String.format(format, guest);
				
	}

	public void setFormat(String format) {
		this.format = format;
	}



	
	
}
