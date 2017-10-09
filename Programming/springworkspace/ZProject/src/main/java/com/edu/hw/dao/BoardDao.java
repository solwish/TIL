package com.edu.hw.dao;

import java.util.List;

import com.edu.hw.dto.Board;

public interface BoardDao {
	
	Board findView(int num);
	List<Board> list();
	int write(Board board);
	int update(Board board);
	int remove(int num);
	int increaseReadCnt();

}
