package com.lecture.edu.command;

import org.springframework.web.multipart.MultipartFile;

public class ReportCommand {
	private String studentNumber;
	private MultipartFile file;
	
	
	public String getStudentNumber() {
		return studentNumber;
	}

	public void setStudentNumber(String studentNumber) {
		studentNumber = studentNumber;
	}

	public MultipartFile getFile() {
		return file;
	}

	public void setFile(MultipartFile file) {
		this.file = file;
	}

}
