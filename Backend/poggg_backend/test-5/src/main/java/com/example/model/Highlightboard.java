package com.example.model;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Table;

@Entity
@Table(name = "highlightboard")
public class Highlightboard {

	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "freeId")
	private Long freeId;
	
	@Column(name = "content")
	private String content;
	
	@Column(name = "title")
	private String title;
	
	@Column(name = "writer")
	private String writer;
	
	private LocalDateTime date;

}
