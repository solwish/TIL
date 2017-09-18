package com.example.spring;

import org.springframework.beans.factory.annotation.Required;

public class camera {
	private int number;
	
	@Required
	public void setNumber(int number) {
		this.number = number;
	}

	@Override
	public String toString() {
		return "camera [number=" + number + "]";
	}

}
