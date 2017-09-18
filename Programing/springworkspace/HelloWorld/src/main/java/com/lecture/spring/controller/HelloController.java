package com.lecture.spring.controller;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.lecture.spring.HomeController;

@Controller
public class HelloController {
	private static final Logger logger = 
			LoggerFactory.getLogger(HomeController.class);
	
	@RequestMapping("/hello")
	public ModelAndView hello() {
		logger.info("/hello 요청 처리");
		
		ModelAndView mav = new ModelAndView();
		mav.setViewName("test/hello");
		mav.addObject("greeting", getGreeting());
		
		return mav;	
				
	}
	private String getGreeting() {
		return "안녕하세요";
	}
}
