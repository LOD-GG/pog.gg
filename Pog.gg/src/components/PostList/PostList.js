import React from 'react';
import styles from '../Post/Post.scss';
import classNames from 'classnames/bind';
import {Link} from 'react-router-dom';
import voteimage from '../../img/icon-vote-up.png';

const cx = classNames.bind(styles);

const GoPostInfo = (id) => {
    console.log(id);
}

const PostItem = ({id, postTitle, channel, nickName, commentCount, voteCount, timestamp}) => {
    return(
        <div className={cx('post-list')} onClick={() => GoPostInfo(id)}>
            <div className={cx('post-list-vote')}>
                <img src={voteimage} alt="vote" />
                <div>{voteCount}</div>
            </div>
            <div className={cx('post-list-content')}>
                <Link to={`/postInfo/${id}`}><div className={cx('post-title')}><span>{postTitle}</span><em>[{commentCount}]</em></div></Link>
                <div className={cx('post-list-item')}>
                    <div className={cx('post-list-item-data')}>{channel}</div>
                    <div className={cx('post-list-item-data')}>1분 전</div>
                    <div className={cx('post-list-item-data')}>{nickName}</div>
                </div>
            </div>
        </div>
    );
}

const PostList = ({posts}) => {
    console.log(posts)
    const postList = posts.map(
        (post) => {
            const {id, postTitle, channel, nickName, commentCount, voteCount, timestamp} = post;
            return(
                <PostItem
                    id={id}
                    postTitle={postTitle}
                    channel={channel}
                    nickName={nickName}
                    commentCount={commentCount}
                    voteCount={voteCount}
                    timestamp={timestamp}
                    
                />
            )
        }
    );
    return(
        <div className={cx('post-list-wrapper')}>
            {postList}
        </div>
    )
}

export default PostList;
