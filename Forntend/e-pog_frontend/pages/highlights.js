import React , {useState, useEffect} from 'react';
import Highlight from '../components/highlight/Highlight';
import { useRouter } from 'next/router';
import axios from 'axios';
import Selector from '../components/highlight/Selector';
import queryString from 'query-string';
import './highlights.scss';
const HighlightPage = () => {
    const [highlightInfo, SetHighlightInfo] = useState([]);
    const router = useRouter();
    useEffect(() => {
        let {category} = router.query;
        if(category === undefined) {category = 0;}
        axios.get("http://192.168.137.1:8080/highlightboard", {
            params: {
                pageNum: 1,
                way: "voteCount",
                category: category
            }
        })
        .then(response => {
            SetHighlightInfo(response.data);
        })
        .catch(error => {
            console.log(error)
        })
    },[router])
    const [modal2Visible,SetModal2Visible] = useState(false);
        return (
        <>
            <div className="Home">
                <div className="container" style={{marginBottom: "20px"}}>
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