import java.io.FileOutputStream;
import java.io.OutputStream;

public class OutputStreamExample {
	
	public static void main(String[] args) {
		try (OutputStream os = 
				new FileOutputStream("c:/temp/output.txt")){
			String str1 = "Hello";
			String str2 = "안녕하세요";
			
			byte[] buffer = str1.getBytes();
			os.write(buffer);
			buffer = str2.getBytes();
			os.write(buffer);
			System.out.println("파일 작성 완료");
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

}
