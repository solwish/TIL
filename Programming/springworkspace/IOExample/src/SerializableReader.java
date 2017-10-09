import java.io.FileInputStream;
import java.io.ObjectInputStream;

public class SerializableReader {

	public static void main(String[] args) throws Exception {
		FileInputStream fis = new FileInputStream("C:/Temp/Object.dat");
		ObjectInputStream ois = new ObjectInputStream(fis);
		
		ClassA v = (ClassA) ois.readObject();
		
		System.out.println("filed1: "+ v.field1);
		System.out.println("filed2.field1: "+ v.field2.field1);
		System.out.println("field3: " + v.field3);
		System.out.println("field4: " + v.field4);
		
		ois.close();
		fis.close();
	}

}
