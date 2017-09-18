package com.lecture.spring.basic;

import javax.annotation.PostConstruct;
import javax.annotation.Resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;

@Component
public class WriteArticleServiceImpl implements WriteArticleService {

	@Resource(name="mySQLArticleDao")
	private ArticleDao articleDao; // 의존 객체
	
	public WriteArticleServiceImpl() {
		System.out.println("서비스 객체 초기화");
	}

	
	
	
	@PostConstruct
	public void init() {
		System.out.println("DB 접근 준비 완료");
	}

	
	@Override
		public void write(Article article) {
		System.out.println("WriteArticleservice.라이트 메서드 실행");
		articleDao.insert(article);
		

	}

	

}
