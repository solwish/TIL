import org.springframework.context.support.GenericApplicationContext;
import org.springframework.context.support.GenericXmlApplicationContext;

import chap02.Greeter;

public class test {

	public static void main(String[] args) {

	
		GenericXmlApplicationContext ctx = new GenericXmlApplicationContext(
				"classpath:applicationContext.xml");
		
			
		Greeter g = ctx.getBean("greeter", Greeter.class);
	
		String msg = g.Greet("스트링");
		System.out.println(msg);
		
		
	}

}
