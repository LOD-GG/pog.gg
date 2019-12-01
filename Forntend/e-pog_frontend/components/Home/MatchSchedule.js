import React, {useEffect, useState} from 'react';
import * as api from '../../api/api';
import './MatchSchedule.scss';
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
                                                    {v.end_at}
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
                                                    DETAIL
                                                </div>
                                            </a>
                                        </li>
                                    )
                                })
                            }         
                        </ul>) : <div style={{ width: "1120px", display:"flex", justifyContent: "center"}}><img style={{width: "50px", height: "50px"}}src="/static/loading.gif"/></div>
                    }
                </div>
            </div>
        </>
    )
}

export default MatchSchedule;