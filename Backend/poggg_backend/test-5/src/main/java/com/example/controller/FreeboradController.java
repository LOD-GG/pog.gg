package com.example.controller;


import javax.servlet.http.HttpSession;
import java.util.List;
import org.hibernate.validator.cfg.context.ReturnValueConstraintMappingContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.model.Freeboard;
import com.example.model.Users;
import com.example.service.Freeboard.FreeboardInfoService;
import com.example.service.Freeboard.FreeboardListService;
import com.example.service.Freeboard.FreeboardWriteService;

@CrossOrigin
@Controller
public class FreeboradController{
	
	
	
	
	@Autowired
	private FreeboardWriteService freeboardWriteService;
	
	
	
	private int returnIntValue(String stringToInt) {
		return Integer.parseInt(stringToInt);
	}
	
	
	
	
	@PostMapping("/freeboardWriteRequest")
	public String freeboardWriteRequest(@RequestBody Freeboard param) {
		String content = param.getContent();
		String title = param.getTitle();
		String writer = param.getWriter();
		
	
		
		freeboardWriteService.write(title, content, writer);
		//System.out.println()
		String page = "";
		return "freeboard";
		// return "redirect:/freeboard";
	}
	
}