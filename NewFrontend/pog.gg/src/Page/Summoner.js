import React, {useState, useCallback, useEffect} from 'react';
import AppLayout from '../Component/AppLayout/AppLayout';    
import Header from '../Component/Summoner/Header';
import Tier from '../Component/Summoner/Tier';
import Leagues from '../Component/Summoner/Leagues';
import * as api from '../api/api';
import loading_img from '../static/loading_img.gif';
import './Summoner.css';
import queryString from 'query-string';

const Summoner = ({location}) => {
    const [userinfo, setUserinfo] = useState('');
    const [leagueEntriesInfo, setLeagueEntriesfirst] = useState('');
    const [matchlist, setMatchlist] = useState('');
    const [matchesData, setMatchesdata] = useState([]);
    const [loading, SetLoading] = useState(false);
    const query = queryString.parse(location.search);
    const {name} = query;

    useEffect(() => {
        const fetchUserinfo = async () => {
            const result = await api.getInfo(name)
            setUserinfo(result.data)
            fetchLeagueinfo(result.data)
            fetchMatchlist(result.data)
        }
        const fetchLeagueinfo = async (userinfo) => {
            const result = await api.getleagueFirst(userinfo.id)
            setLeagueEntriesfirst(result.data)
        }
        const fetchMatchlist = async (userinfo) => {
            const result = await api.getmatchlists(userinfo.accountId)
            console.log(result)
            setMatchlist(result.data)
            fetchMatchdata(result.data)
        }
        const fetchMatchdata = async (matchlist) => {
            matchlist.matches.map(v => {
                api.getmatches(v.gameId)
                .then((response) => {
                    setMatchesdata(matchesData => matchesData.concat(response.data).sort((a,b) => {
                        return a.gameCreation > b.gameCreation ? -1 : a.gameCreation < b.gameCreation ? 1 : 0;
                    }));
                    SetLoading(true)
                })
                .catch(error => console.log(error))
            })
        }
        const esportsMatch = async () => {
            const result = await api.getesportsMatches("293")
            console.log(result)
        }
        fetchUserinfo();
        esportsMatch();
    },[name]);
    return (
        <div>   
            <AppLayout/>
            {loading === true ? <>
                <Header matchlist={matchlist} userinfo={userinfo}/>
                <div className="InfoTop">
                    <div className="InfoContents">
                        <div className="InfoTier">
                            <Tier leagueEntriesInfo={leagueEntriesInfo}/>
                        </div>
                        <div className="GameContents">
                            <Leagues name={name} matchList={matchlist} matchesData={matchesData}/>
                        </div>
                    </div>
                </div>
            </> : <div className="loading"><img alt="loading" src={loading_img}/></div>}
        </div>
    );
}

export default Summoner;