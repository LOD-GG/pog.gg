package com.example.service.Freeboard;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.time.LocalDateTime;

import com.example.model.Freeboard;
import com.example.repository.FreeboardRepository;

@Service
public class FreeboardWriteService {

	@Autowired
	FreeboardRepository freeboardRepository;
	
	public void write(String postTitle, String content, String writer) {
		LocalDateTime date =LocalDateTime.now();
		
		Freeboard freeboard = new Freeboard();
		freeboard.setTitle(postTitle);
		freeboard.setContent(content);
		freeboard.setWriter(writer);
		freeboard.setDate(date);
		freeboardRepository.save(freeboard);
	}
}
