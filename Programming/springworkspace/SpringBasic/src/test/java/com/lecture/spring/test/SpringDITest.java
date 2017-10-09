package com.lecture.spring.test;

import org.springframework.beans.factory.BeanFactory;
import org.springframework.beans.factory.xml.XmlBeanFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;

import com.lecture.spring.basic.Article;
import com.lecture.spring.basic.WriteArticleService;

public class SpringDITest {
	
	public static void main(String[] args){
		
		ApplicationContext ctx = 
				new ClassPathXmlApplicationContext("applicationContext.xml");
				
		WriteArticleService articleService = 
				(WriteArticleService) ctx.getBean("writeArticleServiceImpl");
				
		articleService.write(new Article());
	}

}
