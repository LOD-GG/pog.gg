import React, {useEffect, useState} from 'react';
import * as api from '../../api/api';
import './TeamRank.scss';
const TeamRank = () => {
    useEffect(() => {
        api.getTournanments(2392)
        .then(response => console.log(response))
        .catch(error => console.log(error))
    })
    return (
        <>
            <div className="FluidContainer container-fluid">
                <div className="container Intro_section">
                    <h3 className="Title Gilroy">
                        <div className="Title__squares">
                            <div className="Title__square"></div>
                            <div className="Title__square"></div>
                            <div className="Title__square small"></div>
                            <div className="Title__square small"></div>
                        </div>
                        LCK 2019 Summer 순위
                    </h3>
                    <div className="Ranks">
                        <table className="RankTable Gilroy Ranks--desktop">
                            <thead>
                                <tr>
                                    <th colspan="3"></th>
                                    <th scope="col" colspan="2"><span>승-패</span></th>
                                    <th colspan="2"><span>세트</span></th>
                                    <th scope="col"><span>득실차</span></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="RankTable__row RankTable__lead">
                                    <td className="RankTabe__row__logo" style={{backgroundImage: "url(https://qwer.gg/images/logos/GRF.png)"}}></td>
                                    <td>1</td>
                                    <td className="RankTable__name">
                                        <span className="hidden-in-mobile">Griffin</span>
                                    </td>
                                    <td>
                                        13W&nbsp;5L
                                    </td>
                                    <td>72.2%</td>
                                    <td>29W&nbsp;13L</td>
                                    <td>69.0%</td>
                                    <td>16</td>
                                </tr>
                                <tr className="RankTable__row">
                                    <td className="RankTabe__row__logo" style={{backgroundImage: "url(https://qwer.gg/images/logos/DWG.png)"}}></td>
                                    <td>2</td>
                                    <td className="RankTable__name">
                                        <span className="hidden-in-mobile">DAMWON Gaming</span>
                                    </td>
                                    <td>
                                        13W&nbsp;5L
                                    </td>
                                    <td>72.2%</td>
                                    <td>28W&nbsp;16L</td>
                                    <td>63.6%</td>
                                    <td>12</td>
                                </tr>
                                <tr className="RankTable__row">
                                    <td className="RankTabe__row__logo" style={{backgroundImage: "url(https://qwer.gg/images/logos/SB.png)"}}></td>
                                    <td>3</td>
                                    <td className="RankTable__name">
                                        <span className="hidden-in-mobile">SANDBOX Gaming</span>
                                    </td>
                                    <td>
                                        12W&nbsp;6L
                                    </td>
                                    <td>66.7%</td>
                                    <td>27W&nbsp;18L</td>
                                    <td>60.0%</td>
                                    <td>9</td>
                                </tr>
                                <tr className="RankTable__row">
                                    <td className="RankTabe__row__logo" style={{backgroundImage: "url(https://qwer.gg/images/logos/SKT.png)"}}></td>
                                    <td>4</td>
                                    <td className="RankTable__name">
                                        <span className="hidden-in-mobile">SKT T1</span>
                                    </td>
                                    <td>
                                        11W&nbsp;7L
                                    </td>
                                    <td>61.1%</td>
                                    <td>26W&nbsp;17L</td>
                                    <td>60.5%</td>
                                    <td>9</td>
                                </tr>
                                <tr className="RankTable__row">
                                    <td className="RankTabe__row__logo" style={{backgroundImage: "url(https://qwer.gg/images/logos/AF.png)"}}></td>
                                    <td>5</td>
                                    <td className="RankTable__name">
                                        <span className="hidden-in-mobile">Afreeca Freecs</span>
                                    </td>
                                    <td>
                                        11W&nbsp;7L
                                    </td>
                                    <td>61.1%</td>
                                    <td>26W&nbsp;20L</td>
                                    <td>56.5%</td>
                                    <td>6</td>
                                </tr>
                                <tr className="RankTable__row">
                                    <td className="RankTabe__row__logo" style={{backgroundImage: "url(https://qwer.gg/images/logos/GEN.png)"}}></td>
                                    <td>6</td>
                                    <td className="RankTable__name">
                                        <span className="hidden-in-mobile">GEN.G</span>
                                    </td>
                                    <td>
                                        10W&nbsp;8L
                                    </td>
                                    <td>55.6%</td>
                                    <td>24W&nbsp;20L</td>
                                    <td>54.5%</td>
                                    <td>4</td>
                                </tr>
                                <tr className="RankTable__row">
                                    <td className="RankTabe__row__logo" style={{backgroundImage: "url(https://qwer.gg/images/logos/KZ.png)"}}></td>
                                    <td>7</td>
                                    <td className="RankTable__name">
                                        <span className="hidden-in-mobile">Kingzone DragonX</span>
                                    </td>
                                    <td>
                                        11W&nbsp;7L
                                    </td>
                                    <td>61.1%</td>
                                    <td>23W&nbsp;23L</td>
                                    <td>50.0%</td>
                                    <td>0</td>
                                </tr>
                                <tr className="RankTable__row">
                                    <td className="RankTabe__row__logo" style={{backgroundImage: "url(https://qwer.gg/images/logos/KT.png)"}}></td>
                                    <td>8</td>
                                    <td className="RankTable__name">
                                        <span className="hidden-in-mobile">KT Rolster</span>
                                    </td>
                                    <td>
                                        6W&nbsp;12L
                                    </td>
                                    <td>33.3%</td>
                                    <td>16W&nbsp;28L</td>
                                    <td>36.4%</td>
                                    <td>-12</td>
                                </tr>
                                <tr className="RankTable__row">
                                    <td className="RankTabe__row__logo" style={{backgroundImage: "url(https://qwer.gg/images/logos/HLE.png)"}}></td>
                                    <td>9</td>
                                    <td className="RankTable__name">
                                        <span className="hidden-in-mobile">Hanwha life</span>
                                    </td>
                                    <td>
                                        5W&nbsp;13L
                                    </td>
                                    <td>27.8%</td>
                                    <td>15W&nbsp;27L</td>
                                    <td>35.7%</td>
                                    <td>-12</td>
                                </tr>
                                <tr className="RankTable__row">
                                    <td className="RankTabe__row__logo" style={{backgroundImage: "url(https://qwer.gg/images/logos/JAG.png)"}}></td>
                                    <td>10</td>
                                    <td className="RankTable__name">
                                        <span className="hidden-in-mobile">Jin Air Green Wings</span>
                                    </td>
                                    <td>
                                        0W&nbsp;18L
                                    </td>
                                    <td>0.0%</td>
                                    <td>4W&nbsp;36L</td>
                                    <td>10.0%</td>
                                    <td>-32</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TeamRank;