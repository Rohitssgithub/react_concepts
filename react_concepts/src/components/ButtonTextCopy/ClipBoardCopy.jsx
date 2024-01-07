import React, { useState } from "react";
import copy from "copy-to-clipboard";
// import {
//     Heading,
//     Input1,
//     Input2,
//     Container,
//     Button,
// } from "./Styles";

const Clipboard = () => {
    const [copyText, setCopyText] = useState("");

    const handleCopyText = (e) => {
        setCopyText(e.target.value);
    };

    const copyToClipboard = () => {
        copy(copyText);
        alert(`You have copied "${copyText}"`);
    };

    return (
        <div>

            <div>
                <h2> Copy To Clipboard in React JS</h2>

                <input
                    type="text"
                    value={copyText}
                    onChange={handleCopyText}
                    placeholder="Enter the text you want to copy"
                />

                <button onClick={copyToClipboard}>
                    Copy to Clipboard
                </button>
            </div>
        </div>
    );
};

export default Clipboard;
