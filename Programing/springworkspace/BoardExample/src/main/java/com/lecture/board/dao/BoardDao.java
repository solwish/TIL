package com.lecture.board.dao;

import java.util.ArrayList;
import java.util.List;

import com.lecture.board.dto.Board;

public interface BoardDao {

	List<Board> list();

	int write(Board board);

	Board findView(int num);

	void increateReadCnt(int num);

	int remove(int num);

	int update(Board board);

}