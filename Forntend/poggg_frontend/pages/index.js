import React, {useState} from 'react';
import LolLayout from '../components/LolLayout';
import * as api from '../api/api';

const Home = () => {
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
        <div>
            <LolLayout/>
            <div class="main_screen">
                <div class="main_items_wrapper">
                    <div class="main_items">
                        <div class="main_header_title">
                            <b>POG.GG</b>에서 여러 게임을 만나보세요!<br/>
                        </div>
                        <div class="main_search">
                            <input onKeyPress={onEnterClick} onChange={(e) => setUsername(e.target.value)} value={username} placeholder="챔피언, 소환사명 검색"/>
                            <button onClick={(e) => onClick(e)}><i class="fas fa-search"></i></button>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx global>
                {`  
                    .main_screen {
                        height: 430px;
                        background-image: url(/static/main_background.png)
                    }
                    .main_items_wrapper {
                        width: 900px;
                        height: 430px;
                        margin: 0 auto;
                    }
                    .main_items {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        flex-direction: column;
                        width: 700px;
                        height: 430px;
                        margin: 0 auto;
                    }
                    .main_header_title {
                        padding-bottom: 50px;
                        font-size: 30px;
                        line-height: 40px;
                        color: #ffffff;
                    }
                    .main_search {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        width: 700px;
                        height: 60px;
                    }
                    .main_search input{
                        float: left;
                        font-size: 14px;
                        width: 656px;
                        border: 0;
                        line-height: 60px;
                        padding: 0 32px 0 12px;
                    }
                    .main_search button{
                        background-color: #ed6767;  
                        width: 70px;
                        height: 60px;
                        cursor: pointer;
                        border: none;
                    }
                `}
            </style>
        </div>
        
    )
}

export default Home; 