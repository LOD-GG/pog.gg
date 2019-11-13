import React from 'react';
import styles from './PostNav.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const PostNav = () => (
    <div className={cx('post-nav')}>
        <div className={cx('sidebar-menu')}>
            <div className={cx('sidebar-menu-title')}>홈</div>
            <a href="/post">전체</a>
        </div>
        <div className={cx('sidebar-menu')}>
            <div className={cx('sidebar-menu-title')}>게시판</div>
            <li><a href=".">동영상</a></li>
            <li><a href=".">자유</a></li>
            <li><a href=".">팁</a></li>
        </div>
    </div>
);

export default PostNav;