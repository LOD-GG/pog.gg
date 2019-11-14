package com.example.jeonseungmin.Repository;

import com.example.jeonseungmin.domain.post.Comment;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CommentRepository extends CrudRepository<Comment, Long> {
    List<Comment> findByPostIdOrderByRegDateDesc(Long post_id);
    List<Comment> findByPostIdOrderByRecommendedDesc(Long post_id);
}
