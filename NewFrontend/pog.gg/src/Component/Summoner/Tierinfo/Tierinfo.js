import React from 'react';
import './Tierinfo.css';

const Tierinfo = ({index, name, data}) => {
    const imageFilter = (tier, rank) => {
        if(tier === "IRON") {
            if(rank === "IV") {
                return (<img src="https://poro.gg/images/lol/tier/iron_4.png"/>)
            } else if(rank === "III") {
                return (<img src="https://poro.gg/images/lol/tier/iron_3.png"/>)
            } else if(rank === "II") {
                return (<img src="https://poro.gg/images/lol/tier/iron_2.png"/>)
            } else if(rank === "I") {
                return (<img src="https://poro.gg/images/lol/tier/iron_1.png"/>)
            } 
        } else if(tier === "BRONZE") {
            if(rank === "IV") {
                return (<img src="https://poro.gg/images/lol/tier/bronze_4.png"/>)
            } else if(rank === "III") {
                return (<img src="https://poro.gg/images/lol/tier/bronze_3.png"/>)
            } else if(rank === "II") {
                return (<img src="https://poro.gg/images/lol/tier/bronze_2.png"/>)
            } else if(rank === "I") {
                return (<img src="https://poro.gg/images/lol/tier/bronze_1.png"/>)
            } 
        } else if (tier === "SILVER") {
            if(rank === "IV") {
                return (<img src="https://poro.gg/images/lol/tier/silver_4.png"/>)
            } else if(rank === "III") {
                return (<img src="https://poro.gg/images/lol/tier/silver_3.png"/>)
            } else if(rank === "II") {
                return (<img src="https://poro.gg/images/lol/tier/silver_2.png"/>)
            } else if(rank === "I") {
                return (<img src="https://poro.gg/images/lol/tier/silver_1.png"/>)
            } 
        } else if (tier === "GOLD") {
            if(rank === "IV") {
                return (<img src="https://poro.gg/images/lol/tier/gold_4.png"/>)
            } else if(rank === "III") {
                return (<img src="https://poro.gg/images/lol/tier/gold_3.png"/>)
            } else if(rank === "II") {
                return (<img src="https://poro.gg/images/lol/tier/gold_2.png"/>)
            } else if(rank === "I") {
                return (<img src="https://poro.gg/images/lol/tier/gold_1.png"/>)
            }
        } else if (tier === "PLATINUM") { 
            if(rank === "IV") {
                return (<img src="https://poro.gg/images/lol/tier/platinum_4.png"/>)
            } else if(rank === "III") {
                return (<img src="https://poro.gg/images/lol/tier/platinum_3.png"/>)
            } else if(rank === "II") {
                return (<img src="https://poro.gg/images/lol/tier/platinum_2.png"/>)
            } else if(rank === "I") {
                return (<img src="https://poro.gg/images/lol/tier/platinum_1.png"/>)
            }
        } else if (tier === "DIAMOND") {
            if(rank === "IV") {
                return (<img src="https://poro.gg/images/lol/tier/diamond_4.png"/>)
            } else if(rank === "III") {
                return (<img src="https://poro.gg/images/lol/tier/diamond_3.png"/>)
            } else if(rank === "II") {
                return (<img src="https://poro.gg/images/lol/tier/diamond_2.png"/>)
            } else if(rank === "I") {
                return (<img src="https://poro.gg/images/lol/tier/diamond_1.png"/>)
            }
        } else if (tier === "MASTER") {
            return (<img src="https://poro.gg/images/lol/tier/master_1.png"/>)
        } else if (tier === "GRANDMASTER") {
            return (<img src="https://poro.gg/images/lol/tier/grandmaster_1.png"/>)
        } else if (tier === "CHALLENGER") {
            return (<img src="https://poro.gg/images/lol/tier/challenger_1.png"/>)
        }
    }
    return (
        <div className="rank">
            {   data === "" ?
                (<>
                    <div className="TierImage">
                    {
                        <img src="https://opgg-static.akamaized.net/images/medals/default.png"/>
                    }
                    </div>
                    <div className="TierInfo unranked">
                        <div className="RankType">{name}</div>
                        <span className="Unranked">Unranked</span>
                    </div>
                </>) :
                (
                    <>
                        <div className="TierImage">
                        {
                            imageFilter(data.tier, data.rank)
                        }
                        </div>
                        <div className="TierInfo">
                            <div className="RankType">{name}</div>
                            <b className="TierRank">{data.tier + " " + data.rank}</b>
                            <span className="LeaguePoints">{data.leaguePoints} LP</span>
                            <div class="winrate">
                                <span className="WinLose">
                                    <span className="wins">{data.wins}승</span>
                                    <span className="losses">{data.losses}패</span> <br/>
                                    <span class="winrate">승률 {Math.round((data.wins / (data.wins + data.losses)) * 100)}%</span>
                                </span>
                            </div>
                        </div>
                    </>
                )

            }
        </div>
    );
}

export default Tierinfo;