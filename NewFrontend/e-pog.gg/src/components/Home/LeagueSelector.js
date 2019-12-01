import React from 'react';
import './LeagueSelector.scss';
const LeagueSelector = () => {
    console.log("hi")
    return (
        <div>
            <div className="FluidContainer container-fluid LeagueSelector">
                <div className="container">
                    <div className="TournamentSymbol LeagueSelector__highlighted">
                        <img className="TournamentSymbol__image" src="https://qwer.gg/images/logos/LCK@gray.png" alt="LCK 2019 Summer Season"/>
                        <span className="TournamentSymbol__label Gilroy">LCK 2019 Summer</span>
                        <div className="LeagueSelector__more">
                            <span>더 많은 리그 보기</span>
                            <svg style={{"width": ".625rem" ,"height": "1rem", "margin-left": ".625rem"}}aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-down" class="fa-angle-down fa-w-10 Icon svg-inline--fa LeagueSelector__more__icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"></path></svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeagueSelector;