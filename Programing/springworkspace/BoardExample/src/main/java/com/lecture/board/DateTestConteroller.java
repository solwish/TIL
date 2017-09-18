package com.lecture.board;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.springframework.beans.propertyeditors.CustomDateEditor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.InitBinder;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.lecture.board.dao.Product;

@Controller
@RequestMapping("/datetest")
public class DateTestConteroller {

	@RequestMapping(method = RequestMethod.GET)
	public String form() {
		return "datetest/product";
	}

	@RequestMapping(method = RequestMethod.POST)
	public String submit(Product product) {
		System.out.println(product);
		DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
		try {
			//Date --> 문자열
			String strDate = dateFormat.format(new Date());
			System.out.println(strDate);
			
			//문자열 --> Date
			Date date2 = dateFormat.parse("2016-06-01");
			System.out.println(date2);
		} catch (Exception e) {
			// TODO: handle exception
		}
		
		
		return "datetest/product_view";

	}
	
/*	@InitBinder
	protected void initBinder(WebDataBinder binder) {
		DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
		binder.registerCustomEditor(Date.class,
				new CustomDateEditor(dateFormat, true));
	}*/
}
