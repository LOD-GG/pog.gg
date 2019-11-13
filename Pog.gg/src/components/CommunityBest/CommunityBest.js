import React from 'react';
import styles from './CommunityBest.scss';
import classNames from 'classnames/bind';
import likeImage from '../../img/like.png';

const cx = classNames.bind(styles);

const CommunityBest = () => (
    <div className={cx('CommunityBestPage')}>
        <div className={cx('community-best-wrapper')}>
            <div className={cx('community-best-title')}><a href=".."><h4>LOD.GG Talk 인기글</h4></a></div>
            <div className={cx('community-best-content')}>
                <div className={cx('community-best-left')}>
                    <ul>
                        <li>
                            <div className={cx('best')}>
                                <div className={cx('best-rank')}>1</div>
                                <div className={cx('best-img')}></div>
                                <div className={cx('best-title')}>
                                    <span>마스터 찍었어요</span><em>[14]</em>
                                </div>
                                <div className={cx('best-data')}>
                                    <span>8시간 전</span><span>닉네임</span>
                                </div>
                            </div>
                            <div className={cx('best-like')}>
                                <button><img src={likeImage} alt="like"></img></button>
                                <div className={cx('like-count')}>198</div>
                            </div>
                        </li>
                        <li>
                            <div className={cx('best')}>
                                <div className={cx('best-rank')}>2</div>
                                <div className={cx('best-img')}></div>
                                <div className={cx('best-title')}>
                                    <span>골드 듀오 구하려면</span><em>[12]</em>
                                </div>
                                <div className={cx('best-data')}>
                                    <span>7시간 전</span><span>닉네임</span>
                                </div>
                            </div>
                            <div className={cx('best-like')}>
                                <button><img src={likeImage} alt="like"></img></button>
                                <div className={cx('like-count')}>158</div>
                            </div>                          
                        </li>
                    </ul>
                </div>
            </div>
        </div>    
    </div>
    
)

export  default CommunityBest;


