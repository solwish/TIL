package com.edu.hw.dto;

import java.io.Serializable;
import java.util.Date;

public class Board implements Serializable {
	
	private int num;
	private String writer;
	private String title;
	private Date regDate;
	private int readCnt;
	private String content;
	
	public Board() {
		
	}

	public Board(int num, String writer, String title, Date regDate, int readCnt, String content) {
		
		this.num = num;
		this.writer = writer;
		this.title = title;
		this.regDate = regDate;
		this.readCnt = readCnt;
		this.content = content;
	}

	public int getNum() {
		return num;
	}

	public void setNum(int num) {
		this.num = num;
	}

	public String getWriter() {
		return writer;
	}

	public void setWriter(String writer) {
		this.writer = writer;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public Date getRegDate() {
		return regDate;
	}

	public void setRegDate(Date regDate) {
		this.regDate = regDate;
	}

	public int getReadCnt() {
		return readCnt;
	}

	public void setReadCnt(int readCnt) {
		this.readCnt = readCnt;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	@Override
	public String toString() {
		return "BoardVO [num=" + num + ", writer=" + writer + ", title=" + title + ", regDate=" + regDate + ", readCnt="
				+ readCnt + ", content=" + content + "]";
	}

	
	
}
