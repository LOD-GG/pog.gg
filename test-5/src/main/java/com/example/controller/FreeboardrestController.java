package com.example.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.model.Freeboard;
import com.example.service.Freeboard.FreeboardInfoService;
import com.example.service.Freeboard.FreeboardListService;

@CrossOrigin
@RestController
public class FreeboardrestController {

	@Autowired
	private FreeboardInfoService freeboardInfoService;
	
	@Autowired
	private FreeboardListService freeboardListService;
	
	
	private int returnIntValue(String stringToInt) {
		return Integer.parseInt(stringToInt);
	}
	
	@GetMapping("/freeboard") //String¹ÝÈ¯
	public List<Freeboard> freeboard(@RequestParam(value ="pageNum",defaultValue ="1")int pageNum) {
		//String page = freeboardListService.freeboardList(returnIntValue(pageNum));
		List<Freeboard> freeboardList = freeboardListService.freeboardList(pageNum);
		//return page; //"freeboard";
		return freeboardList;
	}
	

	@GetMapping("/freeBoardInfo")
	public Freeboard getPost(@RequestParam(value = "freeid") String freeId)
	{
		Freeboard info = freeboardInfoService.getFreeboardPost(freeId);
		return info;
	}
	
}
