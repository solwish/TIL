package homework;

public class Member {
	private String id;
	private String name;
	private Gender gender;
	private String password;
	private int age;
	private String phoneNumber;

	public Member() {

	}

	public Member(String id, String name, Gender gender, String password, int age, String phoneNumber) {
		this.id = id;
		this.name = name;
		this.gender = gender;
		this.password = password;
		this.age = age;
		this.phoneNumber = phoneNumber;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Gender getGender() {
		return gender;
	}

	public void setGender(Gender gender) {
		this.gender = gender;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public String getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

	@Override
	public String toString() {
		return "Member [id=" + id + ", name=" + name + ", gender=" + gender + ", password=" + password + ", age=" + age
				+ ", phoneNumber=" + phoneNumber + "]";
	}

//	@Override
//	public int hashCode() {
//		return id.hashCode();
//	}
//
//	@Override
//	public boolean equals(Object obj) {
//		if (obj instanceof Member) {
//			Member member = (Member) obj;
//			return (id == member.id);
//		}
//		return false;
//	}
	
}


