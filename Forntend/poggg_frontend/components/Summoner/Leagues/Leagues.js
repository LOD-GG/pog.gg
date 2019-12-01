import React, {useState, useEffect} from 'react';
import * as api from '../../../api/api';
import {GetGameData} from '../../lib';
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
    const getTimestamp = (ts) => {
        let returnData = "";
        var writeDay = new Date(ts);
        var nowtimestamp = new Date().getTime();
        var now = new Date(nowtimestamp);

        var minus;
        if(now.getFullYear() > writeDay.getFullYear()){
            minus= now.getFullYear()-writeDay.getFullYear();
            returnData = minus+"년 전";
        }else if(now.getMonth() > writeDay.getMonth()){
            minus= now.getMonth()-writeDay.getMonth();
            returnData =minus+"달 전";
        }else if(now.getDate() > writeDay.getDate()){
            minus= now.getDate()-writeDay.getDate();
            returnData = minus+"일 전";
        }else if(now.getDate() == writeDay.getDate()){
            var nowTime = now.getTime();
            var writeTime = writeDay.getTime();

            if(nowTime>writeTime){
                let sec = parseInt(nowTime - writeTime) / 1000;
                let day  = parseInt(sec/60/60/24);
                sec = (sec - (day * 60 * 60 * 24));
                let hour = parseInt(sec/60/60);
                sec = (sec - (hour*60*60));
                let min = parseInt(sec/60);
                sec = parseInt(sec-(min*60));

                if(hour>0){
                    returnData = hour+"시간 전";
                }else if(min>0){
                    returnData = min+"분 전";
                }else if(sec>0){
                    returnData = sec+"초 전";
                }
            }
        }
        return returnData;
    }
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
            <style jsx global>
                {`
                    .GameContents {
                        width: 700px;
                        height: 700px;
                    }
                    .GameItemWrap {
                        border-radius: 3px;
                        margin-bottom: 8px;
                    }
                    .GameItem {
                        position: relative;
                        background: none;
                    }
                    .GameItem.Win > .Content {
                        table-layout: fixed;
                        background-color: #a3cfec;
                        border-color: #99b9cf;
                    }
                    .GameItem.Lose > .Content {
                        table-layout: fixed;
                        background-color: #E2B6B3;
                        border-color: #99b9cf;
                    }
                    .GameItem > .Content {
                        display: table;
                        width: 689px;
                        height: 97px;
                        border-collase: collapse;
                        border: 1px solid #cdd2d2;
                    }
                    .GameItem > .Content > .GameStats {
                        width: 70px;
                        text-align: center;
                        font-size: 11px;
                        color: #555;
                        line-height: 16px;
                    }
                    .GameItem > .Content > .GameStats > .GameResult{
                        font-weight: bold;
                    }
                    .GameItem > .Content > div {
                        display: table-cell;
                        height: 96px;
                        vertical-align: middle;
                    }
                    .GameItem>.Content>.GameStats>.GameType {
                        font-weight: bold;
                        width: 70px;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                    }
                    ._timeCountAssigned {
                        font-size: inherit;
                        cursor: help;
                    }
                    .GameItem.Lose>.Content>.GameStats>.Bar {
                        display: block;
                        width: 27px;
                        margin: 5px auto;
                        height: 2px;
                        background: #cea7a7;
                    }
                    .GameItem.Lose>.Content>.GameStats>.GameResult {
                        color: #c6443e;;
                    }
                    .GameItem.Win>.Content>.GameStats>.Bar {
                        display: block;
                        width: 27px;
                        margin: 5px auto;
                        height: 2px;
                        background: #99b9cf;
                    }
                    .GameItem.Win>.Content>.GameStats>.GameResult {
                        color: #1a78ae;
                    }
                    .GameItem>.Content>.GameSettingInfo {
                        width: 110px;
                        font-size: 0;
                    }
                    .GameItem>.Content>.GameSettingInfo>.ChampionImage {
                        display: inline-block;
                        width: 46px;
                        height: 46px;
                        vertical-align: middle;
                        border-radius: 50%;
                        overflow: hidden;
                    }
                    .GameItem>.Content>.GameSettingInfo>.ChampionImage img {
                        width: 46px;
                        height: 46px;
                    }
                    .GameItem>.Content>.GameSettingInfo>.SummonerSpell {
                        display: inline-block;
                        vertical-align: middle;
                        margin-left: 4px;
                    }
                    .GameItem>.Content>.GameSettingInfo>.SummonerSpell img{
                        width: 22px;
                        height: 22px;
                        margin-top: 2px;
                    }
                    .GameItem>.Content>.GameSettingInfo>.SummonerSpell>.Spell:first-child {
                        margin-left: 0;
                    }
                    .GameItem>.Content>.GameSettingInfo>.Runes {
                        display: inline-block;
                        vertical-align: middle;
                        margin-left: 4px;
                    }
                    .GameItem>.Content>.GameSettingInfo>.Runes>.Rune {
                        width: 22px;
                        height: 22px;
                        margin-top: 2px;
                    }   
                    .GameItem>.Content>.GameSettingInfo>.Runes>.Rune:first-child {
                        margin-top: 0;
                    }
                    .GameItem>.Content>.GameSettingInfo>.Runes>.Rune:first-child>img {
                        background: #000;
                    }
                    .GameItem>.Content>.GameSettingInfo>.Runes>.Rune img{
                        display: block;
                        width: 100%;
                        height: 100%;
                        border-radius: 50%;
                    }
                    .GameItem>.Content>.GameSettingInfo>.ChampionName {
                        margin-top: 8px;
                        font-size: 11px;
                        color: #555;
                        text-align: center;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                    }
                    .GameItem>.Content>.GameSettingInfo>.ChampionName>a {
                        text-decoration: none;
                        color: inherit;
                    }
                    .GameItem>.Content>.KDA {
                        font-size: 11px;
                        font-weight: bold;
                        text-align: center;
                    }
                    .GameItem>.Content>.KDA>.KDA {
                        color: #879292;
                        font-size: 15px;
                        white-space: nowrap;
                    }
                    .GameItem>.Content>.KDA>.KDA>.Kill, .GameItem>.Content>.KDA>.KDA>.Assist {
                        color: #555e5e;
                    }
                    .GameItem>.Content>.KDA>.KDA>.Death {
                        color: #c6443e;
                    }
                    .GameItem>.Content>.KDA>.KDA>.Kill, .GameItem>.Content>.KDA>.KDA>.Assist {
                        color: #555e5e;
                    }
                    .GameItem>.Content>.KDA>.KDARatio {
                        color: #555e5e;
                        font-size: 12px;
                        font-weight: bold;
                        margin-top: 6px;
                    }
                    .GameItem>.Content>.KDA>.KDARatio .KDARatio {
                        color: #353a3a;
                    }
                    .GameItem>.Content>.Items {
                        font-size: 0;
                    }
                    .GameItem>.Content>div {
                        display: table-cell;
                        height: 96px;
                        vertical-align: middle;
                    }
                    .GameItem>.Content>.Items .ItemList {
                        width: 96px;
                        margin: 0 auto;
                    }
                    .GameItem.Win>.Content>.Items>.ItemList>.Item {
                        background-color: #99b9cf;
                    }
                    .GameItem>.Content>.Items .Item {
                        display: inline-block;
                        width: 22px;
                        height: 22px;
                        border-radius: 3px;
                        margin-top: 2px;
                        margin-right: 2px;
                        overflow: hidden;
                    }
                    .GameItem>.Content>.Items .Item img{
                        width: 22px;
                        height: 22px;
                    }
                    .GameItem>.Content>.Items .Item>.Image {
                        width: 100%;
                        height: 100%;
                    }
                    .GameItem>.Content>.Items .Trinket {
                        margin-top: 7px;
                        color: #353a3a;
                        line-height: 13px;
                        font-size: 11px;
                        text-align: center;
                    }
                    .GameItem>.Content>.Items .Trinket img {
                        vertical-align: middle;
                    }
                    .GameItem>.Content>.FollowPlayers {
                        width: 170px;
                        font-size: 0;
                    }
                    .GameItem>.Content>.FollowPlayers.Names>.Team {
                        float: left;
                        width: 50%;
                    }
                    .GameItem>.Content>.FollowPlayers.Names>.Team>.Summoner {
                        display: block;
                        width: 80px;
                        height: 18px;
                        margin-left: 3px;
                        text-align: left;
                        white-space: nowrap;
                    }
                    .GameItem>.Content>.FollowPlayers.Names>.Team>.Summoner>.ChampionImage {
                        display: inline-block;
                        vertical-align: middle;
                        margin-right: 3px;
                    }
                    .GameItem>.Content>.FollowPlayers.Names>.Team>.Summoner>.ChampionImage img{
                        width: 16px;
                        height: 16px;
                    }
                    .GameItem>.Content>.FollowPlayers.Names>.Team>.Summoner>.SummonerName {
                        display: inline-block;
                        max-width: 60px;
                        vertical-align: middle;
                        font-size: 11px;
                        color: #555;
                    }
                    .GameItem>.Content>.FollowPlayers.Names>.Team>.Summoner>.SummonerName>.Link {
                        display: block;
                        color: inherit;
                        text-decoration: none;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        overflow: hidden;
                    }
                    .GameItem>.Content>.FollowPlayers.Names>.Team>.Summoner.Requester>.SummonerName>.Link {
                        color: #222;
                    }
                    .GameItem>.Content>.Stats {
                        width: 90px;
                        font-size: 13px;
                        text-align: center;
                        line-height: 18px;
                        color: #555e5e;
                    }
                    .GameItem>.Content>.Stats>.CKRate {
                        color: #c6443e;
                    }
                `}
            </style>
        </div>
    );
}

export default Leauges;