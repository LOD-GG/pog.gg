import axios from 'axios';
export const ServerAddress = "http://192.168.0.11:8080";
export const LocalAddress = "http://192.168.0.11:3000";
export const OtherAddress = "http://192.168.0.11:3001";
export function getPastMatch() {
    return axios.get(ServerAddress+"/pastMatch")
}
export function getTournanments(id) {
    return axios.get(ServerAddress+"/tournanments", {
        params:
        {
            id:id
        }
    })
}