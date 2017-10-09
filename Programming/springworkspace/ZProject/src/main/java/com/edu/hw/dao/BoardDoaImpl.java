package com.edu.hw.dao;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.edu.hw.dto.Board;

@Repository
public class BoardDoaImpl implements BoardDao {

	private static final String namespace="com.edu.hw.dao.BoardDao";
	
	@Autowired 
	private SqlSessionTemplate sqlSession;
	
	@Override
	public Board findView(int num) {
		
		return sqlSession.selectOne(namespace + ".findView", num);
	}

	@Override
	public List<Board> list() {
		
		return sqlSession.selectList(namespace + ".list");
	}

	@Override
	@Transactional
	public int write(Board board) {
		
		return sqlSession.selectOne(namespace + ".write", board);
	}

	@Override
	@Transactional
	public int update(Board board) {

		return sqlSession.selectOne(namespace + ".update", board);
	}

	@Override
	@Transactional
	public int remove(int num) {

		return sqlSession.delete(namespace + ".remove", num);
	}

	@Override
	@Transactional
	public int increaseReadCnt() {

		return sqlSession.selectOne(namespace + ".increaseReadCnt");
	}

}
