import React, {useState} from 'react';
import AppLayout from '../Component/AppLayout/AppLayout';
import * as api from '../api/api';
import './index.css';

const Home = () => {
    const [username, setUsername] = useState('');
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
        <div>
            <AppLayout/>
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
        </div>
        
    )
}

export default Home; 