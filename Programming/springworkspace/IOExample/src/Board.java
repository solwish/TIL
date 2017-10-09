

import java.io.Serializable;
import java.util.Date;

/*import org.springframework.format.annotation.DateTimeFormat;*/

public class Board implements Serializable {
	public static int objectId = 0;
	
	private int num;
	private String title;
	private String writer;
	private int readCnt;
	private String Content;
	private Date regDate;
	private Date updateDate;
	
	public Date getRegDate() {
		return regDate;
	}

	public void setRegDate(Date regDate) {
		this.regDate = regDate;
	}

	public Date getUpdateDate() {
		return updateDate;
	}

	public void setUpdateDate(Date updateDate) {
		this.updateDate = updateDate;
	}

	public Board() {
		num = objectId++;
	}

	public Board(String title, String writer, int readCnt, String content) {
		super();
		this.num = objectId++;
		this.title = title;
		this.writer = writer;
		this.readCnt = readCnt;
		this.Content = content;
	}

	public int getNum() {
		return num;
	}

	public String getTitle() {
		return title;
	}

	public String getWriter() {
		return writer;
	}

	public int getReadCnt() {
		return readCnt;
	}

	public String getContent() {
		return Content;
	}

	public void setNum(int num) {
		this.num = num;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public void setWriter(String writer) {
		this.writer = writer;
	}

	public void setReadCnt(int readCnt) {
		this.readCnt = readCnt;
	}

	public void setContent(String content) {
		Content = content;
	}

	@Override
	public String toString() {
		return "Board [num=" + num + ", title=" + title + ", writer=" + writer + ", readCnt=" + readCnt + ", Content="
				+ Content + "]";
	}

}
