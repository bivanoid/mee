import '../styles/aboutme.css'
import Biodata from './biodata';
import HorizontalSlider from './horizontalslider';
import Feedback from './feedback';
import { useMediaQuery } from 'react-responsive';
import AnimatedContent from './AnimatedContent';
import FadeContent from './FadeContent';

function AboutMe({ onImageClick }) {
    const isLargeScreen = useMediaQuery({ minWidth: 701 });

    return (
        <div className='section2' >
            <p className='number number2' id='sc2'></p>
            <Biodata />
            <div className='contents'>
                <div className='abouts'>
                    <FadeContent blur={false} delay={500} duration={300} easing="ease-out" initialOpacity={0}>
                        <div className='text-abouts'><p className='title-about'>About/Me</p><br></br>
                            <p className='content-about'>
                                Hello! My name is Firdhan Abivandya. I am from Surakarta, Central Java Province, Indonesia.
                                I have been studying various programming languages such as C#, JavaScript, and others.
                                <br></br>
                                <br></br>
                                I like to use my imagination, and that is where I began to discover a collaboration between imagination and technology,
                                namely as a Front-End Developer and UI/UX Designer, which is my main focus at the moment.
                                <br></br>
                                <br></br>
                                I have also worked on various projects during my time at school. You can scroll further to see more of them.
                            </p>
                        </div>
                    </FadeContent>
                    <AnimatedContent
                        distance={50}
                        direction="horizontal"
                        reverse={!isLargeScreen}
                        config={{ tension: 100, friction: 30 }}
                        initialOpacity={0}
                    >
                        <div className='text-abouts  '><p className='title-about title-about2'>My/Education</p><br></br>
                            <ul className='content-carrier'>
                                <FadeContent blur={false} duration={1500} delay={0} easing="ease-in" initialOpacity={0}>
                                    <span>1</span><li><p>SDN Purwodiningratan</p></li>
                                </FadeContent>
                                <FadeContent blur={false} duration={1500} delay={200} easing="ease-in" initialOpacity={0}>
                                    <span>2</span><li><p>SMPN 14 Surakarta</p></li>
                                </FadeContent>

                                <FadeContent blur={false} duration={1500} delay={400} easing="ease-in" initialOpacity={0}>
                                    <span>3</span><li><p>SMKN 5 Surakarta</p></li>
                                </FadeContent>
                    
                                <FadeContent blur={false} duration={1500} delay={600} easing="ease-in" initialOpacity={0}>
                                    <span>4</span><li><p>Pignateli Triputra University</p></li>
                                </FadeContent>
                            </ul>
                        </div>
                    </AnimatedContent>

                </div>
                <HorizontalSlider onImageClick={onImageClick} />
                <Feedback />
            </div>

        </div>
    )
}

export default AboutMe;