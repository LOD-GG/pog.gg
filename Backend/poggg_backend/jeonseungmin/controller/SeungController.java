package com.example.jeonseungmin.controller;

import com.example.jeonseungmin.Repository.CommentRepository;
import com.example.jeonseungmin.domain.post.Comment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@RestController
@EnableAutoConfiguration
public class SeungController {
    @Autowired
    CommentRepository repository;

    @RequestMapping(path = "/")
    public String index() {
        return "hello world!";
    }

    @RequestMapping(path = "/test")
    public Comment test(){
        return repository.save(new Comment(0,new Date(),"a","b",0L,0L));
    }

    @PostMapping(path = "/makeComment")
    public Comment makeComment(@RequestBody Comment comment) {
        return repository.save(comment);
    }

    @PatchMapping(path = "/ddabbong")
    public Comment ddabbong(@RequestParam Long comment_id) {
        Optional<Comment> optional = repository.findById(comment_id);
        if(!optional.isPresent()){
            //널일 경우
            throw new RuntimeException();
        } else {
            Comment comment = optional.get();
            comment.setRecommended(comment.getRecommended()+1);
            repository.save(comment);
            return comment;
        }
    }

    @GetMapping(path = "/showByComment_id")
    public List<Comment> showByComment_id(@RequestParam Long post_id)
    {
        return repository.findByPostIdOrderByRegDateDesc(post_id);
    }

    @GetMapping(path = "/showByRecommended")
    public List<Comment> showByRecommended(@RequestParam Long post_id)
    {
        return repository.findByPostIdOrderByRecommendedDesc(post_id);
    }

    public static void main(String[] args) {
        SpringApplication.run(SeungController.class, args);
    }
}
