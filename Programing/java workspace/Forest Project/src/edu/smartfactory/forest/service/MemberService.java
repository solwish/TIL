package edu.smartfactory.forest.service;

import java.util.LinkedList;
import java.util.List;

import edu.smartfactory.forest.exception.MemberNotFoundException;
import edu.smartfactory.forest.repository.Member;

public class MemberService {

	private MemberService() {
		list.add(new Member("test1", "테스트1", "1234", "test1@naver.com"));
		list.add(new Member("test2", "테스트2", "2345", "test2@naver.com"));
		list.add(new Member("test3", "테스트3", "3456", "test3@naver.com"));
		list.add(new Member("test4", "테스트4", "4567", "test4@naver.com"));
		list.add(new Member("test5", "테스트5", "5678", "test5@naver.com"));
	}
	
	public void add(Member member){
		list.add(member);
	}
	

	private static MemberService instance = new MemberService();

	public static MemberService getInstance() {
		return instance;
	}

//	private Member[] members = { new Member("test1", "테스트1", "1234", "test1@naver.com"),
//			new Member("test2", "테스트2", "2345", "test2@naver.com"),
//			new Member("test3", "테스트3", "3456", "test3@naver.com"),
//			new Member("test4", "테스트4", "4567", "test4@naver.com"),
//			new Member("test5", "테스트5", "5678", "test5@naver.com") };
	
	List<Member> list = new LinkedList<>();
	
// privateList<Member> members = Arrays.asList(new Member(asdfdsaklj));	
	

	
	
	public void print() {
		System.out.println("-------------------------------------------------------------------");
	//	 for(Member member : members){System.out.println(member)};
		for (int i = 0; i < list.size(); i++) {//여기 맞는지 불확실
			System.out.println(list);
		}
		System.out.println("-------------------------------------------------------------------");
		// System.out.println("총 회원수");
	}

	public Member findMember(String id) throws MemberNotFoundException {
		for (Member member : list) {//여기 맞는지 불확실
			if (id.equals(member.getId())) {

				return member;
			}
			
		}
		throw new MemberNotFoundException(id+"찾는 회원이 없습니다.");
	}
	
	
	
	

	// public Member findMember(String id) {
	// for (int i = 0; i < members.length; i++) {
	// if (id.equals(members[i].getId())) {
	//
	// System.out.println(members[i]);
	// return members[i];
	// }
	// }
	//
	// return null;
	// }

}
