package com.example.jeonseungmin.domain.post;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import java.util.Date;

@Entity
public class Comment {
    public Comment(){
    }

    public Comment(int recommended, Date reg_date, String content, String writer, Long post_id, Long comment_id) {
        this.recommended = recommended;
        this.regDate = reg_date;
        this.content = content;
        this.writer = writer;
        this.postId = post_id;
        this.commentId = comment_id;
    }

    private int recommended;
    @Column(name = "reg_date")
    private Date regDate;
    private String content;
    private String writer;
    @Column(name = "post_id")
    private Long postId;
    @Id
    @Column(name = "comment_id")
    private Long commentId;


    public Long getPost_id() {
        return postId;
    }

    public void setPost_id(Long post_id) {
        this.postId = post_id;
    }

    public Long getComment_id() {
        return commentId;
    }

    public void setComment_id(Long comment_id) {
        this.commentId = comment_id;
    }

    public int getRecommended() {
        return recommended;
    }

    public void setRecommended(int recommended) {
        this.recommended = recommended;
    }

    public Date getReg_date() {
        return regDate;
    }

    public void setReg_date(Date reg_date) {
        this.regDate = reg_date;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getWriter() {
        return writer;
    }

    public void setWriter(String writer) {
        this.writer = writer;
    }
}
