package com.lecture.board.dto;

import java.io.Serializable;
import java.util.Date;

import org.springframework.format.annotation.DateTimeFormat;

public class Board implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	private int num;
	private String title;
	private String writer;
	private int readCnt;
	private String Content;
	private Date regDate;
	private Date updateDate;

	public Board() {}


	public Board(int num, String title, String writer, int readCnt, String content, Date regDate, Date updateDate) {
		super();
		this.num = num;
		this.title = title;
		this.writer = writer;
		this.readCnt = readCnt;
		Content = content;
		this.regDate = regDate;
		this.updateDate = updateDate;
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

	@Override
	public String toString() {
		return "Board [num=" + num + ", title=" + title + ", writer=" + writer + ", readCnt=" + readCnt + ", Content="
				+ Content + "]";
	}

}
