import React,{Component} from 'react';
import styles from './Editor.scss';
import classNames from 'classnames/bind';
import PostNav from '../PostNav/PostNav';
import EditorInput from '../EditorInput/EditorInput.js';
import axios from 'axios';
import base_url from '../../base_url';
// import boldImg from '../../img/toolbarImg/Bold.png';
// import italicImg from '../../img/toolbarImg/Italic.png';
// import underbarImg from '../../img/toolbarImg/underbar.png';
// import galleryImg from '../../img/toolbarImg/gallery.png';

const cx = classNames.bind(styles);

class Editor extends Component{
    // 채널 전송    
    constructor(props) {
        super(props);

        this.state = {
            postTitle: '',
            inputText: '',
            nickname: '',
        };
    }

    componentDidMount() {
        this.setState({
            nickname: this.props.nickname
        })
    }

    ChangeInput = (e) => {
        this.setState({
            postTitle: e.target.value
            //[e.target.name] : e.target.value
        });
    }
    GoBack = () => {    
        this.props.history.goBack(1);
    }

    onCompleted = () => {
        const {postTitle, inputText, nickname} = this.state;

        if(postTitle === ""){
            console.log(postTitle)
            alert("제목을 입력해주세요.");
            
        }
        // else if(inputText === ''){
        //     alert("내용을 입력해주세요.");
        // }
        else{
            axios({
                url : `${base_url}/freeboardWriteRequest`,
                method: 'POST',
                header:{
                    "Authorization" : localStorage.getItem("accessToken")
                },
                data: {
                    postTitle: postTitle,
                    writer:nickname
                    // inputText: inputText
                }
            }).then((res) => {
                if(res.status === 200){
                    alert("게시물 작성완료!");
                    // 작성된 게시물로 이동
                }
                else{
                    alert("서버 문제로 작성실패");
                }
            })
        }
    }

    render(){
        const{
            postTitle,
            inputText
        } = this.state;

        const{
            ChangeInput,
            GoBack
        } = this;

        return(
            <div className={cx('editorPage')} >
                <PostNav/>
                <div className={cx('editor-wrapper')}>
                    <h2>글쓰기</h2>
                    <select className={cx('channel')} >
                        <option value="채널 선택">채널 선택</option>
                        <option value="자유">자유 게시판</option>
                        <option value="팁">팁 공유 게시판</option>
                        <option value="">동영상 게시판</option>
                    </select>
                    <div className={cx('editor-title-wrapper')}>
                        <input type="text" placeholder="제목" id="editor-title" onChange={this.ChangeInput} value={postTitle}/>
                    </div>
                    
                    <div className={cx('editor-input')}>
                        <EditorInput ChangeInput={ChangeInput} value={inputText}/>
                    </div >
                    <div className={cx('button-wrapper')}>
                        <button onClick={GoBack}>뒤로 가기</button>
                        <button onClick={this.onCompleted}>작성 완료</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Editor;

{/* <div className={cx('toolbars')}>
                        <ul>
                            <li className={cx('tool-item')}>
                                <select>
                                    <option>8</option>
                                    <option>10</option>
                                    <option>12</option>
                                    <option>14</option>
                                    <option>16</option>
                                    <option>18</option>
                                </select>
                            </li>
                            <li className={cx('tool-item')}><span>가</span></li>
                            <li className={cx('tool-item')}><img src={boldImg} alt=""/></li>
                            <li className={cx('tool-item')}><img src={italicImg} alt=""/></li>
                            <li className={cx('tool-item')}><img src={underbarImg} alt=""/></li>
                            <li className={cx('tool-item')}><img src={galleryImg} alt=""/></li>
                        </ul>
                    </div>
                    <div className={cx('editor-input')}>
                        <textarea type="text" />
                    </div> */} 