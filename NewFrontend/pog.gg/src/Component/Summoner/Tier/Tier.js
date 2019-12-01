import React, {useState, useEffect} from 'react';
import Tierinfo from '../Tierinfo';
import * as api from '../../../api/api';
import './Tier.css';

const Body = ({leagueEntriesInfo}) => {
    const [soloInfo, setSoloinfo] = useState("");
    const [tftInfo, setTftinfo] = useState("");
    const [flexInfo, setFlexinfo] = useState("");
    useEffect(() => {
        for(let i = 0; i < leagueEntriesInfo.length; i++) {
            if(leagueEntriesInfo[i].queueType === "RANKED_SOLO_5x5") {
                setSoloinfo(leagueEntriesInfo[i])
            } else if(leagueEntriesInfo[i].queueType === "RANKED_TFT") {
                setTftinfo(leagueEntriesInfo[i])
            } else if(leagueEntriesInfo[i].queueType === "RANKED_FLEX_SR") {
                setFlexinfo(leagueEntriesInfo[i])
            }
        }
    })
    return(
        <div className="rank_wrapper">
            <Tierinfo name="솔로랭크" data={soloInfo}/>
            <Tierinfo name="자유랭크" data={flexInfo}/>
            <Tierinfo name="롤토체스" data={tftInfo}/>
            <style jsx>
                {`
                    
                `}
            </style>
        </div>
    );
};

export default Body;