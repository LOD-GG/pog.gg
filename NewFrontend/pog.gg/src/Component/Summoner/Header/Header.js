import React, {useState, useEffect} from 'react';
import Prefer from '../Prefer';
import './Header.css';
const Header = ({matchlist, userinfo}) => {
    const profileicon = `https://opgg-static.akamaized.net/images/profile_icons/profileIcon${userinfo.profileIconId}.jpg`
    return (
        <>
            <div className="Summoner_Header">
                <div className="Summoner_Header_Wrapper">
                    <div className="Summoner_Info">
                        <div className="Summoner_Header_Style">
                            <div className="Summoner_Header_img">
                                <img className="profile" src={profileicon}/>
                            </div>
                        </div>
                        <div className="Summoner_Header_Userinfo">
                            {/*<>
                                <div className="PastRank">
                                    <ul>
                                        <li>
                                            <b>S7</b>
                                            &nbsp;  Gold
                                        </li>
                                        <li>
                                            <b>S8</b>
                                            &nbsp;  Diamond
                                        </li>
                                    </ul>
                                </div>
                                <div class="Summoner_rank">래더랭킹 95,769위 (상위2.753%)</div>
                            </>*/}
                            <div className="Summoner_name">{userinfo.name}</div>
                        </div>
                    </div>
                    <div className="Summoner_Prefer">   
                        <Prefer matchlist={matchlist}/>
                    </div>
                </div>
                
            </div>
        </>
    );
};

export default Header;