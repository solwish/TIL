import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.example.spring.camera;

public class DITest {

	public static void main(String[] args) {
		
		
		
		ApplicationContext ctx = 
				new ClassPathXmlApplicationContext("ApplicationContext.xml");
		
		camera camera = ctx.getBean("camera", camera.class);
		System.out.println("Camera 추출 " + camera);
	}

}
