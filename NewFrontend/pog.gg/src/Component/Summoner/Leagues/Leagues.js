import React, {useState, useEffect} from 'react';
import * as api from '../../../api/api';
import {GetGameData} from '../../lib';
import './League.css';
const Leauges = ({name, matchList, matchesData}) => {
    const getparticipantId = (match) => {
        let participantId = 0;
        match.participantIdentities.map(v => {
            if((v.player.summonerName).toLowerCase() == name.toLowerCase()) {
                participantId = v.participantId;
            }
        })
        return participantId;
    }
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
        <div className="GameItemList">
            {
                
                matchesData.map((v,i) => {
                    let match = matchList.matches.find(item => item.gameId === v.gameId);
                    let participantIdentitie = v.participantIdentities.find(item => item.player.summonerName.toLowerCase() == name.toLowerCase())
                    let participant = v.participants.find(item => item.participantId === participantIdentitie.participantId)
                    const playerStat = participant.stats;
                    //console.log(match)
                    //console.log(v);
                    let gamemode = "";
                    let gameMinute = 0;
                    let gameSecond = 0;
                    let isWin = "";
                    let time = getTimestamp(match.timestamp);
                    let gameData = GetGameData;
                    let champData = gameData.getChampData(match.champion);
                    let spellData1 = gameData.getSpellUrl(participant.spell1Id);
                    let spellData2 = gameData.getSpellUrl(participant.spell2Id);
                    //let participantId = getparticipantId(v)
                    //let userInfo = v.participants[participantId-1]
                    console.log(v, match, participantIdentitie, participant)
                    console.log(champData)
                    //타임스탬프 판별
                    
                    //게임 모드 판별
                    if(v.queueId === 420) {
                        gamemode = "솔로랭크";
                    } else if(v.queueId === 430) {
                        gamemode = "일반게임";
                    } else if(v.queueId === 440) {
                        gamemode = "자유랭크";
                    } else if(v.queueId === 450) {
                        gamemode = "무작위 총력전";
                    } else if(v.queueId > 800 && v.queueId < 900) {
                        gamemode = "봇전";
                    }
                    if(v.teams[1].win === "Win") {
                        isWin = "승리";
                    } else if(v.teams[1].win === "Fail") {
                        isWin = "패배";
                    }
                    // 게임 길이 판별
                    gameMinute = Math.floor((v.gameDuration / 60))
                    gameSecond = Math.floor((v.gameDuration % 60))
                    //게임 승리 판별
                    if(participant.stats.win) {
                        isWin = "Win";
                    } else {
                        isWin = "Lose";
                    }
                    return (
                        <div key={i} className="GameItemWrap">
                            <div className={`GameItem ` + `${isWin}`}>
                                <div className="Content">
                                    <div className="GameStats">
                                        <div className="GameType">{gamemode}</div>
                                        <div className="TimeStamp"><span>{time}</span></div>
                                        <div className="Bar"></div>
                                        <div className="GameResult">{isWin}</div>
                                        <div className="GameLength">{gameMinute}분 {gameSecond}초</div>
                                    </div>
                                    <div className="GameSettingInfo">
                                        <div className="ChampionImage"><a><img src={champData}/></a></div>
                                        <div className="SummonerSpell">
                                            <div className="Spell">
                                                <img src={spellData1}/>
                                            </div>
                                            <div className="Spell">
                                                <img src={spellData2}/>
                                            </div>
                                        </div>
                                        <div className="Runes">
                                            <div className="Rune"><img src={`https://opgg-static.akamaized.net/images/lol/perk/${playerStat.perk0}.png?image=w_22&v=1`}/></div>
                                            <div className="Rune"><img src={`https://opgg-static.akamaized.net/images/lol/perkStyle/${playerStat.perkSubStyle}.png?image=w_22&v=2`}/></div>
                                        </div>
                                    </div>
                                    
                                    <div className="KDA">
                                        <div className="KDA">
                                            <span className="Kill">{playerStat.kills}</span>
                                            {' '}/{' '}
                                            <span className="Death">{playerStat.deaths}</span>
                                            {' '}/{' '}
                                            <span className="Assist">{playerStat.assists}</span>
                                        </div>
                                        <div className="KDARatio">
                                            <span className="KDARatio">{
                                                    playerStat.deaths === 0 ? "Perfect" : ((participant.stats.kills + participant.stats.assists) / participant.stats.deaths).toFixed(2)
                                                }</span>
                                            {' '}  평점
                                        </div>
                                    </div>
                                    <div className="Stats">
                                        <div className="Level">레벨{playerStat.champLevel}</div>
                                        <div className="CS"><span>{playerStat.totalMinionsKilled + playerStat.neutralMinionsKilled} ({((playerStat.totalMinionsKilled + playerStat.neutralMinionsKilled)/gameMinute).toFixed(1)})</span> CS</div>
                                        <div class="CKRate tip tpd-delegation-uid-1">
                                            킬관여 61%
                                        </div>
                                    </div>
                                    <div className="Items">
                                        <div className="ItemList">
                                            <div className="Item"><img src={gameData.getItemUrl(participant.stats.item0)}/></div>
                                            <div className="Item"><img src={gameData.getItemUrl(participant.stats.item1)}/></div>
                                            <div className="Item"><img src={gameData.getItemUrl(participant.stats.item2)}/></div>
                                            <div className="Item"><img src={gameData.getItemUrl(participant.stats.item6)}/></div>
                                            <div className="Item"><img src={gameData.getItemUrl(participant.stats.item3)}/></div>
                                            <div className="Item"><img src={gameData.getItemUrl(participant.stats.item4)}/></div>
                                            <div className="Item"><img src={gameData.getItemUrl(participant.stats.item5)}/></div>                                            
                                        </div>
                                    </div>                 
                                    <div className="FollowPlayers Names">
                                        <div className="Team">
                                            <div className="Summoner">
                                                <div className="ChampionImage"><img src={gameData.getChampData(v.participants[0].championId)}/></div>
                                                <div className="SummonerName"><a className="Link" href={`/summoner?name=${v.participantIdentities[0].player.summonerName}`}>{v.participantIdentities[0].player.summonerName}</a></div>
                                            </div>
                                            <div className="Summoner">
                                                <div className="ChampionImage"><img src={gameData.getChampData(v.participants[1].championId)}/></div>
                                                <div className="SummonerName"><a className="Link" href={`/summoner?name=${v.participantIdentities[1].player.summonerName}`}>{v.participantIdentities[1].player.summonerName}</a></div>
                                            </div>
                                            <div className="Summoner">
                                                <div className="ChampionImage"><img src={gameData.getChampData(v.participants[2].championId)}/></div>
                                                <div className="SummonerName"><a className="Link"  href={`/summoner?name=${v.participantIdentities[2].player.summonerName}`}>{v.participantIdentities[2].player.summonerName}</a></div>
                                            </div>
                                            <div className="Summoner">
                                                <div className="ChampionImage"><img src={gameData.getChampData(v.participants[3].championId)}/></div>
                                                <div className="SummonerName"><a className="Link" href={`/summoner?name=${v.participantIdentities[3].player.summonerName}`}>{v.participantIdentities[3].player.summonerName}</a></div>
                                            </div>
                                            <div className="Summoner">
                                                <div className="ChampionImage"><img src={gameData.getChampData(v.participants[4].championId)}/></div>
                                                <div className="SummonerName"><a className="Link"  href={`/summoner?name=${v.participantIdentities[4].player.summonerName}`}>{v.participantIdentities[4].player.summonerName}</a></div>
                                            </div>
                                        </div>
                                        <div className="Team">
                                            <div className="Summoner">
                                                <div className="ChampionImage"><img src={gameData.getChampData(v.participants[5].championId)}/></div>
                                                <div className="SummonerName"><a className="Link"  href={`/summoner?name=${v.participantIdentities[5].player.summonerName}`}>{v.participantIdentities[5].player.summonerName}</a></div>
                                            </div>
                                            <div className="Summoner">
                                                <div className="ChampionImage"><img src={gameData.getChampData(v.participants[6].championId)}/></div>
                                                <div className="SummonerName"><a className="Link"  href={`/summoner?name=${v.participantIdentities[6].player.summonerName}`}>{v.participantIdentities[6].player.summonerName}</a></div>
                                            </div>
                                            <div className="Summoner">
                                                <div className="ChampionImage"><img src={gameData.getChampData(v.participants[7].championId)}/></div>
                                                <div className="SummonerName"><a className="Link"  href={`/summoner?name=${v.participantIdentities[7].player.summonerName}`}>{v.participantIdentities[7].player.summonerName}</a></div>
                                            </div>
                                            <div className="Summoner">
                                                <div className="ChampionImage"><img src={gameData.getChampData(v.participants[8].championId)}/></div>
                                                <div className="SummonerName"><a className="Link"  href={`/summoner?name=${v.participantIdentities[8].player.summonerName}`}>{v.participantIdentities[8].player.summonerName}</a></div>
                                            </div>
                                            <div className="Summoner">
                                                <div className="ChampionImage"><img src={gameData.getChampData(v.participants[9].championId)}/></div>
                                                <div className="SummonerName"><a className="Link"  href={`/summoner?name=${v.participantIdentities[9].player.summonerName}`}>{v.participantIdentities[9].player.summonerName}</a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default Leauges;