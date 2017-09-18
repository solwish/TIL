package com.lecture.forest.dao;

import java.util.List;

import com.lecture.forest.dto.MemberVO;

public interface MemberDao {
	// mapper의 id와 동일하게 메서드명 지정
	int selectCount();

	List<MemberVO> selectList();

	MemberVO selectOne(String userid);

	int insert(MemberVO member);

	int update(MemberVO member);

	int delete(String userid);
}
