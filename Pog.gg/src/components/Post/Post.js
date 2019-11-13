import React, { Component } from 'react';
import styles from './Post.scss';
import classNames from 'classnames/bind';
import PostNav from '../PostNav/PostNav';
import PostList from '../PostList/PostList';
import base_url from '../../base_url';
import axios from 'axios';
import {Link} from 'react-router-dom';
import postsearchIcon from '../../img/post-search.png';
import postWrite from '../../img/postWrite.png';
// import voteimage from '../../img/icon-vote-up.png';

const cx = classNames.bind(styles);

class Post extends Component {
    state = {
        posts:[
            {id :  '',
            postTitle : '',
            channel : '',
            nickName : '',
            commentCount : '',
            voteCount : '',
            timestamp : ''
        },
        ]   
    }

    componentDidMount(){
        const {posts} = this.state;
        console.log(posts)
        axios({
            url: `${base_url}/freeboard`,
            method: 'GET',
        }).then((res) => {
            if(res.status === 200){
                console.log(res.data);
                this.setState({
                    posts: posts.concat({
                        id : res.data.id,
                        postTitle : res.data.postTitle,
                        channel : res.data.channel,
                        nickName : res.data.nickName,
                        commentCount : res.data.commentCount,
                        voteCount : res.data.voteCount
                    })                 
                });
            }else{
                alert("서버 오류입니다!");
            }
        })
    }
        
    GoEditor = () => {
        console.log(localStorage.accessToken);
        if(localStorage.accessToken === "undefined"){
            alert("로그인 필요!");
            document.location.href = '/signin';
        }
        else{
            alert("게시물 작성 권한 OK");
            document.location.href = '/editor';
        }
    }

    render() {
        const { posts } = this.state;
        return (    
            <div className={cx('postPage')}>
                <PostNav />
                <div className={cx('post-header')}>
                    <div className={cx('post-header-info')}>
                        <h2 className={cx('post-header-title')}>전체</h2>
                        <div className={cx('create-post')} onClick={this.GoEditor}><img src={postWrite} alt="postwrite" /></div>
                    </div>
                    <div className={cx('post-content')}>
                        <ul>
                            <li>인기</li>
                            <li>최신</li>
                            <li>TOP</li>
                            <li>10추</li>
                        </ul>
                        <div className={cx('post-search')}>
                            <form>
                                <select className={cx('search-select')}>
                                    <option>제목</option>
                                    <option>작성자</option>
                                </select>
                                <input placeholder="검색"></input>
                                <button className={cx('post-search-icon')}><img src={postsearchIcon} alt="searchicon" /></button>
                            </form>
                        </div>
                    </div>
                </div>
                <PostList posts={posts} />
            </div>
        );
    }

};

export default Post;