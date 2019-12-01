import React, {useState, useEffect} from 'react';
import 'suneditor/dist/css/suneditor.min.css'
import SUNEDITOR from 'suneditor'
import plugins from 'suneditor/src/plugins'
import './EditorPage.css';
import {Select, Button, Input} from 'antd';
import axios from 'axios';
import * as api from '../api/api';
import AppLayout from '../Component/AppLayout/AppLayout';
import CharBox from '../Component/Community/CharBox/CharBox';
const { Option } = Select;

const EditorPage = () => {
    const [editorInput, setEditorInput] = useState('');
    const [editorTitle, setEditorTtitle] = useState('');
    const [editorChamp, setEditorChamp] = useState('Aatrox');
    const onClick = () => {
        console.log(editorInput, editorChamp, editorTitle)
        axios.post(`${api.ServerAddress}/tipboardWriteRequest`,{
            content: editorInput,
            title: editorTitle,
            champion: editorChamp
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
        setEditorChamp(e.target.value)
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
            <AppLayout/>
            <div class="editor_tools">
                <Select className="editor_select" defaultValue="Aatrox" onChange={(setEditorChamp)}>
                    <Option value="Aatrox"><img class="option_img" src="https://ddragon.leagueoflegends.com/cdn/9.21.1/img/champion/Aatrox.png"/></Option>
                    <Option value="Ahri"><img class="option_img" src="https://ddragon.leagueoflegends.com/cdn/9.21.1/img/champion/Ahri.png"/></Option>
                    <Option value="Akali"><img class="option_img" src="https://ddragon.leagueoflegends.com/cdn/9.21.1/img/champion/Akali.png"/></Option>
                    <Option value="Alistar"><img class="option_img" src="https://ddragon.leagueoflegends.com/cdn/9.21.1/img/champion/Alistar.png"/></Option>
                    <Option value="Amumu"><img class="option_img" src="https://ddragon.leagueoflegends.com/cdn/9.21.1/img/champion/Amumu.png"/></Option>
                    <Option value="Anivia"><img class="option_img" src="https://ddragon.leagueoflegends.com/cdn/9.21.1/img/champion/Anivia.png"/></Option>
                    <Option value="Annie"><img class="option_img" src="https://ddragon.leagueoflegends.com/cdn/9.21.1/img/champion/Annie.png"/></Option>
                    <Option value="Ashe"><img class="option_img" src="https://ddragon.leagueoflegends.com/cdn/9.21.1/img/champion/Ashe.png"/></Option>
                    <Option value="AurelionSol"><img class="option_img" src="https://ddragon.leagueoflegends.com/cdn/9.21.1/img/champion/AurelionSol.png"/></Option>
                    <Option value="Bard"><img class="option_img" src="https://ddragon.leagueoflegends.com/cdn/9.21.1/img/champion/Bard.png"/></Option>
                    <Option value="Blitzcrank"><img class="option_img" src="https://ddragon.leagueoflegends.com/cdn/9.21.1/img/champion/Blitzcrank.png"/></Option>
                    <Option value="Brand"><img class="option_img" src="https://ddragon.leagueoflegends.com/cdn/9.21.1/img/champion/Brand.png"/></Option>
                    <Option value="Braum"><img class="option_img" src="https://ddragon.leagueoflegends.com/cdn/9.21.1/img/champion/Braum.png"/></Option>
                    <Option value="Caitlyn"><img class="option_img" src="https://ddragon.leagueoflegends.com/cdn/9.21.1/img/champion/Caitlyn.png"/></Option>
                    <Option value="Camille"><img class="option_img" src="https://ddragon.leagueoflegends.com/cdn/9.21.1/img/champion/Camille.png"/></Option>
                    <Option value="Cassiopeia"><img class="option_img" src="https://ddragon.leagueoflegends.com/cdn/9.21.1/img/champion/Cassiopeia.png"/></Option>
                </Select>
                <Button type="primary" size="large" onClick={onClick}>글쓰기</Button>
            </div>
            <div className="editor_title">
                <Input onChange={(e) => setEditorTtitle(e.target.value)} placeholder="제목을 입력하세요." />
            </div>
            <div className="editor_wrapper">
                <textarea  id="sample"></textarea>
            </div>
        </>
    )
}

export default EditorPage;