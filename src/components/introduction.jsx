import '../styles/introduction.css'
import React, { useState, useEffect, useRef } from 'react';
import lenis from './lenisSc';
import LogoMiring from '../iconSvg/logoMiring';
import { href, Link } from 'react-router-dom';
import ThemeMode from '../themeMode';
import { ChevronDown } from 'lucide-react';
import { ArrowDown } from 'lucide-react';
import { ArrowDownToDot } from 'lucide-react';
import { ArrowDownToLine } from 'lucide-react';

function Introduction() {
    const conImageRef = useRef(null);
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timeInterval = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(timeInterval);
    }, []);

    // ngebuat jam digital aysyasy --- header (container-about)
const formatTime = (date) => {
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    
    // Mendapatkan timezone dengan nama singkat
    const offset = -date.getTimezoneOffset();
    const offsetHours = Math.floor(Math.abs(offset) / 60);
    const offsetMinutes = Math.abs(offset) % 60;
    const offsetSign = offset >= 0 ? '+' : '−'; // Menggunakan minus sign yang lebih elegan
    const gmtString = `GMT${offsetSign}${String(offsetHours).padStart(2, '0')}`;
    
    return (
        <>
            {gmtString} <span className='time'>{hours} :. {minutes} :. {seconds}</span>
        </>
    )
    
    ;
};

    const scrollToSection = () => {
        const section = document.getElementById('sc2');
        if (section) {
            lenis.scrollTo(section);
        }
    };

    
    const [openLinkS, setOpenLinks] = useState(false)
 
    return (
        <div className='section' id='sc1'>
            <header className='navigation'>
                <ThemeMode/>
                
                <div className='path-name'>
                    <p>bivanoid.site</p>
                </div>

                <div className="con-path-name">
                    <div onClick={() => {setOpenLinks(prev => !prev)}}  className="path-name">
                        <p>/ <span><ChevronDown className={openLinkS ? 'open' : 'close'}/></span></p>
                    </div>
                    <Link to={"/blog"} className={`path-name other-path-name ${openLinkS ? 'open' : 'close'}`}>
                        /blog
                    </Link>
         
                </div>
                
                
            </header>
            <p className='number'></p>

            <div className='text' ref={conImageRef} style={{ opacity: 1 }}>
                <div className='hero'>
                    <div className='hero-1'>
                            <div className='header-int'>
                                <h1 className='currndate'>{formatTime(currentTime)}</h1>
                            </div>
                    </div>
                    <div className='image-logo'>
                        <LogoMiring />
                    </div>
                    <div className='hero-2'>
                            <h1>
                                Welcome to my <span>portfolio</span> <br />
                                a place where my <span>current work</span> <br />
                                and <span>future directions</span> <br />
                                take shape.
                            </h1>
                            <button type='button' aria-label="Scroll to about me" onClick={scrollToSection} ><ArrowDown/></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Introduction;