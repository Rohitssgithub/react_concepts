import React, { useState, useRef } from 'react';
import copy from 'clipboard-copy';

function ButtonTextCopy() {
    const [textToCopy, setTextToCopy] = useState('This is the text to copy');

    const [copyWord, setCopyWord] = useState('A paragraph is defined as “a group of sentences or a single sentence that forms a unit” (Lunsford and Connors 116). Length and appearance do not determine whether a section in a paper is a paragraph. For instance, in some styles of writing, particularly journalistic styles, a paragraph can be just one sentence long.')

    const handleCopyClick = () => {
        copy(textToCopy)
            .then(() => {
                console.log('Text copied to clipboard: ' + textToCopy);
            })
            .catch((error) => {
                console.error('Failed to copy text: ' + error);
            });
    };

    const textToCopyRef = useRef(null);

    const handleCopyClicks = () => {
        if (textToCopyRef.current) {
            textToCopyRef.current.select();
            document.execCommand('copy');
        }
    };

    const copyFun = () => {
        navigator.clipboard.writeText(copyWord)
        alert('text copied')
    }
    return (
        <>

            <div className='container border border-dark p-4 my-5' style={{ position: "relative" }}>{copyWord}
                <button onClick={copyFun} className='btn btn-danger m-2' style={{ position: 'absolute', top: '0', right: '0' }}>copy</button>
            </div>


            <div>
                <div id="textToCopy">{textToCopy}</div>
                <button onClick={handleCopyClick}>Copy Text</button>
            </div>

            <div>
                <textarea ref={textToCopyRef} defaultValue="This is the text to copy" />
            </div>
            <button onClick={handleCopyClicks}>Copy Text</button>


        </>
    );
}

export default ButtonTextCopy;
