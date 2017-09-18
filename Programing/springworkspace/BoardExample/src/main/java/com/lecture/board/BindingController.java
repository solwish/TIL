package com.lecture.board;

import java.util.jar.Attributes.Name;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("/test/simpleTest")
public class BindingController {

	@RequestMapping(method = RequestMethod.GET)
	public String simpleTestForm() {
		return "test/simpleTestForm";
	}

	@RequestMapping(method = RequestMethod.POST)
	@ResponseBody
	public String simpleTest(@RequestBody String body,
			@RequestParam(value="age", defaultValue = "1") int age) {
		if (age < 19) {
			return "fail";
		} else {
			return "successs";
		}
	}

}
