import champData from '../static-data/champ-static-data';
import spellData from '../static-data/spell-static-data';

const GetGameData = {
    getChampData : (champion) => {
        for (let i in champData.data) {
            if(champData.data[i].id === champion) return (`http://opgg-static.akamaized.net/images/lol/champion/${champData.data[i].key}.png?image=w_55&v=1`)
        }
    },
    getChampName : (champion) => {
        for (let i in champData.data) {
            if(champData.data[i].id === champion) return champData.data[i].name
        }
    },
    getGameTime : (timestamp) => {
        const date = new Date(timestamp),
              year = date.getFullYear(),
              month = date.getMonth()+1,
              day = date.getDate(),
              hour = date.getHours(),
              min = date.getMinutes(),
              sec = date.getSeconds(),
              retVal =   year + "-" + (month < 10 ? "0" + month : month) + "-" 
                        + (day < 10 ? "0" + day : day) + " " 
                        + (hour < 10 ? "0" + hour : hour) + ":"
                        + (min < 10 ? "0" + min : min) + ":" 
                        + (sec < 10 ? "0" + sec : sec);
        return retVal
    },
    
    getItemUrl : (itemCode) => {
        if(itemCode !== 0) { return (`http://opgg-static.akamaized.net/images/lol/item/${itemCode}.png?image=w_22&v=15276924000`)}
        else { return(`https://lolprofile.net/web/img/item-1.png`)}
    },
    getSpellUrl : (spellCode) => {
        console.log(spellCode)
        for (let i in spellData.data) {
            if(spellData.data[i].id === spellCode) return (`https://ddragon.leagueoflegends.com/cdn/9.19.1/img/spell/${"Summoner"+spellData.data[i].key}.png`)
        }
    },
    getPreferData : (data) => {
        let champ = [],
            rankCount = 0,
            playChamp = [],
            playChampCnt = [],
            preferData = {
                preferChamp: '',
                preferLane: '',
                champ: [],
                lane: [{
                    lane: "SUPPORT",
                    playCount: 0,
                    style: {
                        backgroundImage: `url('http://opgg-static.akamaized.net/assets/site.png')`,
                        backgroundPosition: "-70px -2794px",
                    }
                }, {
                    lane: "TOP",
                    playCount: 0,
                    style: {
                        backgroundImage: `url('http://opgg-static.akamaized.net/assets/site.png')`,
                        backgroundPosition: "-80px -2872px",
                    }
                }, {
                    lane: "MID",
                    playCount: 0,
                    style: {
                        backgroundImage: `url('http://opgg-static.akamaized.net/assets/site.png')`,
                        backgroundPosition: "-80px -2719px",
                    }
                }, {
                    lane: "JUNGLE",
                    playCount: 0,
                    style: {
                        backgroundImage: `url('http://opgg-static.akamaized.net/assets/site.png')`,
                        backgroundPosition: "-83px -2640px",
                    }
                }, {
                    lane: "BOTTOM",
                    playCount: 0,
                    style: {
                        backgroundImage: `url('http://opgg-static.akamaized.net/assets/site.png')`,
                        backgroundPosition: "-80px -2564px",
                    }
                }, {
                    lane: "NONE",
                    playCount: 0
                }, ]
            };
        data.map((item) => {
            if (item.role === "DUO_SUPPORT") {
                rankCount++;
                preferData.lane[0].playCount++;
            } else {
                switch (item.lane) {
                    case "TOP":
                        rankCount++;
                        preferData.lane[1].playCount++;
                        break;
                    case "MID":
                        rankCount++;
                        preferData.lane[2].playCount++;
                        break;
                    case "JUNGLE":
                        rankCount++;
                        preferData.lane[3].playCount++;
                        break;
                    case "BOTTOM":
                        rankCount++;
                        preferData.lane[4].playCount++;
                        break;
                    case "NONE":
                        rankCount++;
                        preferData.lane[5].playCount++;
                        break;
                    default:
                        return preferData.lane;
                }
            }
            return champ.push(item.champion);
        });
        playChamp = champ.filter((item, pos) => champ.indexOf(item) === pos)
        playChamp.map((item) => playChampCnt.push(champ.filter((items) => item === items))) 
        preferData.champ = playChampCnt;
        preferData.preferChamp = preferData.champ.reduce((prev, current) => (prev.length > current.length) ? prev : current) 
        preferData.preferLane = preferData.lane.reduce((prev, current) => (prev.playCount > current.playCount) ? prev : current) 
        preferData.rankCount = rankCount
        return preferData;
    }
}
export { GetGameData };