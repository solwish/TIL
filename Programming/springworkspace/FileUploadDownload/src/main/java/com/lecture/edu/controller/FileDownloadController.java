package com.lecture.edu.controller;

import java.io.File;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class FileDownloadController {
	
	@RequestMapping(value="/download", method = RequestMethod.GET)
	public ModelAndView download(@RequestParam("fileNo") String fileNo){
		System.out.println(fileNo);
		File file = new File("c:/temp/upload/" + fileNo);
		return new ModelAndView("download", "downloadFile", file);
		
	}

}
