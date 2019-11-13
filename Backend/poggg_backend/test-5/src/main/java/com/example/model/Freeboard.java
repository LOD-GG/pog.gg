package com.example.model;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "freeboard")
public class Freeboard {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "freeId")
	private Long freeId;
	
	@Column(name = "content")
	private String content;
	
	@Column(name = "title")
	private String title;
	
	@Column(name = "writer")
	private String writer;
	
	@Column(name = "commentCount")
	private int commentCount;
	
	@Column(name = "voteCount")
    private int voteCount;
	
	private LocalDateTime date;

	public Long getFreeId() {
		return freeId;
	}
	public void setFreeId(Long freeId) {
		this.freeId=freeId;
	}
	public String getContent()
	{
		return content;
	}
	public void setContent(String content) {
		this.content=content;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title=title;
	}
	public String getWriter() {
		return writer;
	}
	public void setWriter(String writer) {
		this.writer=writer;
	}
	public LocalDateTime getDate() {
		return date;
	}
	public void setDate(LocalDateTime date) {
		this.date=date;
	}
	@Override
	public String toString() {
		return "freeId" + freeId;
	}
	
}
