import React, {useState, useEffect} from 'react';
import Prefer from '../Prefer';
const Header = ({matchlist, userinfo}) => {
    const profileicon = `https://ddragon.leagueoflegends.com/cdn/9.19.1/img/profileicon/${userinfo.profileIconId}.png`
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
            
            <style jsx global>
                {`
                    .Summoner_Header {
                        border-bottom: 1px solid #c6cbcb;
                        height: 220px;
                    }
                    .Summoner_Info {
                        width: 400px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
                    .Summoner_Header_Wrapper {
                        display: flex;
                        align-items: center;
                        width: 1200px;
                        margin: 0 auto; 
                        height:100%;
                    }
                    .Summoner_Header_Style {
                        background: linear-gradient(rgb(194, 158, 82) 0px, rgb(122, 90, 38) 88%, rgb(168, 132, 73));
                        border-radius: 100%;
                        padding: 1px;
                    }
                    .Summoner_Header_img {
                        border-radius: 100%;
                    }
                    .Summoner_Header .profile {
                        border: 2px solid white;
                        border-radius: 100%;
                        width: 100px;
                        height: 100px;
                    }
                    .Summoner_Header_Userinfo {
                        height: 104px;
                        margin-left: 25px;
                    }
                    .PastRank ul li{
                        display: inline-block;
                        padding: 3px 4px 2px 4px;
                        margin-right: 10px;
                        background: #e0e3e3;
                        color: #657070;
                        font-size: 11px;
                        border: 1px solid #ced3d3;
                        border-radius: 3px;
                    }
                    .PastRank ul li b{
                        font-weight: bold;
                    }
                    .Summoner_rank {
                        padding-top: 6px;
                        color: #555e5e;
                        font-size: 13px;
                    }
                    .Summoner_name {
                        line-height: 80px;
                        padding-top: 10px;
                        color: #242929;
                        font-size: 30px;
                        font-weight: bold;
                    }
                    .Summoner_Prefer {
                        width: 650px;   
                    }
                `}
            </style> 
        </>
    );
};

export default Header;