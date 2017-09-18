package com.lecture.forest.dto;

public class MemberVO {
	private String name;
	private String userid;
	private String password;
	private String email;
	private String phone;
	private int admin;

	public MemberVO() {
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getUserid() {
		return userid;
	}

	public void setUserid(String userid) {
		this.userid = userid;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public int getAdmin() {
		return admin;
	}

	public void setAdmin(int admin) {
		this.admin = admin;
	}

	public MemberVO(String name, String userid, String password, String email, String phone, int admin) {
		super();
		this.name = name;
		this.userid = userid;
		this.password = password;
		this.email = email;
		this.phone = phone;
		this.admin = admin;
	}

	@Override
	public String toString() {
		return "MemberVO [name=" + name + ", userid=" + userid + ", password=" + password + ", email=" + email + ", phone="
				+ phone + ", admin=" + admin + "]";
	}
	
	

}
