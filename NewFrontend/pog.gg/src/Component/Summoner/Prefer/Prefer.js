import React, {useState, useEffect} from 'react';
import {GetGameData} from '../../lib';
import './Prefer.css';
const Prefer = ({matchlist}) => {
    const [preferData,  SetPreferdata] = useState("");
    let name = "";
    let playcount = 0;
    let playChamp = 0;
    useEffect(() => {
        if(matchlist){
            SetPreferdata(GetGameData.getPreferData(matchlist.matches));
        }
    },[matchlist])
    const getPreferLane = (lane) => {
        if(lane.preferLane !== undefined) {
            console.log(lane.preferLane)
            if(lane.preferLane.lane === "TOP") {
                playcount=lane.preferLane.playCount / lane.rankCount * 100;
                name="탑";
                return <img className="Lane_Image" style={{width:"50px" , height:"50px"}} src="https://poro.gg/images/lol/role/top.svg"/>
            } else if(lane.preferLane.lane === "MID") {
                playcount=lane.preferLane.playCount / lane.rankCount * 100;
                name="미드";
                return <img className="Lane_Image" style={{width:"50px" , height:"50px"}} src="https://poro.gg/images/lol/role/mid.svg"/>
            } else if(lane.preferLane.lane === "JUNGLE") {
                playcount=lane.preferLane.playCount / lane.rankCount * 100;
                name="정글";
                return <img className="Lane_Image" style={{width:"50px" , height:"50px"}} src="https://poro.gg/images/lol/role/jng.svg"/>
            } else if(lane.preferLane.lane === "BOTTOM") {
                playcount=lane.preferLane.playCount / lane.rankCount * 100;
                name="원딜"
                return <img className="Lane_Image" style={{width:"50px" , height:"50px"}} src="https://poro.gg/images/lol/role/adc.svg"/>
            } else if(lane.preferLane.lane === "SUPPORT") {
                playcount=lane.preferLane.playCount / lane.rankCount * 100;
                name="서폿"
                return <img className="Lane_Image" style={{width:"50px" , height:"50px"}} src="https://poro.gg/images/lol/role/sup.svg"/>
            }
        }
        
    }
    const getPreferChamp = (champ) => {
        if(champ.preferChamp !== undefined) {
            playChamp = preferData.preferChamp.length / preferData.rankCount * 100;
            let champData = GetGameData.getChampData(champ.preferChamp[0]);
            return champData;
        }
    }
    const getPreferName = (champ) => {
        if(champ.preferChamp !== undefined) {
            let champName = GetGameData.getChampName(champ.preferChamp[0]);
            return champName;
        }
    }

    return(
        <div className="Prefer">
            <div className="PreferLane">
                    <span className="PreferPosition">선호포지션</span>
                    <div className="PreferLane_Info">
                        {
                            getPreferLane(preferData)
                        }
                        <div className="PreferLane_SubInfo">
                            <span className="name">{name}</span>
                            <span className="RoleRate"><b>{playcount.toFixed(0)}</b>%</span>
                        </div>
                    </div>
            </div>
            <div className="PreferChamp">
                <span className="PreferPosition">선호챔피언</span>
                    <div className="PreferLane_Info">
                        {
                            <img src={getPreferChamp(preferData)}/>
                        }
                    
                    <div className="PreferLane_SubInfo">
                            <span className="name">{getPreferName(preferData)}</span>
                            <span className="RoleRate"><b>{playChamp.toFixed(0)}</b>%</span>
                    </div>
                    </div>
            </div>
        </div>
    )
};

export default Prefer;