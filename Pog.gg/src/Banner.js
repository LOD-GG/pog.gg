import React from 'react';
import styles from './Banner.scss';
import classNames from 'classnames/bind';
import logoImage from './img/logo-dakgg-white.png';
import logoPubg from './img/logo_pubg.png';
import searchIcon from './img/magnifying-glass.png';
import searchDak from './img/search_dak.png';

const cx = classNames.bind(styles);

const Banner = () => (
    <div className={cx('banner')}>
        <div className={cx('banner-content')}>
            <div className={cx('logo')}>
                <img src={logoImage} alt="logo" />
            </div>
            <div className={cx('form')}>
                <span className={cx('logo-pubg')}><img src={logoPubg} alt="logo-pubg" /></span>
                <input placeholder="배틀그라운드 닉네임을 입력하세요" />
                <button className={cx('search-icon')}><img src={searchIcon} alt="search" /></button>
            </div>
            <div className={cx('search-dak')}>
                <img src={searchDak} alt="searchDak"/>
            </div>
        </div>
        
    </div>
);

export default Banner;