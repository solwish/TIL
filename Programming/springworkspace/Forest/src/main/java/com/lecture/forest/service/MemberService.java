package com.lecture.forest.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.lecture.forest.dao.MemberDao;
import com.lecture.forest.dto.MemberVO;

@Service
@Repository
public class MemberService {

	@Autowired
	private MemberDao dao;

	
	public MemberVO getMember(String id) {
		MemberVO member = dao.selectOne(id);
		return member;
	}

	public List<MemberVO> getMemberList() {
		List<MemberVO> list = dao.selectList();
		return list;
	}

	public int getMemberCount() {
		return dao.selectCount();
	}
	
	@Transactional
	public int insert(MemberVO member) {
		int result = dao.insert(member);
		return result;
	}
	
	@Transactional
	public int update(MemberVO member) {
		int result = dao.update(member);
		return result;		
	}
	
	@Transactional
	public int delete(String id) {
		int result = dao.delete(id);
		return result;
	}

}
