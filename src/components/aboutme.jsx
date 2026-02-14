import '../styles/aboutme.css'

function AboutMe() {
    return (
        <div className='section2'>
            
            <div className='contents'>
                <div className='abouts'>
                    
                        <div className='text-abouts'><p className='title-about'>About Me.</p><br></br>
  
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
                    
                        <div className='text-abouts  '><p className='title-about title-about2'>My Education.</p><br></br>
                       
                            <ul className='content-carrier'>
                                <li>
                                    <span></span><div><p> Purwodiningratan</p><p>2013 - 2019</p></div>
                                </li>
                                <li>
                                    <span></span><div><p>SMPN 14 Surakarta</p><p>2019 - 2022</p></div>
                                </li>

                                <li>
                                    <span></span><div><p>SMKN 5 Surakarta</p><p>2022 - 2025</p></div>
                                </li>
                    
                                <li>
                                    <span></span><div><p>Pignateli Triputra University</p><p>2025 - Current</p></div>
                                </li>
                            </ul>
                   
                        </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;