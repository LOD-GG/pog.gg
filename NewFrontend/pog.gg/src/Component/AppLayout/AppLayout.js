import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './AppLayout.css';
import * as api from '../../api/api';
import { white } from 'ansi-colors';
import axios from 'axios';

const AppLayout = ({ children }) => {
    const [username, setUsername] = useState('');
    const [userInfo, setUserInfo] = useState({});
    const [isLogin, setIsLogin] = useState(false);
    const LogOut = () => {
        localStorage.removeItem('token');
        window.location = "/";
    }
    useEffect(() => {
        if(localStorage.getItem('token')) {
            axios.post(`${api.ServerAddress}/tokenRequest`, {}, {
                headers: {
                    token: localStorage.getItem('token')
                }
            })
            .then(response => {
                setUserInfo({
                    password: response.data.password,
                    userid: response.data.userid,
                    username: response.data.username
                })
                setIsLogin(true)
                console.log(userInfo)
            })
            .catch(error => {
                setIsLogin(false)
                console.log(error)
          })
        } 
    },[])
    const onClick = (e) => {
        e.preventDefault();
        window.location = `${api.LocalAddress}/summoner?name=`+username;
    }
    const onEnterClick = (e) => {
        if(e.charCode == 13){
            onClick(e);
        }
    }
    return (
        <>
           <header class="header-gnb">
                <div class="header-items">
                    <div class="site-item">
                        <ul>
                            <li style={{backgroundColor:"#313641"}}>
                                <a style={{margin: "0 auto"}} href="#">
                                    <img src="https://poro.gg/images/family/ico_lol.png"/>
                                    <span style={{fontSize: "12px"}}>리그오브레전드</span>
                                </a>
                            </li>
                            {
                                isLogin ? (
                                    <div onClick={() => LogOut()} className="Menus__login float-right">{userInfo.username}</div>
                                ) : (
                                    <Link to="/login"><div className="Menus__login float-right"><span>로그인</span></div></Link>
                                )
                            }
                        </ul>
                    </div>
                </div>
            </header>
            <div class="sub-items">
                <div class="sub-items-top">
                        <div class="sub-items-top-logo"><h1 style={{color: "#fff"}}>POG.GG</h1></div>
                        <div class="sub-items-top-input">
                            <input value={username} onKeyPress={onEnterClick} onChange={(e) => setUsername(e.target.value)} placeholder="챔피언, 소환사명 검색"/>
                            <button onClick={(e) => onClick(e)}><i className="fas fa-search"></i></button>
                        </div>
                </div>
                <div class="sub-items-bottom">
                    <div class="sub-items-list">
                        <ul>
                            <li><a href="/">홈</a></li>
                            <li><a href={`${api.OtherAddress}`}>e스포츠</a></li>
                            <li><a href="/community">팁 게시판</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="notice">
                <div class="notice_item">
                    <i className="fas fa-exclamation-circle" style={{paddingRight: "5px"}}></i>
                    안녕하세요 pog.gg에 오신것을 환영합니다!
                </div>
            </div>
        </>
    )
}

export default AppLayout;