import React, {useEffect, useState} from 'react';
import TeamIntro from '../components/Home/TeamIntro';
import AppLayout from '../components/AppLayout/AppLayout';
import {Link}  from 'react-router-dom';
import queryString from 'query-string';
import * as api from '../api/api';
import axios from 'axios';
import './community.css';

const Community = ({location}) => {
    const [postList, setPostList] = useState([]);
    useEffect(() => {
        const query = queryString.parse(location.search);
        let {team} = query;
        if(team === undefined) {team = "all";}
        console.log(team)
        axios.get(`${api.ServerAddress}/teamboard`,{
            params: {
                teamName: team,
                pageNum: 1,
                way: "voteCount"
            }
        })
        .then(response => {
            console.log(response.data)
            setPostList(response.data)
        })  
    },[])
    function getTimestamp(dt) {
		var min = 60 * 1000;
		var c = new Date()
		var d = new Date(dt);
		var minsAgo = Math.floor((c - d) / (min));

		var result = {
			'raw': d.getFullYear() + '-' + (d.getMonth() + 1 > 9 ? '' : '0') + (d.getMonth() + 1) + '-' + (d.getDate() > 9 ? '' : '0') +  d.getDate() + ' ' + (d.getHours() > 9 ? '' : '0') +  d.getHours() + ':' + (d.getMinutes() > 9 ? '' : '0') +  d.getMinutes() + ':'  + (d.getSeconds() > 9 ? '' : '0') +  d.getSeconds(),
			'formatted': '',
		};

		if (minsAgo < 60) { // 1시간 내
			result.formatted = minsAgo + '분 전';
		} else if (minsAgo < 60 * 24) { // 하루 내
			result.formatted = Math.floor(minsAgo / 60) + '시간 전';
		} else { // 하루 이상
			result.formatted = Math.floor(minsAgo / 60 / 24) + '일 전';
		};

		return result.formatted;
	};
    return (
        <>
            <AppLayout/>
            <div className="LeagueTeams" style={{marginTop: "100px"}}>
                <div className="LeagueTeams__teams">
                    <a className="LeagueTeams__link" href="/community?team=AF">
                        <figure className="TeamSymbol LeagueTeams__team large">
                            <div className="TeamSymbol__image" style={{backgroundImage: "url(https://qwer.gg/images/logos/AF.png)"}}></div>
                            <span className="TeamSymbol__acronym Gilroy">AF</span>
                        </figure>
                    </a>
                    <a className="LeagueTeams__link" href="/community?team=DWG">
                        <figure className="TeamSymbol LeagueTeams__team large">
                            <div className="TeamSymbol__image" style={{backgroundImage: "url(https://qwer.gg/images/logos/DWG.png)"}}></div>
                            <span className="TeamSymbol__acronym Gilroy">DWG</span>
                        </figure>
                    </a>
                    <a className="LeagueTeams__link" href="/community?team=GEN">
                        <figure className="TeamSymbol LeagueTeams__team large">
                            <div className="TeamSymbol__image" style={{backgroundImage: "url(https://qwer.gg/images/logos/GEN.png)"}}></div>
                            <span className="TeamSymbol__acronym Gilroy">GEN</span>
                        </figure>
                    </a>
                    <a className="LeagueTeams__link" href="/community?team=GRF">
                        <figure className="TeamSymbol LeagueTeams__team large">
                            <div className="TeamSymbol__image" style={{backgroundImage: "url(https://qwer.gg/images/logos/GRF.png)"}}></div>
                            <span className="TeamSymbol__acronym Gilroy">GRF</span>
                        </figure>
                    </a>
                    <a className="LeagueTeams__link" href="/community?team=HLE">
                        <figure className="TeamSymbol LeagueTeams__team large">
                            <div className="TeamSymbol__image" style={{backgroundImage: "url(https://qwer.gg/images/logos/HLE.png)"}}></div>
                            <span className="TeamSymbol__acronym Gilroy">HLE</span>
                        </figure>
                    </a>
                    <a className="LeagueTeams__link" href="/community?team=SKT">
                        <figure className="TeamSymbol LeagueTeams__team large">
                            <div className="TeamSymbol__image" style={{backgroundImage: "url(https://qwer.gg/images/logos/SKT.png)"}}></div>
                            <span className="TeamSymbol__acronym Gilroy">SKT</span>
                        </figure>
                    </a>
                    <a className="LeagueTeams__link" href="/community?team=JAG">
                        <figure className="TeamSymbol LeagueTeams__team large">
                            <div className="TeamSymbol__image" style={{backgroundImage: "url(https://qwer.gg/images/logos/JAG.png)"}}></div>
                            <span className="TeamSymbol__acronym Gilroy">JAG</span>
                        </figure>
                    </a>
                    <a className="LeagueTeams__link" href="/community?team=KT">
                        <figure className="TeamSymbol LeagueTeams__team large">
                            <div className="TeamSymbol__image" style={{backgroundImage: "url(https://qwer.gg/images/logos/KT.png)"}}></div>
                            <span className="TeamSymbol__acronym Gilroy">KT</span>
                        </figure>
                    </a>
                    <a className="LeagueTeams__link" href="/community?team=KZ">
                        <figure className="TeamSymbol LeagueTeams__team large">
                            <div className="TeamSymbol__image" style={{backgroundImage: "url(https://qwer.gg/images/logos/KZ.png)"}}></div>
                            <span className="TeamSymbol__acronym Gilroy">KZ</span>
                        </figure>
                    </a>
                    <a className="LeagueTeams__link" href="/community?team=SB">
                        <figure className="TeamSymbol LeagueTeams__team large">
                            <div className="TeamSymbol__image" style={{backgroundImage: "url(https://qwer.gg/images/logos/SB.png)"}}></div>
                            <span className="TeamSymbol__acronym Gilroy">SB</span>
                        </figure>
                    </a>
                </div>
            </div>
            <div className="Post_top">
                <div className="array_tab">
                    <button type="button" className="tab_button on">인기순</button>
                </div>
            </div>
            <div className="Post_bottom">
                    <table className="tip_list">
                        <colgroup>
                            <col style={{width:"6%"}}/>
                            <col style={{width:"6%"}}/>
                            <col/>
                            <col style={{width:"18%"}}/>
                            <col style={{width:"6%"}}/>
                            <col style={{width:"6%"}}/>
                            <col style={{width:"6%"}}/>
                        </colgroup>
                        <thead>
                            <tr>
                                <th scope="col">팀</th>
                                <th scope="col">번호</th>
                                <th scope="col">제목</th>
                                <th scope="col">글쓴이</th>
                                <th scope="col">작성일</th>
                                <th scope="col">조회</th>
                                <th scope="col">추천</th>
                            </tr>
                        </thead>
                        <tbody style={{fontSize: "13px"}}>
                            {
                                postList.map((v,i) => (
                                    <tr className="post" onClick={() => document.location.href=`/teamPost?freeid=${v.freeId}`} style={{}} key={i}>
                                            <td className="post_champ post_item"><img src={`https://qwer.gg/images/logos/${v.teamName}.png`}/></td>
                                            <td className="post_num post_item">{v.freeId}</td>
                                            <td style={{textAlign: "center"}}className="post_title">{v.title}</td>
                                            <td className="post_writer post_item">{v.writer}</td>
                                            <td className="post_date post_item">{getTimestamp(v.date)}</td>
                                            <td className="post_count post_item">{v.viewCount}</td>
                                            <td className="post_recommend post_item">{v.voteCount}</td>
                                    </tr>
                                ))
                            }

                        </tbody>
                    </table>
            </div>
            <div className="Post_fotter">
                <Link to="/editor"><div className="tab_button">글쓰기</div></Link>
            </div>
        </>
    )
}

export default Community;