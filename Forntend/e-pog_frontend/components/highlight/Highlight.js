import React, {useState, useEffect} from 'react';
import { Modal, Icon, Avatar, Comment, Tooltip, Button, Input } from 'antd';
import axios from 'axios';
import moment from 'moment';
import { white } from 'ansi-colors';
import './Highlight.scss';

const Highlight = ({videoInfo, freeid}) => {
    console.log(videoInfo)
    const [comment, SetComment] = useState([]);
    const [showPreview, SetShowPreview] = useState('none');
    const [showComment, SetShowComment] = useState('none');
    const [commentInput, SetCommentInput] = useState('');
    const [videoTitle, SetVideoTitle] = useState('');
   
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    var matchs = videoInfo.link.match(regExp);
    useEffect(() => {
        axios.get(`https://www.googleapis.com/youtube/v3/videos?id=${matchs[7]}&key=AIzaSyCHeNSQ55mXUVr5NgyOWWBTKhw2XjFT8tw&fields=items(snippet(title))&part=snippet`)
        .then(response => {SetVideoTitle(response.data.items[0].snippet.title)})
        //게시글 정보 불러오기
    }, [videoInfo]);
    const onClick = () => {
        if(showPreview === "none") {
            SetShowPreview('block');
        } else if(showPreview === "block") {
            SetShowPreview('none');
        }
    }
    const onCommentClick = () => {
        axios.get("http://192.168.137.1:8080/showByComment_id", {
            params: {
                freeId: videoInfo.freeId,
                postType: 3
            }
        })
        .then(response => {
            console.log(response.data)
            SetComment(response.data)
        })

        if(showComment === "none") {
            SetShowComment('block');
        } else if(showComment === "block") {
            SetShowComment('none');
        }
    }
    const onLikeButton = () => {
        axios.patch("http://192.168.137.1:8080/voteRequest", {}, {
            params: {
                freeId: videoInfo.freeId,
                voteCount: 1,
                postType: 3
            }
        })
        .then(response => {
            this.forceUpdate();
            alert("추천 완료!")
        })
        .catch(error => {
            alert("에러!")
        })
    }
    const onDisLikeButton = () => {
        axios.patch("http://192.168.137.1:8080/voteRequest", {}, {
            params: {
                freeId: videoInfo.freeId,
                voteCount: -1,
                postType: 3
            }
        })
        .then(response => {
            
            alert("비추천 완료!")
        })
        .catch(error => {
            alert("에러!")
        })
    } 
    const postComment = () => {
        axios.post("http://192.168.137.1:8080/makeComment", {
            freeId: videoInfo.freeId,
            postType: 3,
            content: commentInput
        }, {
            headers: {
                token: localStorage.getItem('token')
            }
        })
        .then(response => {
            SetCommentInput('')
            SetComment(comment.concat(response.data))
        })
    }
    return (
        <> 
            <div className="highlight">
                <div className="article-list thumbnail" onClick={() => onClick()}>
                    <img src={`http://img.youtube.com/vi/${matchs[7]}/0.jpg`}/>
                </div>
                <div className="article-list content">
                    <div className="article__title">
                        <a href={videoInfo.link}>
                            <span style={{"textAlign": "center"}}>{videoTitle}</span>
                        </a>
                    </div>
                    <div className="article__comment">
                        <span onClick={() => onCommentClick()}>댓글 ({videoInfo.commentCount}개)</span>
                        <span>삭제</span>
                    </div>
                </div>
                <div className="article-list raiting">
                    <img style={{marginBottom: "5px"}} onClick={()=>onLikeButton()} src="/static/up.svg"/>
                    <div className="vote">{videoInfo.voteCount}</div>
                    <img onClick={()=>onDisLikeButton()} src="/static/down.svg"/>
                </div>
            </div>
            <div className="preview" style={{display: showPreview}}>
                <iframe id="player" type="text/html" width="740" height="411"
                src={`https://www.youtube.com/embed/${matchs[7]}`}
                frameborder="0"></iframe>
            </div>
            <div className="comment" style={{display: showComment}}>
                <div className="comment_inner">
                    <Input.Search
                        value={commentInput}
                        placeholder="댓글을 입력해 주세요."
                        enterButton="입력"
                        onChange={e => SetCommentInput(e.target.value)}
                        onSearch={() => postComment()}
                    />
                    {
                        comment && comment.map((v,i) => {
                            return(
                                <Comment
                                    author={<a style={{color: "#77D"}}>{v.writer}</a>}
                                    content={
                                    <p>
                                        {v.content}
                                    </p>
                                    }
                                    datetime={
                                    <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                                        <span>{v.reg_date}</span>
                                    </Tooltip>
                                    }
                                />
                            )
                        })
                    }
                    
                </div>
            </div>
            <style jsx>
                {`
                    .highlight {
                        display: flex;
                        padding: 20px;
                        width: 740px;
                        border-radius: 10px;   
                        -webkit-transition: background-color 0.2s;
                    } 
                    .highlight:hover {
                        background-color: #383940;
                    }
                    .article-list {
                        float: left;
                    }
                    .highlight .raiting{
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        flex-direction: column;
                        height: 112px;
                        font-size: 20px;
                    }
                    .highlight .raiting img {
                        width: 25px;
                        hight: 25px;
                    }
                    .content { 
                        text-align: center;
                        width: 300px;
                        line-height: 50px;
                        margin: 0 auto;
                    }
                    .article__title  {   
                        width: 300px;
                        height: 60px;
                    }
                    .article__comment {
                        cursor: pointer;
                        width: 260px;
                        height: 50px;
                    }
                    .article__comment span{
                        width: 120px;
                        height: 48px;
                        float: left;
                        transition: background-color 250ms ease 0ms, color 0s ease;
                    }
                    .article__comment span:hover{
                        background-color: hsla(0,0%,98.4%,.8);
                        color: #27282d;
                    }
                    .article__title a span{
                        display: inline-block;
                        text-align: left;
                        width: 300px;
                        white-space: nowrap; 
                        overflow: hidden; 
                        text-overflow: ellipsis;
                        color: #2955BC;
                        font-size: 22px;
                        text-decoration: none;
                    }
                    .thumbnail img{
                        cursor: pointer;
                        width: 150px;    
                    }
                    .preview {
                        padding-top: 10px;
                        width: 740px;
                        background-color: #2a2b30;
                    }
                    .comment {
                        padding-top: 10px;
                        width: 740px;
                        background-color: #2A2B30   ;
                    }
                    .comment_inner {
                        width: 700px;
                        margin: 0 auto;
                    }
                `}
            </style>
        </>
    )
};

export default Highlight;