import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import * as api from '../../api/api';
import './AppLayout.css';
const AppLayout = ({location}) => {
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
    return(
        <div>
            <div className="LeagueBackground"></div>
            <nav className="Navigation">
                <div className="container">
                    <Link to="/"><a className="Menus__link Gilroy brand" >E-Pog.GG</a></Link>
                    <Link to="/highlights"><a className="Menus__link" >하이라이트</a></Link>
                    <Link to="/community"><a className="Menus__link">팀 게시판</a></Link>
                    <a className="Menus__link" href="http://localhost:3000">전적검색</a>
                    {
                        isLogin ? (
                            <div onClick={() => LogOut()} className="Menus__login float-right">{userInfo.username}</div>
                        ) : (
                            <Link to="/login"><a className="Menus__login float-right"><span>로그인</span></a></Link>
                        )
                    }
                    
                </div>
            </nav>
        </div>
    )
}

export default AppLayout;