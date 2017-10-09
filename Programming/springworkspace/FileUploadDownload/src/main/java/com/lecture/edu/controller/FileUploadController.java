package com.lecture.edu.controller;

import java.io.File;
import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import com.lecture.edu.command.ReportCommand;

@Controller
public class FileUploadController {

	@RequestMapping(value = "/upload", method = RequestMethod.GET)
	public String form() {
		return "upload/upload-form";
	}

	@RequestMapping(value = "/upload", method = RequestMethod.POST)
	public String sumit(MultipartHttpServletRequest request, Model model) {
		List<MultipartFile> file = request.getFiles("file");
		String fileName = null;
		long fileNo = System.currentTimeMillis();
		
		String[] fileT = new String [file.size()];
		for (int i = 0; i < file.size(); i++) {
			if (!file.isEmpty()) {
					
				System.out.println(file); 
				System.out.println(i);
				fileName= "c:/temp/upload/" + fileNo + "_" + i;
				File upload = new File(fileName);
				try {
					file.get(i).transferTo(upload);
					
					fileT[i]= fileNo + "_" + i;
					System.out.println(fileT[i]);
				} catch (Exception e) {
					e.printStackTrace();
				}
			}
			
			model.addAttribute("fileNo", fileT);
			System.out.println(fileT);
		}

		return "upload/upload";
	}

}