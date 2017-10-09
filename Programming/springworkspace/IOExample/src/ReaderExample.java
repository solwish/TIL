import java.io.FileReader;
import java.io.Reader;

public class ReaderExample {

	public static void main(String[] args) {
		
		try (Reader reader = new FileReader("C:/temp/text.txt")){
			int readData;
			
			while((readData=reader.read())!= -1){
				
				char charData = (char)readData;
				
				System.out.println(readData+"---"+charData);
			}
		} catch (Exception e) {
			// TODO: handle exception
		}
		

	}

}
