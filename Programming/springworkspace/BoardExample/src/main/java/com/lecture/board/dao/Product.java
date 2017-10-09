package com.lecture.board.dao;

import java.util.Date;

import org.springframework.format.annotation.DateTimeFormat;

public class Product {
	private String name;
	
	@DateTimeFormat(pattern="yyyy-MM-dd")
	private Date productDate;

	public Product(String name, Date productDate) {
		super();
		this.name = name;
		this.productDate = productDate;
	}

	public Product() {
		super();
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Date getProductDate() {
		return productDate;
	}

	public void setProductDate(Date productDate) {
		this.productDate = productDate;
	}

	@Override
	public String toString() {
		return "Product [name=" + name + ", productDate=" + productDate + "]";
	}
}
