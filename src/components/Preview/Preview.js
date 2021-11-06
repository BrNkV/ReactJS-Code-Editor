import React, { useContext, useMemo } from 'react';
import { EditorContext } from '../../context/context';
import styles from './Preview.module.css';

export default function Preview() {

    const { html, css, js } = useContext(EditorContext);

    const document = useMemo(() => {
        if (!html && !css && !js) return;
        return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>${css}</style>
        </head>
        <body>
            ${html}
        <script>
            ${js}
        </script>
        </body>
        </html>
         `
    }, [html, css, js]);

    return (
        <div className={styles.content}>
            {
                document ? <iframe title="preview" className={styles.preview} srcDoc={document}/>
                : <div className={styles.loading}>Your code will be displayed here...</div>
            }
        </div>
    )
}
