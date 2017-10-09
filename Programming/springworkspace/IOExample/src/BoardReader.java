import java.io.FileInputStream;
import java.io.ObjectInputStream;
import java.util.ArrayList;

public class BoardReader {

	public static void main(String[] args) throws Exception {

		FileInputStream fis = new FileInputStream("C:/temp/board.dat");
		ObjectInputStream ois = new ObjectInputStream(fis);

		ArrayList<Board> list = (ArrayList<Board>) ois.readObject();
		Board.objectId = (int)ois.readObject();
		for (Board board : list) {
			System.out.println(board);
			System.out.println("objectId : " + Board.objectId);
		}
		ois.close();
		fis.close();
	}

}
