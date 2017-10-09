import java.io.FileInputStream;
import java.io.InputStream;

public class ByteStreamExample {

	public static void main(String[] args) {
		int size = 0;
		int readByte;
		
		try (InputStream is = new FileInputStream("C:/Temp/Koala.jpg");) {
	//		readByte = is.read()
			int totalSize=0;
			int readSize=0;
			byte []data = new byte[100];
			
			while ((readSize = is.read(data)) != -1) {
				System.out.println(readSize);
				totalSize +=  readSize;
				//size++;
			}
			
			System.out.println("파일크기 : " + totalSize);
		} catch (Exception e) {
			e.printStackTrace();
		}
	//	System.out.println("파일크기 : " + size);
	}

}
