import React,{Component} from 'react';
import './common.js';
import './bootstrap.css';
import './EditorInput.scss';
import SUNEDITOR from 'suneditor';
import SUNEDITORCSS from 'suneditor/dist/css/suneditor.min.css';
import plugins from 'suneditor/src/plugins';

class EditorInput extends Component {
    constructor(props){
        super(props);
    };

    componentDidMount() {
        SUNEDITOR.create('editor_classic', {
            plugins: plugins,
            display: 'block',
            width: '100%',
            height: 'auto',
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
    }
    render(){
        const{
            ChangeInput
        } = this.props;



        return (
            <div id="classic" class="tabcontent" style={{ display: 'block' }}>
                <div class="inline-margin"></div>
                <textarea onChange={(e) => ChangeInput(e)} id="editor_classic" style={{ display: 'none' }}>

                </textarea>
            </div>
        );
    }
}

export default EditorInput;
