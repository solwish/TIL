
public class MemberBean {

	private String name;
	private String userid;
	
	
	


	public MemberBean(String name, String userid) {
		super();
		this.name = name;
		this.userid = userid;
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


	public MemberBean() {
		// TODO Auto-generated constructor stub
	}
	@Override
	public String toString() {
		return "MemberBean [name=" + name + ", userid=" + userid + "]";
	}
}
