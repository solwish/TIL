package com.lecture.forest.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.lecture.forest.dto.MemberVO;
import com.lecture.forest.service.MemberService;

@Controller
public class MemberController {

	@Autowired
	MemberService service;

	@RequestMapping(value = "/list", method = RequestMethod.GET)
	public String list(Model model) {
		List<MemberVO> list = service.getMemberList();

		// System.out.println(list);
		model.addAttribute("list", list);

		return "member/list";
	}

	@RequestMapping(value = "/view", method = RequestMethod.GET)
	public String getMember(@RequestParam("userid") String userid, Model model) {
		MemberVO member = service.getMember(userid);
		if (member == null) {
			String message = "찾는 회원이 없습니다.";
			model.addAttribute("message", message);
		} else {
			model.addAttribute("member", member);
		}
		return "member/view";
	}

	@RequestMapping(value = "/join", method = RequestMethod.GET)
	public String joinForm() {

		return "member/join";
	}

	@RequestMapping(value = "/join", method = RequestMethod.POST)
	public String joinSubmit(MemberVO member) {

		System.out.println(member);

		int result = service.insert(member);

		if (result == 1)
			return "redirect:list";
		else
			return "member/join";
	}

	@RequestMapping(value = "/update", method = RequestMethod.GET)
	public String updateForm(@RequestParam("userid") String userid, Model model) {
		MemberVO member = service.getMember(userid);
		model.addAttribute("member", member);

		return "member/update";
	}

	@RequestMapping(value = "/update", method = RequestMethod.POST)
	public String updateSumit(@ModelAttribute("member") MemberVO member) {

		// System.out.println(member);

		int result = service.update(member);
		if (result == 1)
			return "redirect:list";
		else
			return "member/update";

	}

	@RequestMapping(value = "/delete", method = RequestMethod.GET)
	public String deleteForm(@RequestParam("userid") String userid) {
		System.out.println(userid);
		int result = service.delete(userid);
		System.out.println(result);

		return "redirect:list";

	}
	
	@RequestMapping(value="/idcheck", method=RequestMethod.GET)
	@ResponseBody
	public String idcheck(@RequestParam("userid") String userid){
		MemberVO member = service.getMember(userid);
		if(member== null) return "ok";
		else return "fail";
		
	}
}
