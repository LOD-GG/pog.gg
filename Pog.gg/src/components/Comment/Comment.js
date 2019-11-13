import React from 'react';
import classNames from 'classnames/bind';
import styles from './Comment.scss';
import voteimage from '../../img/icon-vote-up.png';

const cx = classNames.bind(styles);
const dummy = [{
    comVoteCount: 5,
    comNickname: "공주님",
    commentContent : "하이루하이루",
    comTimestamp: 12345
},
{
    comVoteCount: 12,
    comNickname: "마이",
    commentContent : "ㅁㅇㅁㄴㅇ",
    comTimestamp: 12345
},
{
    comVoteCount: 9,
    comNickname: "ㅁㄴㅇ",
    commentContent : "ㅁㄴㅇㅁㄴㅇㅁㄴㅇ",
    comTimestamp: 12345
}]

const CommentItem = ({comVoteCount, comNickname, commentContent, comTimestamp}) => {
    
    return(
        <div className={cx('comment-list')}>
        <div className={cx('comment-list-vote')}>
            <img src={voteimage} alt="vote" />
            <div>{comVoteCount}</div>
        </div>
        <div className={cx('comment-list-content')}>
            <div className={cx('comment-list-item')}>
                <div className={cx('comment-list-item-data')}>{comNickname}</div>
                <div className={cx('comment-list-item-data')}>{comTimestamp}</div>
            </div>
            <div>{commentContent}</div>
        </div>
    </div>  
    );
}

const Comment = () => {
    const comment = dummy.map(
        (com) => {
            const {comVoteCount, comNickname, commentContent, comTimestamp} = com;
            return(
                <CommentItem
                    comVoteCount={comVoteCount}
                    comNickname={comNickname}
                    commentContent={commentContent}
                    comTimestamp={comTimestamp}
                />
            )
        }
    );
    return(
        <div>
            {comment}
        </div>
    )
    
}

export default Comment;