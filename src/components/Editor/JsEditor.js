import React, { useContext } from 'react';
import AceEditor from 'react-ace';

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/snippets/javascript";
import "ace-builds/src-noconflict/ext-language_tools";

import { EditorContext } from '../../context/context';

const JsEditor = () => {

    const {js, setJs} = useContext(EditorContext);

    return (
        <AceEditor
            value={js}
            onChange={value => setJs(value)}
            placeholder="Write your JavaScript codes here!"
            mode="javascript"
            theme="monokai"
            name="editor_javascript"
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

export default JsEditor;
