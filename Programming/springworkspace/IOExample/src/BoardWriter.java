import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.ObjectOutputStream;
import java.util.ArrayList;

public class BoardWriter {
	public static void main(String[] args) throws Exception {

		ArrayList<Board> list;

		list = new ArrayList<Board>();
		list.add(new Board("제목1", "홍길동", 0, "테스트1"));
		list.add(new Board("제목2", "홍길동", 0, "테스트1"));
		list.add(new Board("제목3", "홍길동", 0, "테스트1"));
		list.add(new Board("제목4", "홍길동", 0, "테스트1"));

		FileOutputStream fos = new FileOutputStream("C:/temp/board.dat");
		ObjectOutputStream oos = new ObjectOutputStream(fos);
		oos.writeObject(list);
		oos.writeObject(Board.objectId);
		oos.flush();
		oos.close();
		fos.close();

	}
}