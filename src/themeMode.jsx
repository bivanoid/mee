import React, { useState, useEffect, useRef } from "react";

export default function ThemeMode() {
    const [theme, setTheme] = useState(() => {
        const root = document.documentElement;
        const currentPrimary = getComputedStyle(root).getPropertyValue('--primary').trim();
        return currentPrimary === '#0a0a0a' || currentPrimary === 'rgb(10, 10, 10)';
    });
    const root = document.documentElement;
    var textContext = ''
    function toggleTheme() {
        
        if (!theme) {
            console.log("tema aktif")
            root.style.setProperty('--primary', '#0a0a0a');
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
            
        } else {
            console.log("tema non-aktif")
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

        }

        setTheme(!theme)
        
    }

    return (
        <div onClick={() => toggleTheme()} className='path-name switch-theme'>
                <p>Switch theme {theme ? (<i class="fi fi-rs-brightness"></i>) : (<i class="fi fi-rs-moon"></i>)}</p>
        </div>
    )
}