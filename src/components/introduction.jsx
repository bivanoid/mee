import '../styles/introduction.css'
import React, { useState, useEffect, useRef } from 'react';
import AnimatedContent from './AnimatedContent';
import lenis from './lenisSc';
import Logo from './logo';
import DownSvg from '../iconSvg/scrollToBottomic';
import LogoMiring from '../iconSvg/logoMiring';
import { href, Link } from 'react-router-dom';
import { a } from '@react-spring/web';
import ThemeMode from '../themeMode';

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
            {gmtString} <span>{hours} :. {minutes} :. {seconds}</span>
        </>
    )
    
    ;
};

    // useEffect(() => {
    //     const lenis = new Lenis({
    //         duration: 1.5,
    //         easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    //         smooth: true,
    //         gestureDirection: 'vertical',
    //         touchMultiplier: 2,
    //     });

    //     function raf(time) {
    //         lenis.raf(time);

    //         const scrollY = window.scrollY || window.pageYOffset;
    //         const maxScroll = 4000;
    //         let opacity = 1 - scrollY / (maxScroll / 8);
    //         opacity = Math.max(0, Math.min(1, opacity));

    //         const isMobile = window.innerWidth <= 767;

    //         if (conImageRef.current) {
    //             if (isMobile) {
    //                 // Mobile: hanya scale

    //             } else {
    //                 // Desktop: scale + translateX

    //             }

    //             conImageRef.current.style.opacity = `${opacity}`;
    //         }

    //         requestAnimationFrame(raf);
    //     }

    //     // Set initial opacity explicitly
    //     if (conImageRef.current) {
    //         conImageRef.current.style.setProperty('opacity', '1', 'important');
    //     }

    //     requestAnimationFrame(raf);
    //     return () => lenis.destroy();
    // }, []);

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
                        <p>/ <span><i class={`fi fi-rs-caret-down ${openLinkS ? 'open' : 'close'}`}></i></span></p>
                    </div>
                    <Link to={"/blog"} className={`path-name other-path-name ${openLinkS ? 'open' : 'close'}`}>
                        /blogs
                    </Link>
         
                </div>
                
                
            </header>
            {/* <img className='bgImage-INT' src={bgImage}></img> */}
            <p className='number'></p>

            <div className='text' ref={conImageRef} style={{ opacity: 1 }}>
                <div className='hero'>
                    <div className='hero-1'>

                        <AnimatedContent
                            distance={10}
                            direction="vertical"
                            config={{ tension: 100, friction: 30 }}
                            reverse={true}
                            initialOpacity={0}
                            animateOpacity
                            delay={500}

                        >
                            {/* <p>E<span><Logo /></span>plore The</p> */}
                            {/* <h1>
                                Welcome to my <span>portfolio</span> <br />
                                a place where my <span>current work</span> <br />
                                and <span>future directions</span> <br />
                                take shape.
                            </h1> */}
                            <div className='header-int'>
                                <h1 className='currndate'>{formatTime(currentTime)}</h1>
                            </div>
                        </AnimatedContent>


                    </div>
                    <div className='image-logo'>
                        <LogoMiring />
                    </div>
                    <div className='hero-2'>
                        <AnimatedContent
                            distance={10}
                            direction="vertical"
                            config={{ tension: 100, friction: 30 }}
                            reverse={false}
                            initialOpacity={0}
                            animateOpacity
                            delay={500}

                        >
                            <h1>
                                Welcome to my <span>portfolio</span> <br />
                                a place where my <span>current work</span> <br />
                                and <span>future directions</span> <br />
                                take shape.
                            </h1>
                            <button onClick={scrollToSection} ><DownSvg/></button>
                        </AnimatedContent>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Introduction;