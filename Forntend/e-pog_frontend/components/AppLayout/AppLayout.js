import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import axios from 'axios';
import './AppLayout.scss';
const AppLayout = ({children}) => {
    const [userInfo, setUserInfo] = useState({});
    const [isLogin, setIsLogin] = useState(false);
    const LogOut = () => {
        localStorage.removeItem('token');
        location.href = "/";
    }
    useEffect(() => {
        if(localStorage.getItem('token')) {
            axios.post("http://192.168.137.1:8080/tokenRequest", {}, {
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
                    <Link href="/"><a className="Menus__link Gilroy brand" >E-Pog.GG</a></Link>
                    <Link href="/highlights"><a className="Menus__link" >하이라이트</a></Link>
                    <Link href="/community"><a className="Menus__link">팀 게시판</a></Link>
                    <Link href="http://localhost:3000"><a className="Menus__link">전적검색</a></Link>
                    {
                        isLogin ? (
                            <div onClick={() => LogOut()} className="Menus__login float-right">{userInfo.username}</div>
                        ) : (
                            <Link  href="/login"><a className="Menus__login float-right"><span>로그인</span></a></Link>
                        )
                    }
                    
                </div>
            </nav>
            {children}
            <style global jsx>
                {`
                    
                `}
            </style>
        </div>
    )
}

export default AppLayout;