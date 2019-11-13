import React, { Component } from 'react';
import styles from './PostInfo.scss';
import PostNav from '../PostNav/PostNav';
import Comment from '../Comment/Comment';
import classNames from 'classnames/bind';
import axios from 'axios';
// import base_url from '../../base_url';
import likeImage from '../../img/like.png';

const cx = classNames.bind(styles);

// 각 게시물 내용 페이지 
class PostInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            postTitle: "",
            channel: "",
            nickName: "",
            lookupCount: "",
            commentCount: "",
            voteCount: "",
            timestamp: ""
            //content
        }
    }

    //조회수 늘리는 기능 


    GetTimestamp = (ts) => {
        var writeDay = new Date(ts);

        var nowtimestamp = new Date().getTime();
        var now = new Date(nowtimestamp);
        var sec, day, hour, min;

        console.log(writeDay);
        console.log(now);

        var minus;
        if (now.getFullYear() > writeDay.getFullYear()) {
            minus = now.getFullYear() - writeDay.getFullYear();
            document.getElementsByClassName("sub").innerHTML = minus + "년 전";
            console.log(minus + "년 전");
        } else if (now.getMonth() > writeDay.getMonth()) {
            minus = now.getMonth() - writeDay.getMonth();
            document.getElementsByClassName("sub").innerHTML = minus + "달 전";
            console.log(minus + "달 전");
        } else if (now.getDate() > writeDay.getDate()) {
            minus = now.getDate() - writeDay.getDate();
            document.getElementsByClassName("sub").innerHTML = minus + "일 전";
            console.log(minus + "일 전");
        } else if (now.getDate() === writeDay.getDate()) {
            var nowTime = now.getTime();
            var writeTime = writeDay.getTime();

            if (nowTime > writeTime) {
                sec = parseInt(nowTime - writeTime) / 1000;
                day = parseInt(sec / 60 / 60 / 24);
                sec = (sec - (day * 60 * 60 * 24));
                hour = parseInt(sec / 60 / 60);
                sec = (sec - (hour * 60 * 60));
                min = parseInt(sec / 60);
                sec = parseInt(sec - (min * 60));

                if (hour > 0) {
                    this.setState({
                        timestamp: hour + "시간 전"
                    })
                    console.log(hour + "시간 전");
                } else if (min > 0) {
                    this.setState({
                        timestamp: min + "분 전"
                    })
                    console.log(min + "분 전");
                } else if (sec > 0) {
                    this.setState({
                        timestamp: sec + "초 전"
                    })
                    console.log(sec + "초 전");
                }
            }
        }
    }


    Getpostinfo = () => {
        axios({
            url: '',
            method: 'GET',
            header: {
                'token': localStorage.getItem('token')
            }
        }).then((res) => {
            this.setState({
                postTitle: res.data.postTitle,
                channel: res.data.channel,
                nickName: res.data.nickName,
                lookupCount: res.data.lookupCount,
                voteCount: res.data.voteCount,
                timestamp: res.data.timestamp
            });
        })
    }

    render() {
        const { postTitle= "이건 좀 아니지않냥", channel="동영상게시판", nickName = "ㅁㄴㅇ", lookupCount = 123131, commentCount= "123", voteCount="23", timestamp ="10분전"} = this.props;
        return (
            <div className={cx('postInfoPage')}>
                <PostNav />
                <div className={cx('post-content-wrapper')}>
                    <div className={cx('postinfo-header')}>
                        <div className={cx('postinfo-title')}>{postTitle}</div>
                        <div className={cx('postinfo-meta')}>
                            <div className={cx('postinfo-meta-list')}>
                                <div className={cx('postinfo-meta-data')}>{channel}</div>
                                <div className={cx('postinfo-meta-data')}>{timestamp}</div>
                                <div className={cx('postinfo-meta-data')}>{nickName}</div>
                            </div>
                            <div className={cx('postinfo-meta-list')}>
                                <div className={cx('postinfo-meta-data')}>조회 {lookupCount}</div>
                                <div className={cx('postinfo-meta-data')}>댓글 {commentCount}</div>
                                <div className={cx('postinfo-meta-data')}>추천 {voteCount}</div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('postinfo-content')}>
                        포스트 내용
                    </div>
                    <div className={cx('postinfo-vote')}>
                        <div className={cx('like-up')}>
                            <button><img src={likeImage} alt="like"></img></button>
                            <div className={cx('likes-count')}>{voteCount}</div>
                        </div>
                    </div>
                </div>
                <div className={cx('postinfo-comment-wrapper')}>
                    <div className={cx('comment-header')}><h1>댓글</h1> <span>총 <em>{commentCount}</em>개</span></div>
                    <ul>
                        <li className={cx('post-comment-latest')}><button>최신순</button></li>
                        <li className={cx('post-comment-popularity')}><button>인기순</button></li>
                    </ul>
                    <Comment/>
                </div>
            </div>
        );
    }
}



export default PostInfo;