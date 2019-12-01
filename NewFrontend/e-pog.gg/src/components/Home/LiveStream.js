import React from 'react';
import './LiveStream.scss';
const LiveStream = () => {
    return (
        <>
            <div className="FluidContainer container-fluid">
                <div className="container LiveStreams Intro__section">
                    <h3 className="Title Gilroy">
                        <div className="Title__squares">
                            <div className="Title__square"></div>
                            <div className="Title__square"></div>
                            <div className="Title__square small"></div>
                            <div className="Title__square small"></div>
                        </div>
                        Live STREAMING
                    </h3>
                    <div className="LiveStreams__container">
                        <div className="LiveStreams__streaming">
                            <a href="#">
                                <img className="LiveStreams__streaming__thumbnail" src="https://static-cdn.jtvnw.net/previews-ttv/live_user_rush-320x180.jpg"/>
                                <div className="LiveStreams__streaming_player">
                                    <figure className="PlayerIcon LiveStreams__streaming__playerIcon small" style={{backgroundImage: "url(https://gamepedia.cursecdn.com/lolesports_gamepedia_en/6/60/FOX_Rush_2019_Split_1.png)"}}></figure>
                                    <div className="LiveStreams__streaming__playerName">FOX Rush</div>
                                </div>
                            </a>
                        </div>
                        <div className="LiveStreams__streaming">
                            <a href="https://www.twitch.tv/gengrich1">
                                <img className="LiveStreams__streaming__thumbnail" src="https://static-cdn.jtvnw.net/previews-ttv/live_user_gengrich1-320x180.jpg"/>
                                <div className="LiveStreams__streaming_player"> 
                                    <figure className="PlayerIcon LiveStreams__streaming__playerIcon small" style={{backgroundImage: "url(https://gamepedia.cursecdn.com/lolesports_gamepedia_en/4/40/GEN_Rich_2019_Split_2.png)"}}></figure>
                                    <div className="LiveStreams__streaming__playerName">Gen Rich</div>
                                </div>
                            </a>
                        </div>
                        <div className="LiveStreams__streaming">
                            <a href="https://www.twitch.tv/c9sneaky">
                                <img className="LiveStreams__streaming__thumbnail" src="https://static-cdn.jtvnw.net/previews-ttv/live_user_c9sneaky-320x180.jpg"/>
                                <div className="LiveStreams__streaming_player"> 
                                    <figure className="PlayerIcon LiveStreams__streaming__playerIcon small" style={{backgroundImage: "url(https://gamepedia.cursecdn.com/lolesports_gamepedia_en/8/89/C9_Sneaky_2019_Split_1.png)"}}></figure>
                                    <div className="LiveStreams__streaming__playerName">C9 Sneaky</div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LiveStream;