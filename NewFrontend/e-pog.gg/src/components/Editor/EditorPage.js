import React, {useState, useEffect} from 'react';
import 'suneditor/dist/css/suneditor.min.css'
import SUNEDITOR from 'suneditor'
import plugins from 'suneditor/src/plugins'
import './EditorPage.css';
import {Select, Button, Input } from 'antd';
import * as api from '../../api/api';
import axios from 'axios';
const { Option } = Select;

const EditorPage = () => {
    const [editorInput, setEditorInput] = useState('');
    const [editorTitle, setEditorTtitle] = useState('');
    const [editorTeam, setEditorTeam] = useState('skt');
    const onClick = () => {
        console.log(editorInput)
        axios.post(`${api.ServerAddress}/teamboardWriteRequest`,{
            content: editorInput,
            title: editorTitle,
            teamName: editorTeam
        },{    
            headers: {
                token: localStorage.getItem('token')
            }
        })
        .then(response => {
            alert('작성완료!')
            window.location = "/community";
            console.log(response)
        })
    }
    const onChange = (e) => {
        setEditorTtitle(e.target.value)
    }
    useEffect(() => {
        const editor = SUNEDITOR.create('sample', {
            plugins: plugins,
            display: 'block',
            width: '1140px',
            height: '500px',
            popupDisplay: 'full',
            charCounter: true,
            buttonList: [
                ['undo', 'redo'],
                ['font', 'fontSize', 'formatBlock'],
                ['bold', 'underline', 'italic', 'strike', 'subscript', 'superscript'],
                ['removeFormat'],
                ['fontColor', 'hiliteColor'],
                ['outdent', 'indent'],
                ['align', 'horizontalRule', 'list', 'table'],
                ['link', 'image', 'video'],
                ['fullScreen', 'showBlocks', 'codeView'],
            ]
        });
        editor.onChange = (contents) => { 
            setEditorInput(contents) 
        }
    },[])
    return (
        <>
            <div class="editor_tools">
                <Select className="editor_select" defaultValue="SKT" onChange={setEditorTeam}>
                    <Option value="AF"><img class="option_img" src="https://qwer.gg/images/logos/AF.png"/></Option>
                    <Option value="DWG"><img class="option_img" src="https://qwer.gg/images/logos/DWG.png"/></Option>
                    <Option value="GEN"><img class="option_img" src="https://qwer.gg/images/logos/GEN.png"/></Option>
                    <Option value="GRF"><img class="option_img" src="https://qwer.gg/images/logos/GRF.png"/></Option>
                    <Option value="HLE"><img class="option_img" src="https://qwer.gg/images/logos/HLE.png"/></Option>
                    <Option value="SKT"><img class="option_img" src="https://qwer.gg/images/logos/SKT.png"/></Option>
                    <Option value="APK"><img class="option_img" src="https://qwer.gg/images/logos/APK.png"/></Option>
                    <Option value="KT"><img class="option_img" src="https://qwer.gg/images/logos/KT.png"/></Option>
                    <Option value="KZ"><img class="option_img" src="https://qwer.gg/images/logos/KZ.png"/></Option>
                    <Option value="SB"><img class="option_img" src="https://qwer.gg/images/logos/SB.png"/></Option>
                </Select>
                <Button onClick={() => onClick()} type="primary" size="large">
                    글쓰기
                </Button>
            </div>
            <div className="editor_title">
                <Input onChange={(e) => onChange(e)} placeholder="제목을 입력하세요." />
            </div>
            <div className="editor_wrapper">
                <textarea  id="sample"></textarea>
            </div>
        </>
    )
}

export default EditorPage;