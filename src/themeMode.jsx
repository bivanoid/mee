// themeMode.jsx
import React, { useState, useEffect } from "react";

export default function ThemeMode() {
    const [theme, setTheme] = useState(() => {
        const root = document.documentElement;
        const currentPrimary = getComputedStyle(root).getPropertyValue('--primary').trim();
        return currentPrimary === '#0a0a0a';
    });
    const root = document.documentElement;


    function toggleTheme() {
        if (!theme) {
                        // Dark mode
            root.style.setProperty('--primary', '#0a0a0a');
            // root.style.setProperty('--primary', '#161616');
            root.style.setProperty('--primary2', '#131313');
            root.style.setProperty('--primary25', '#0d0d0d');
            root.style.setProperty('--primary3', '#232222');
            root.style.setProperty('--blue', '#73bcec');
            root.style.setProperty('--grey', '#3b3b3b');
            root.style.setProperty('--button', '#f8f8f8');
            root.style.setProperty('--border', '#121212');
            root.style.setProperty('--red-cl', '#f77171');
            root.style.setProperty('--orange-cl', '#b66333');
            root.style.setProperty('--yellow-cl', '#dfb631');
            root.style.setProperty('--lime-cl', '#7dbb2b');
            root.style.setProperty('--green-cl', '#24aa51');

            root.style.setProperty('--code-bg', 'var(--border)');
            root.style.setProperty('--code-inline-bg', '#0a0a0a');
            root.style.setProperty('--code-text', '#f8f8f2');
            root.style.setProperty('--token-comment', '#8292a2');
            root.style.setProperty('--token-punctuation', '#f8f8f2');
            root.style.setProperty('--token-tag', '#f92672');
            root.style.setProperty('--token-property', '#f92672');
            root.style.setProperty('--token-constant', '#f92672');
            root.style.setProperty('--token-boolean', '#ae81ff');
            root.style.setProperty('--token-number', '#ae81ff');
            root.style.setProperty('--token-string', '#a6e22e');
            root.style.setProperty('--token-atrule', '#e6db74');
            root.style.setProperty('--token-function', '#e6db74');
            root.style.setProperty('--token-keyword', '#66d9ef');
            root.style.setProperty('--token-regex', '#fd971f');
            root.style.setProperty('--token-important', '#fd971f');
            root.style.setProperty('--token-operator', '#f8f8f2');
            root.style.setProperty('--token-variable', '#f8f8f2');
            root.style.setProperty('--toolbar-bg', 'rgba(224, 224, 224, 0.2)');
            root.style.setProperty('--toolbar-text', '#bbb'); 
        } else {


            root.style.setProperty('--primary', '#dbdbce');
            root.style.setProperty('--primary2', '#dadaddff');
            root.style.setProperty('--primary25', '#d8d8ce');
            root.style.setProperty('--primary3', '#fafaff');
            root.style.setProperty('--blue', '#1a2e89');
            root.style.setProperty('--grey', '#252525');
            root.style.setProperty('--button', '#1c1c1c');
            root.style.setProperty('--border', '#d4d4c7');
            root.style.setProperty('--red-cl', '#aa1e1e');
            root.style.setProperty('--orange-cl', '#b66333');
            root.style.setProperty('--yellow-cl', '#dfb631');
            root.style.setProperty('--lime-cl', '#7dbb2b');
            root.style.setProperty('--green-cl', '#24aa51');

            root.style.setProperty('--code-bg', '#f5f5f5');
            root.style.setProperty('--code-inline-bg', '#dbdbce');
            root.style.setProperty('--code-text', '#1e1e1e');
            root.style.setProperty('--token-comment', '#7f8c8d');
            root.style.setProperty('--token-punctuation', '#1e1e1e');
            root.style.setProperty('--token-tag', '#d32f2f');
            root.style.setProperty('--token-property', '#d32f2f');
            root.style.setProperty('--token-constant', '#8e44ad');
            root.style.setProperty('--token-boolean', '#8e44ad');
            root.style.setProperty('--token-number', '#8e44ad');
            root.style.setProperty('--token-string', '#27ae60');
            root.style.setProperty('--token-atrule', '#f39c12');
            root.style.setProperty('--token-function', '#e67e22');
            root.style.setProperty('--token-keyword', '#0c79d0');
            root.style.setProperty('--token-regex', '#ea6721');
            root.style.setProperty('--token-important', '#c2185b');
            root.style.setProperty('--token-operator', '#1e1e1e');
            root.style.setProperty('--token-variable', '#1e1e1e');
            root.style.setProperty('--toolbar-bg', 'rgba(0, 0, 0, 0.1)');
            root.style.setProperty('--toolbar-text', '#444');
        }

        setTheme(!theme);
    }

    return (
        <div onClick={() => toggleTheme()} className='path-name'>
            <p>
                switch
                {theme ? (
                    <i className="fi fi-rs-brightness"></i>
                ) : (
                    <i className="fi fi-rs-moon"></i>
                )}
            </p>
        </div>
    );
}