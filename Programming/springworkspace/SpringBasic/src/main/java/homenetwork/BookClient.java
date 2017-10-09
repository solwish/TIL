package homenetwork;

import java.util.Properties;

public class BookClient {

	private Properties config;



	public void setConfig(Properties config) {
		this.config = config;
	}

	public void connect() {
		String serverIp = config.getProperty("server");
		System.out.println(serverIp + "로 접속합니다.");
		String userid = config.getProperty("userid");
		System.out.println(userid + "가 접속했음돠");
		String password = config.getProperty("password");
		System.out.println(userid+"의 비밀번호는 "+password);
		
	}
	
	

}
