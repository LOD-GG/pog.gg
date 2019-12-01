import React, {useState} from 'react';
import Link from 'next/link';

const AppLayout = ({ children }) => {
    const [username, setUsername] = useState('');
    const onClick = (e) => {
        e.preventDefault();
        window.location = 'http://localhost:3000/summoner?name='+username;
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
                                    <span>리그오브레전드</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
            <div class="sub-items">
                <div class="sub-items-top">
                        <div class="sub-items-top-logo"><h1>POG.GG</h1></div>
                        <div class="sub-items-top-input">
                            <input value={username} onKeyPress={onEnterClick} onChange={(e) => setUsername(e.target.value)} placeholder="챔피언, 소환사명 검색"/>
                            <button onClick={(e) => onClick(e)}><i className="fas fa-search"></i></button>
                        </div>
                </div>
                <div class="sub-items-bottom">
                    <div class="sub-items-list">
                        <ul>
                            <li><a href="/">홈</a></li>
                            <li><a href="http://localhost:3001/">e스포츠</a></li>
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
            <style jsx global>
                {`
                    body {
                        margin: 0;
                        background-color: #f5f5f5;
                    }
                    ul {
                        list-style-type: none;
                        margin: 0;
                        padding: 0;
                    }
                    a {
                        text-decoration: none;
                        color: white;
                    }
                    .header-gnb {
                        font-family: 'Open Sans', sans-serif;
                        height: 40px;
                        background-color: #232F46;
                    }
                    .header-items {
                        height: 40px;
                        width: 1050px;
                        margin: 0 auto;
                    }
                    .site-item {
                        float: left;
                        width: 800px;
                        height: 40px;
                    }
                    .site-item ul li span{
                        font-size: 13px;
                        color: #c0daf1;
                    }
                    .header-items ul{
                        height: 100%;
                    }
                    .header-items ul li{
                        padding: 0 16px;
                        height: 40px;
                        width:  120px;
                    }
                    .header-items ul li:first-child{
                        padding-left: 0px;
                        padding-right: 16px;
                    }
                    .header-items ul li:active{
                        background-color: #313641;
                    }
                    .header-items ul li a img{
                        vertical-align: middle;
                        position: relative;
                        top: -1px;
                        width: 17px;
                        height: 17px;
                        padding-right: 5px;
                    }
                    .header-items ul li a{
                        line-height: 40px;
                        font-size: 15px;
                    }
                    .sub-items {
                        background-image: url(/static/sub_background.png);  
                        height: 200px;
                    }
                    .sub-items-top {
                        width: 1050px;
                        margin: 0 auto;
                        height: 150px;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        color: white;
                    }
                    .sub-items-top-logo {
                        margin-left: 14px;
                    }
                    .sub-items-top-logo > span {
                        line-height: 70px;
                    }
                    .sub-items-top-logo >img {
                        width: 150px;
                        height: 70px;
                    }
                    .sub-items-top-input {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        width: 300px;
                        height: 35px;
                    }
                    .sub-items-top-input input{
                        float: left;
                        font-size: 12px;
                        width: 300px;
                        border: 0;
                        line-height: 35px;
                        padding: 0 12px 0 12px;
                    }
                    .sub-items-top-input button{
                        background: #ffffff;
                        height: 35px;
                        width: 50px;
                        cursor: pointer;
                        border: none;
                    }
                    .sub-items-bottom {
                        height: 50px;
                        background-color: rgba(0,0,0,.3);
                    }
                    .sub-items-bottom ul li{
                        width: 76px;
                        float: left;
                        line-height: 47px;
                        margin-right: 15px;
                        text-align: center;
                    }
                    .sub-items-bottom ul li:hover{
                        border-bottom: 2px solid #ffffff;
                    }
                    .sub-items-bottom ul li a{
                        font-size: 15px;
                        color: #d6d6d6;
                    }
                    .sub-items-list {
                        width: 1050px;
                        margin: 0 auto;
                    }
                    .notice {
                        height: 40px;
                        background-color: #ffc528;
                    }
                    .notice_item {
                        
                        font-size: 14px;
                        width: 1050px;
                        margin: 0 auto;
                        line-height: 40px;  
                    }
                `}
            </style>
        </>
    )
}

export default AppLayout;