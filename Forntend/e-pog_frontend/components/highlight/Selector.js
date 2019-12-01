import React, {useState, useEffect} from 'react';
import {Modal} from 'antd';
import Link from 'next/link';
import { Input, Select } from 'antd';
import axios from 'axios';
import './Selector.scss';

const { Option } = Select;

const Selector = ({modal2Visible, SetModal2Visible}) => {
    const [userInfo, setUserInfo] = useState({});
    const [category, SetCategory] = useState('');
    const [youtubeLink, SetYoutubeLink] = useState('');

    
    return (
        <>
            <div className="Selector_container">
                <div className="Selector_top">
                    <div className="upload-button" onClick={() => SetModal2Visible(true)}><span>등록하기</span></div>
                </div>
                <div className="Selector_underline"></div>
                <div className="Selector_bottom">
                    <div className="categori"><span><Link href={{ pathname: 'highlights', query: { category: 0 }}}><a>전체</a></Link></span></div>
                    <div className="categori"><span><Link href={{ pathname: 'highlights', query: { category: 1 }}}><a>게임</a></Link></span></div>
                    <div className="categori"><span><Link href={{ pathname: 'highlights', query: { category: 2 }}}><a>유머</a></Link></span></div>
                    <div className="categori"><span><Link href={{ pathname: 'highlights', query: { category: 3 }}}><a>음악</a></Link></span></div>
                </div>
            </div>
            <Modal
                title="하이라이트 등록"
                centered
                visible={modal2Visible}
                onOk={() => {
                    axios.post("http://192.168.137.1:8080/highlightboardWriteRequest", {
                        link: youtubeLink,
                        category: category,
                    }, {
                        headers: {
                            token: localStorage.getItem('token')
                        }
                    })
                    .then(response => {
                        alert("등록 완료!")
                        location.href = "/highlights";
                    })
                    SetModal2Visible(false)
                }}
                onCancel={() => SetModal2Visible(false)}
                >
                <p style={{"fontSize": "18px"}}>카테고리</p>
                <Select
                    showSearch
                    style={{ width: 200, marginBottom: 20 }}
                    placeholder="카테고리를 선택하세요."
                    optionFilterProp="children"
                    onChange={(value) => SetCategory(value)}
                    //onFocus={}
                    //onBlur={}
                    //onSearch={}
                    filterOption={(input, option) =>
                    option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                >
                    <Option value="1">게임</Option>
                    <Option value="2">유머</Option>
                    <Option value="3">음악</Option>
                </Select>
                <p style={{"fontSize": "18px"}}>유튜브 링크</p>
                <Input onChange={e => SetYoutubeLink(e.target.value)}/>
            </Modal>
        </>
    );
};

export default Selector;