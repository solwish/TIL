import java.io.BufferedInputStream;
import java.io.FileInputStream;

public class BufferednputStreamExample {

	public static void main(String[] args) throws Exception {
		long start = 0;
		long end = 0;
		
		FileInputStream fis1 = new FileInputStream("C:/Users/student/Downloads/nProtectOnlineSecurity.exe");
		start = System.currentTimeMillis();
		while(fis1.read() != -1){}
		end = System.currentTimeMillis();
		System.out.println("버퍼 사용 안했을 때"+ ((end-start)*0.001)+" s");
		fis1.close();
		
		FileInputStream fis2 = new FileInputStream("C:/Users/student/Downloads/nProtectOnlineSecurity.exe");
		BufferedInputStream bis = new BufferedInputStream(fis2);
		start = System.currentTimeMillis();
		while(bis.read() != -1){}
		end = System.currentTimeMillis();
		System.out.println("버퍼 사용시 "+ ((end-start)*0.001)+" s");
		bis.close();
		fis2.close();
	}

}
