import java.io.FileInputStream;
import java.io.InputStream;

public class ByteStreamExample2 {

	public static void main(String[] args) {

		try (InputStream is = new FileInputStream("C:/Temp/text.txt");) {
			int size = 0;
			int data;
			while ((data = is.read()) != -1) {
				byte b = (byte) data;
				System.out.println(b + "--" + (char) b);
				size++;

			}

			System.out.println("파일크기 : " + size);
		} catch (Exception e) {
			e.printStackTrace();
		}
		// System.out.println("파일크기 : " + size);
	}

}
