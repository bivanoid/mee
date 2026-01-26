import '../styles/aboutme.css'
import Biodata from './biodata';
import HorizontalSlider from './horizontalslider';
import Feedback from './feedback';
import { useMediaQuery } from 'react-responsive';
import FadeContent from './FadeContent';
import RevealUp from '../animation/reveal';

function AboutMe({ onImageClick }) {
    const isLargeScreen = useMediaQuery({ minWidth: 701 });

    return (
        <div className='section2' >
            <p className='number number2' id='sc2'></p>
            <Biodata />
            <div className='contents'>
                <div className='abouts'>
                    <RevealUp isLargeScreen={isLargeScreen} threshold={0.8}>
                        <div className='text-abouts'><p className='title-about'>About/Me</p><br></br>
                            <p className='content-about'>
                                Hello! My name is <span>Firdhan Abivandya</span>. I am from Surakarta, Central Java Province, <span>Indonesia</span> 
                                {/* <span className='indonesia-flag'></span> */}
                                .
                                I have been studying various programming languages such as C#, JavaScript, and others.
                                <br></br>
                                <br></br>
                                I like to use my imagination, and that is where I began to discover a <span>collaboration between imagination and technology</span>,
                                namely as a <span>Front-End Developer</span> and <span>UI/UX Designer</span>, which is my main focus at the moment.
                                <br></br>
                                <br></br>
                                I have also <span>worked on various projects</span> during my time at school. You can scroll further to see more of them.
                            </p>
                        </div>
                    </RevealUp>
                    <RevealUp isLargeScreen={isLargeScreen} threshold={0.8}>
                        <div className='text-abouts  '><p className='title-about title-about2'>My/Education</p><br></br>
                            <ul className='content-carrier'>
                                <FadeContent blur={false} duration={1500} delay={0} easing="ease-in" initialOpacity={0}>
                                    <span></span><li><p> Purwodiningratan</p><p>2013 - 2019</p></li>
                                </FadeContent>
                                <FadeContent blur={false} duration={1500} delay={200} easing="ease-in" initialOpacity={0}>
                                    <span></span><li><p>SMPN 14 Surakarta</p><p>2019 - 2022</p></li>
                                </FadeContent>

                                <FadeContent blur={false} duration={1500} delay={400} easing="ease-in" initialOpacity={0}>
                                    <span></span><li><p>SMKN 5 Surakarta</p><p>2022 - 2025</p></li>
                                </FadeContent>
                    
                                <FadeContent blur={false} duration={1500} delay={600} easing="ease-in" initialOpacity={0}>
                                    <span></span><li><p>Pignateli Triputra University</p><p>2025 - Current</p></li>
                                </FadeContent>
                            </ul>
                        </div>
                    </RevealUp>
                </div>
                <HorizontalSlider onImageClick={onImageClick} />
                <Feedback />
            </div>

        </div>
    )
}

export default AboutMe;