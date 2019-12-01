import axios from 'axios';
export const ServerAddress = "http://192.168.0.11:8080";
export const LocalAddress = "http://192.168.0.11:3000";
export const OtherAddress = "http://192.168.0.11:3001";
export function getInfo(name) {
    return axios.get(ServerAddress+"/userinfo", {
        params: {
            name: name
        }
    })
}
export function getleagueFirst(encryptedSummonerId) {
    return axios.get(ServerAddress+"/userleaguesFirst", {
        params: {
            encryptedSummonerId: encryptedSummonerId
        }
    })
}
export function getleagueSecond(leagueId) {
    return axios.get(ServerAddress+"/userleaguesSecond", {
        params: {
            leagueId: leagueId
        }
    })
}
export function getmatchlists(encryptedSummonerId) {
    return axios.get(ServerAddress+"/matchlists", {
        params: {
            encryptedSummonerId: encryptedSummonerId
        }
    })
}
export function getmatches(matchId) {
    return axios.get(ServerAddress+"/matches", {
        params: {
            matchId: matchId
        }
    })
}
export function getleagueExp(tier) {
    return axios.get(ServerAddress+"/leagueExp", {
        params: {
            tier: tier
        }
    })
}
export function getesportsMatches(leagueId) {
    return axios.get(ServerAddress+"/esportsMatch", {
        params: {
            leagueId: leagueId
        }
    })
}