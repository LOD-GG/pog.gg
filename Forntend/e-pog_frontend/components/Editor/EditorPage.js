import React from 'react';

import 'codemirror/lib/codemirror.css';
import 'tui-editor/dist/tui-editor.min.css';
import 'tui-editor/dist/tui-editor-contents.min.css';
import { Editor } from '@toast-ui/react-editor'

const EditorPage = () => {
    return (
        <>
            <Editor
                initialValue="hello react editor world!"
                previewStyle="vertical"
                height="600px"
                initialEditType="markdown"
                useCommandShortcut={true}
                exts={[
                {
                    name: 'chart',
                    minWidth: 100,
                    maxWidth: 600,
                    minHeight: 100,
                    maxHeight: 300
                },
                'scrollSync',
                'colorSyntax',
                'uml',
                'mark',
                'table'
                ]}
            />
        </>
    )
}

export default EditorPage;