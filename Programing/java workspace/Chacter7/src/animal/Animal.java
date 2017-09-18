package animal;

public abstract class Animal {
	public String kind; //추상 글래스
	
	public void breathe(){
		System.out.println("숨을 쉽니다.");
	}
	
	public abstract void sound(); //추상 메서드

}
