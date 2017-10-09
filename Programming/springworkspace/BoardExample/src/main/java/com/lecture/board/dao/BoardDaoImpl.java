package com.lecture.board.dao;

import java.util.ArrayList;
import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.lecture.board.dto.Board;

@Repository
public class BoardDaoImpl implements BoardDao {

	private static final String namepspace="com.lecture.board.dao.BoardDao";
	
	@Autowired 
	private SqlSessionTemplate sqlSession;
	
	@Override
	public List<Board> list() {
		return sqlSession.selectList(namepspace + ".list");
	}

	@Override
	public int write(Board board) {
		
		return sqlSession.selectOne(namepspace + ".write", board);
	}

	@Override
	public Board findView(int num) {
		
		return sqlSession.selectOne(namepspace + ".findView", num);
	}

	@Override
	public void increateReadCnt(int num) {
		// 이거 몰랑 

	}

	@Override
	public int remove(int num) {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	@Transactional
	public int update(Board board) {
		return sqlSession.insert(namepspace + ".update", board);
	}

}
