package com.lecture.spring.test;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import homenetwork.BookClient;
import homenetwork.SystemMoniter;

public class DItest2 {
	public static void main(String[] args){
	
	String config = "homenetworkContext.xml";
	ApplicationContext ctx = new ClassPathXmlApplicationContext(config);
	
	SystemMoniter m1 = ctx.getBean("monitor1", SystemMoniter.class);
	SystemMoniter monitor2 = ctx.getBean("monitor2", SystemMoniter.class);
	SystemMoniter monitor3 = ctx.getBean("monitor3", SystemMoniter.class);
	
	System.out.println(m1);
	System.out.println(monitor2);
	System.out.println(monitor3);
	
	BookClient aa = ctx.getBean("client", BookClient.class);
	
	aa.connect();
	
	}
	
	
	
}
