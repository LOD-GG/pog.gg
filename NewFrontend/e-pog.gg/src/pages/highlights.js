import React , {useState, useEffect} from 'react';
import Highlight from '../components/highlight/Highlight';
import axios from 'axios';
import Selector from '../components/highlight/Selector';
import AppLayout from '../components/AppLayout/AppLayout';
import queryString from 'query-string';
import * as api from '../api/api';
import './highlights.css';
const HighlightPage = ({location}) => {
    const [highlightInfo, SetHighlightInfo] = useState([]);
    const [modal2Visible,SetModal2Visible] = useState(false);
    const query = queryString.parse(location.search);
    useEffect(() => {
        let {category} = query;
        if(category === undefined) {category = 0;}
        axios.get(`${api.ServerAddress}/highlightboard`, {
            params: {
                pageNum: 1,
                way: "voteCount",
                category: category
            }
        })
        .then(response => {
            console.log(response.data)
            SetHighlightInfo(response.data);
        })
        .catch(error => {
            console.log(error)
        })
    },[])
        return (
        <>
            <AppLayout/>
            <div className="Home">
                    <div style={{marginTop:"30px"}} className="container">
                        <Selector modal2Visible={modal2Visible} SetModal2Visible={SetModal2Visible}/>
                    </div>
                    <div className="container">
                        {
                            highlightInfo.map((v,i) => {
                                return (
                                    <Highlight key={i}  videoInfo={v} freeid={v.freeid}/>
                                )
                            })
                        }
                </div>
            </div>
        </>
    )
}
export default HighlightPage;