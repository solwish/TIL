package com.lecture.spring.basic;

import org.springframework.stereotype.Component;

@Component
public class MySQLArticleDao implements ArticleDao {

	@Override
	public void insert(Article article) {
		
		System.out.println("MySQLArticleDao.insert() 실행");

	}

}
