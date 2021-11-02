import React from 'react';
import AceEditor from 'react-ace';

import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/snippets/html";
import "ace-builds/src-noconflict/ext-language_tools";

const HtmlEditor = () => {
    return (
        <AceEditor
            placeholder="Write your HTML codes here!"
            mode="html"
            theme="monokai"
            name="editor_html"
            fontSize={14}
            height={'100%'}
            width={'100%'}
            showPrintMargin={true}
            showGutter={true}
            highlightActiveLine={true}
            setOptions={{
                enableBasicAutocompletion: true,
                enableLiveAutocompletion: true,
                enableSnippets: true,
                showLineNumbers: true,
                tabSize: 2,
            }} />
    );
}

export default HtmlEditor;
