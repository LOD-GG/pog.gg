import React from 'react';
import './TeamIntro.scss';
const TeamIntro = () => {
    return (
        <>
            <div className="Intro">
                <div className="FluidContainer container-fluid">
                    <div className="container">
                        <h3 className="Title Gilroy">
                            <div className="Title__squares">
                                <div className="Title__square"></div>
                                <div className="Title__square"></div>
                                <div className="Title__square small"></div>
                                <div className="Title__square small"></div>
                            </div>
                            2020 LCK TEAMS
                        </h3>
                        <div className="LeagueTeams">
                            <div className="LeagueTeams__teams">
                                <a className="LeagueTeams__link" href="#">
                                    <figure className="TeamSymbol LeagueTeams__team large">
                                        <div className="TeamSymbol__image" style={{backgroundImage: "url(https://qwer.gg/images/logos/AF.png)"}}></div>
                                        <span className="TeamSymbol__acronym Gilroy">AF</span>
                                    </figure>
                                </a>
                                <a className="LeagueTeams__link" href="#">
                                    <figure className="TeamSymbol LeagueTeams__team large">
                                        <div className="TeamSymbol__image" style={{backgroundImage: "url(https://qwer.gg/images/logos/DWG.png)"}}></div>
                                        <span className="TeamSymbol__acronym Gilroy">DWG</span>
                                    </figure>
                                </a>
                                <a className="LeagueTeams__link" href="#">
                                    <figure className="TeamSymbol LeagueTeams__team large">
                                        <div className="TeamSymbol__image" style={{backgroundImage: "url(https://qwer.gg/images/logos/GEN.png)"}}></div>
                                        <span className="TeamSymbol__acronym Gilroy">GEN</span>
                                    </figure>
                                </a>
                                <a className="LeagueTeams__link" href="#">
                                    <figure className="TeamSymbol LeagueTeams__team large">
                                        <div className="TeamSymbol__image" style={{backgroundImage: "url(https://qwer.gg/images/logos/GRF.png)"}}></div>
                                        <span className="TeamSymbol__acronym Gilroy">GRF</span>
                                    </figure>
                                </a>
                                <a className="LeagueTeams__link" href="#">
                                    <figure className="TeamSymbol LeagueTeams__team large">
                                        <div className="TeamSymbol__image" style={{backgroundImage: "url(https://qwer.gg/images/logos/HLE.png)"}}></div>
                                        <span className="TeamSymbol__acronym Gilroy">HLE</span>
                                    </figure>
                                </a>
                                <a className="LeagueTeams__link" href="#">
                                    <figure className="TeamSymbol LeagueTeams__team large">
                                        <div className="TeamSymbol__image" style={{backgroundImage: "url(https://qwer.gg/images/logos/SKT.png)"}}></div>
                                        <span className="TeamSymbol__acronym Gilroy">SKT</span>
                                    </figure>
                                </a>
                                <a className="LeagueTeams__link" href="#">
                                    <figure className="TeamSymbol LeagueTeams__team large">
                                        <div className="TeamSymbol__image" style={{backgroundImage: "url(https://qwer.gg/images/logos/APK.png)"}}></div>
                                        <span className="TeamSymbol__acronym Gilroy">APK</span>
                                    </figure>
                                </a>
                                <a className="LeagueTeams__link" href="#">
                                    <figure className="TeamSymbol LeagueTeams__team large">
                                        <div className="TeamSymbol__image" style={{backgroundImage: "url(https://qwer.gg/images/logos/KT.png)"}}></div>
                                        <span className="TeamSymbol__acronym Gilroy">KT</span>
                                    </figure>
                                </a>
                                <a className="LeagueTeams__link" href="#">
                                    <figure className="TeamSymbol LeagueTeams__team large">
                                        <div className="TeamSymbol__image" style={{backgroundImage: "url(https://qwer.gg/images/logos/KZ.png)"}}></div>
                                        <span className="TeamSymbol__acronym Gilroy">KZ</span>
                                    </figure>
                                </a>
                                <a className="LeagueTeams__link" href="#">
                                    <figure className="TeamSymbol LeagueTeams__team large">
                                        <div className="TeamSymbol__image" style={{backgroundImage: "url(https://qwer.gg/images/logos/SB.png)"}}></div>
                                        <span className="TeamSymbol__acronym Gilroy">SB</span>
                                    </figure>
                                </a>
                                    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TeamIntro;