import React, {useEffect, useCallback, useState} from 'react';
import AppLayout from '../Component/AppLayout/AppLayout';
import { Typography } from 'antd';
import queryString from 'query-string';
import axios from 'axios';
import './teamPost.css';
import * as api from '../api/api';
const { Title } = Typography;

const TeamPost = ({location}) => {
    const query = queryString.parse(location.search);
    let {freeid} = query;
    const [userInfo, setUserInfo] = useState({});
    const [postInfo, setPostInfo] = useState({});
    const [postComment, setPostComment] = useState('');
    const [commentArray, setCommentArray] = useState([]);
    const onCommentChange = useCallback((e) => {
        setPostComment(e.target.value);
    },[])
    useEffect(() => {
        axios.get(`${api.ServerAddress}/postInfo`, {
            params: {
                freeId: freeid,
                postType: 1
            }
        })
        .then(response => {
            console.log(response.data)
            setPostInfo(response.data.board)
        })
        .catch(error  => console.log(error))
        axios.get(`${api.ServerAddress}/showByRecommended`, {
            params: {
                freeId: freeid,
                postType: 1
            }
        })
        .then(response => {
            setCommentArray(response.data)
        })
        .catch(error => console.log(error))
        axios.post(`${api.ServerAddress}/tokenRequest`,{}, {
            headers: {
                token: localStorage.getItem('token')
            }
        })
        .then(response => {
            setUserInfo(response.data)
        })
    },[])
    const commentPost = () => {
        axios.post(`${api.ServerAddress}/makeComment`, {
            freeId: freeid,
            postType: 1,
            content: postComment
        }, {
            headers: {
                token: localStorage.getItem('token')
            }
        })
        .then(response => {
            window.location = `${api.LocalAddress}/teamPost?freeid=${freeid}`
        })
        .catch(error => console.log(error))
        setPostComment('');
    }
    const onCommentLikeButton = (commentId) => {
        axios.patch(`${api.ServerAddress}/ddabbong`, {}, {
            params: {
                comment_id: commentId,
                voteCount: 1
            }
        })
        .then(response => {
            alert("추천 완료!")
            window.location = `${api.LocalAddress}/teamPost?freeid=${freeid}`
        })
        .catch(error => {
            alert("에러!")
        })
    }
    const onCommentDisLikeButton = (commentId) => {
        axios.patch(`${api.ServerAddress}/ddabbong`, {}, {
            params: {
                comment_id: commentId,
                voteCount: -1
            }
        })
        .then(response => {
            alert("비추천 완료!")
            window.location = `${api.LocalAddress}/teamPost?freeid=${freeid}`
        })
        .catch(error => {
            alert("에러!")
        })
    } 
    const onPostLikeButton = () => {
        axios.patch(`${api.ServerAddress}/voteRequest`, {}, {
            params: {
                freeId: freeid,
                voteCount: 1,
                postType: 1 
            }
        })
        .then(response => {
            alert("추천 완료!")
            window.location = `${api.LocalAddress}/teamPost?freeid=${freeid}`
        })
        .catch(error => {
            alert("에러!")
        })
    }
    const onPostDisLikeButton = () => {
        axios.patch(`${api.LocalAddress}/voteRequest`, {}, {
            params: {
                freeId: freeid,
                voteCount: -1,
                postType: 1
            }
        })
        .then(response => {
            alert("추천 완료!")
            window.location = `${api.LocalAddress}/teamPost?freeid=${freeid}`
        })
        .catch(error => {
            alert("에러!")
        })
    }
    const getTimestamp = (ts) => {
        let returnData = "";
        var writeDay = new Date(ts);
        var nowtimestamp = new Date().getTime();
        var now = new Date(nowtimestamp);

        var minus;
        if(now.getFullYear() > writeDay.getFullYear()){
            minus= now.getFullYear()-writeDay.getFullYear();
            returnData = minus+"년 전";
        }else if(now.getMonth() > writeDay.getMonth()){
            minus= now.getMonth()-writeDay.getMonth();
            returnData =minus+"달 전";
        }else if(now.getDate() > writeDay.getDate()){
            minus= now.getDate()-writeDay.getDate();
            returnData = minus+"일 전";
        }else if(now.getDate() == writeDay.getDate()){
            var nowTime = now.getTime();
            var writeTime = writeDay.getTime();

            if(nowTime>writeTime){
                let sec = parseInt(nowTime - writeTime) / 1000;
                let day  = parseInt(sec/60/60/24);
                sec = (sec - (day * 60 * 60 * 24));
                let hour = parseInt(sec/60/60);
                sec = (sec - (hour*60*60));
                let min = parseInt(sec/60);
                sec = parseInt(sec-(min*60));

                if(hour>0){
                    returnData = hour+"시간 전";
                }else if(min>0){
                    returnData = min+"분 전";
                }else if(sec>0){
                    returnData = sec+"초 전";
                }
            }
        }
        return returnData;
    }
    function stripHTML(text) {
        return text.replace(/<.*?>/gm, '');
       }
    return(
        <>
            <AppLayout/>
            <div className="article">
                <div className="article-header">
                    <div className="article__title">{postInfo.title}</div>
                    <div className="article-meta">
                        <div className="article-meta-list">
                            <div className="article-list-item-meta__item">
                                <a href="#"><img src={`https://ddragon.leagueoflegends.com/cdn/9.21.1/img/champion/${postInfo.champion}.png`}/></a>
                            </div>
                            <div className="article-meta__item">
                                <span>{getTimestamp(postInfo.date)}</span>
                            </div>
                            <div className="article-meta__item article-meta__item--name">
                                <span>{postInfo.writer}</span>
                            </div>
                        </div>
                        <div className="article-meta-list article-meta-list--right">
                            <div className="article-meta__item">
                                <span>조회 {postInfo.viewCount}</span>
                            </div>
                            <div className="article-meta__item">
                                <span>추천 {postInfo.voteCount}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="article-content-wrap">
                    <div className="article-content">
                        <p dangerouslySetInnerHTML={ {__html: postInfo.content} }></p>
                    </div>
                </div>
                <div className="postVote">
                    <div className="article-vote">
                        <button className="article-vote__button button">
                            <span className="article-vote__up-arrow" onClick={() => onPostLikeButton()}>추천</span>
                            <span className="article-vote__count">{postInfo.voteCount}</span>
                            <span className="article-vote__down-arrow" onClick={() => onPostDisLikeButton()}>비추천</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="comment">
                <div className="comment-wrap">
                    <div className="comment-header">
                        <h2 className="comment__title">댓글</h2>
                        <span className="comment__count">총&nbsp; 
                            <em>{postInfo.commentCount}</em>
                            개
                        </span>
                    </div>
                    <div className="comment-write">
                        <div className="comment-write-inner">
                            <div className="comment-write__name">{userInfo.username}</div>
                            <div className="comment-write__content">
                                <textarea value={postComment} onChange={(e) => onCommentChange(e)}/>
                            </div>
                            <div className="comment-write-footer">
                                <div className="comment-write-additon"></div>
                                <div className="comment-write-submit">
                                    <button className="button--green" onClick={() => commentPost()}>작성</button>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div className="comment-bottom">
                        <div className="comment-sort">
                            <ul className="comment-sort__list">
                                <li className="comment-sort__item active">
                                    <button>인기순</button>
                                </li>
                                <li className="comment-sort__item">
                                    <button>최신순</button>
                                </li>
                            </ul>
                        </div>
                        <div className="comment-list" style={{marginBottom: "30px"}}>
                            {
                                commentArray && commentArray.map((v,i) => {
                                    return (
                                        <div key={i} className="comment-l">
                                            <div className="comment_body">
                                                <div className="comment-vote">
                                                    <button className="comment-vote__up" onClick={() => onCommentLikeButton(v.comment_id)}></button>
                                                    <div className="comment-vote__count">{v.recommended}</div>
                                                    <button className="comment-vote__down" onClick={() => onCommentDisLikeButton(v.comment_id)}></button>
                                                </div>
                                                <div className="comment-meta">
                                                    <span className="comment__name">
                                                        <span>{v.writer}</span>
                                                    </span>
                                                    <span className="comment__date">
                                                        {getTimestamp(v.reg_date)}
                                                    </span>
                                                </div>
                                                <div className="comment-content">
                                                    <div className="comment-content">
                                                        <div>
                                                            <p>{v.content}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="comment-button">
                                                    <button className="comment-button__item"><img src="https://talk.op.gg/images/icon-reply@2x.png"/>답글쓰기</button>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TeamPost;