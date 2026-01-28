
import '../styles/aboutme.css';
import FadeContent from './FadeContent';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import RevealUp from '../animation/reveal';

gsap.registerPlugin(ScrollTrigger);

function Biodata() {

    const listSkill = [
        {
            label: 'HTML'
        }, {
            label: 'CSS'
        }, {
            label: 'JAVA SCRIPT'
        }, {
            label: 'BOOTSTRAP'
        }, {
            label: 'PHP'
        }, {
            label: 'MYSQL'
        }, {
            label: 'C#'
        }, {
            label: 'REACT'
        }, {
            label: 'FIGMA'
        }, {
            label: 'UI / UX DESIGN'
        }, {
            label: 'CANVA'
        }
    ]

    return (


        <FadeContent className='con-sticky' blur={false} duration={500} easing="ease-out" initialOpacity={0}>

            <div className='sticky'>
                <div className='con-scroll-sticky'>
                    <div className='sticky-header'>
                        <RevealUp direction='horizontal' threshold={0.8}>
                            <h1 id='namamu'>/Firdhan <span>Abivandya.</span></h1>
                        </RevealUp>
                    </div>
                    <FadeContent blur={false} breakpoints={{ 747: { blur: false } }} delay={1000} duration={500} easing="ease-out" initialOpacity={0}>
                        <div className='bio' id='bio'>
                            <h1 >Information<span> *</span></h1>
                            <ul className='list-bio'>
                                <li>
                                    <div className='text-bio'><i className="text-bio-icon fi fi-rs-thumbtack"></i><p>Surakarta, Centar Java</p></div>
                                </li>
                                <li>
                                    <div className='text-bio'><i className="text-bio-icon fi fi-rs-at"></i><p>abivandyafirdhan<br />@gmail.com</p></div>
                                </li>
                                <li>
                                    <div className='text-bio'><i className="text-bio-icon fi fi-rs-phone-rotary"></i><p>+62 877-3977-0494</p></div>
                                </li>

                            </ul>
                            <h1 className='skills-ttl'>Skills<span> *</span></h1>
                            <div className='skills'>
                                {listSkill.map((items) => (
                                    <span key={items.label}  className='box-skill'>{items.label}</span>
                                ))}
                            </div>
                        </div>
                    </FadeContent>
                </div>
            </div>
        </FadeContent >
    )

}

export default Biodata;