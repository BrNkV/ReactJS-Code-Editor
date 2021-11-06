import React, { useContext } from 'react';
import AceEditor from 'react-ace';

import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/snippets/css";
import "ace-builds/src-noconflict/ext-language_tools";

import { EditorContext } from '../../context/context';


const CssEditor = () => {

    const {css, setCss} = useContext(EditorContext);

    return (
        <AceEditor
            value={css}
            onChange={value => setCss(value)}
            placeholder="Write your CSS codes here!"
            mode="css"
            theme="monokai"
            name="editor_css"
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

export default CssEditor;
