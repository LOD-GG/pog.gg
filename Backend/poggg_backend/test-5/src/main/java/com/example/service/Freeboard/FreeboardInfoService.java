package com.example.service.Freeboard;

import java.util.Optional;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.model.Freeboard;
import com.example.repository.FreeboardRepository;

@Service
public class FreeboardInfoService {
	
	@Autowired
	private FreeboardRepository freeboardRepository;
	
	@Autowired
	private HttpSession session;
	
	public Freeboard getFreeboardPost(String stringFreeId) {
		Long freeId = Long.parseLong(stringFreeId);
		Freeboard freeboard = freeboardRepository.findByFreeId(freeId);
		if(freeboard == null) {
			return freeboard;
		}
		
		session.setAttribute("freeboard", freeboard);
		return freeboard;
	}
}
