package chap02;

import org.springframework.context.support.GenericXmlApplicationContext;

public class Main {

	public static void main(String[] args) {
		GenericXmlApplicationContext ctx = new GenericXmlApplicationContext(
						"classpath:applictationContext.xml");
		Greeter g1 =ctx.getBean("greeter", Greeter.class);
		Greeter g2 =ctx.getBean("greeter2", Greeter.class);
		
		System.out.println("(g1==g2) = " + (g1 == g2));
	/*	String msg = g.greet("스프링");
		System.out.println(msg);*/
		ctx.close();
		
	}
	
}
