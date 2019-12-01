import React, {useEffect, useState} from 'react';
import * as api from '../../api/api';
import './MatchSchedule.scss';
import loading_img from '../../static/loading.gif';
const MatchSchedule = () => {
    const [pastLCLMatch, SetPastLCLmatch] = useState([]);
    const [pastLJLMatch, SetPastLJLmatch] = useState([]);
    const [pastLECMatch, SetPastLECmatch] = useState([]);
    const [pastVCSMatch, SetPastVCSmatch] = useState([]);
    const [pastWorldMatch, SetPastWorldMatch] = useState([]);
    const [isLoding, SetIsLoding ] = useState(false);
    const matchFilter = (match) => {
        for(let i = 0; i < match.length; i++) {
            console.log(match[i].league.name);
            if(match[i].league.name === "LCL") {
                SetPastLCLmatch(pastLCLMatch => pastLCLMatch.concat(match[i]))
            } else if(match[i].league.name === "LJL") {
                SetPastLJLmatch(pastLJLMatch => pastLJLMatch.concat(match[i]))
            } else if(match[i].league.name === "LEC") {
                SetPastLECmatch(pastLECMatch => pastLECMatch.concat(match[i]))
            } else if(match[i].league.name === "VCS") {
                SetPastVCSmatch(pastVCSMatch => pastVCSMatch.concat(match[i]))
            } else if(match[i].league.name === "World Championship") {
                SetPastWorldMatch(pastWorldMatch => pastWorldMatch.concat(match[i]))
            }
        }
    }
    useEffect(() => {
        api.getPastMatch()
        .then(response => {
            matchFilter(response.data)
            SetIsLoding(true)
        })
        .catch(error => console.log(error))
    },[])
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
        <>
            <div className="FluidContainer container-fluid">
                <div className="container Intro_section">
                    <h3 className="Title Gilroy">
                        MATCH SCHEDULE
                        <div className="Title__squares">
                            <div className="Title__square"></div>
                            <div className="Title__square"></div>
                            <div className="Title__square small"></div>
                            <div className="Title__square small"></div>
                        </div>
                    </h3>
                    {
                        isLoding ?
                        (<ul className="RecentMatches">
                            <div className="RecentMatches__split Gilroy">Worlds 2019</div>
                            {
                                pastWorldMatch && pastWorldMatch.map(v => {
                                    console.log(v)
                                    return (
                                        <li>
                                            <a className="MatchBar" href="#">
                                                <div className="MatchBar__column date Gilroy finished">
                                                    {getTimestamp(v.end_at)}
                                                    <br/>
                                                </div>
                                                <div className="MatchBar__column home">
                                                    <span className="Gilroy MatchBar__team__line">{v.opponents[0].opponent.acronym}</span>
                                                    <figure className="TeamSymbol MatchBar__column__symbol hidden-in-phone circleless">
                                                        <div className="TeamSymbol__image" style={{backgroundImage: `url(${v.opponents[0].opponent.image_url})`}}></div>
                                                    </figure>
                                                </div>
                                                <div className="MatchBar__column board">
                                                    <div className="ScoreBoard Gilroy MatchBar__column__score">
                                                        <div className="ScoreBoard__overlay">RESULT</div>
                                                        {v.results[0].score} : {v.results[1].score}
                                                    </div>
                                                </div>
                                                <div className="MatchBar__column away">            
                                                        <figure className="TeamSymbol MatchBar__column__symbol hidden-in-phone circleless">
                                                            <div className="TeamSymbol__image" style={{backgroundImage: `url(${v.opponents[1].opponent.image_url}`}}></div>
                                                        </figure>
                                                        <span className="Gilroy MatchBar__team__line">{v.opponents[1].opponent.acronym}</span>
                                                    </div>
                                                
                                                <div className="MatchBar__column arrow Gilroy">
                                                    
                                                </div>
                                            </a>
                                        </li>
                                    )
                                })
                            }         
                        </ul>) : <div style={{ width: "1120px", display:"flex", justifyContent: "center"}}><img style={{width: "50px", height: "50px"}} src={loading_img}/></div>
                    }
                </div>
            </div>
        </>
    )
}

export default MatchSchedule;