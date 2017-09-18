package edu.example.beans;

public class MemberBean {

	private String userid;
	private String name;
	private String nickname;
	private String pwd;
	private String email;
	private String phone;
	private int age;

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public String getNickname() {
		return nickname;
	}

	public void setNickname(String nickname) {
		this.nickname = nickname;
	}

	public String getPwd() {
		return pwd;
	}

	public void setPwd(String pwd) {
		this.pwd = pwd;
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

	public MemberBean(String userid, String name, String nickname, String pwd, String email, String phone) {
		super();
		this.userid = userid;
		this.name = name;
		this.nickname = nickname;
		this.pwd = pwd;
		this.email = email;
		this.phone = phone;
	}

	public MemberBean(String userid, String name, String nickname, String pwd, String email, String phone, int age) {
		super();
		this.userid = userid;
		this.name = name;
		this.nickname = nickname;
		this.pwd = pwd;
		this.email = email;
		this.phone = phone;
		this.age = age;
	}

	public MemberBean() {
	}

	public MemberBean(String userid, String name) {
		super();
		this.userid = userid;
		this.name = name;
	}

	public String getUserid() {
		return userid;
	}

	public void setUserid(String userid) {
		this.userid = userid;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	@Override
	public String toString() {
		return "MemberBean [userid=" + userid + ", name=" + name + ", nickname=" + nickname + ", pwd=" + pwd
				+ ", email=" + email + ", phone=" + phone + "]";
	}

}
