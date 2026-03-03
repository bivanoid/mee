import '../styles/aboutme.css'

function AboutMe() {
    const isiCarrier = [
        {
            namaTempat: "Purwodiningratan",
            keterangan: "",
            tahun: "2013  —  2019"
        }, {
            namaTempat: "SMPN 14 Surakarta",
            keterangan: "",
            tahun: "2019  —  2022"
        }, {
            namaTempat: "SMKN 5 Surakarta",
            keterangan: "",
            tahun: "2022  —  2025"
        }, {
            namaTempat: "Pignateli Triputra University",
            keterangan: "",
            tahun: "2025  —  Current"
        }, 
    ]

    return (
        <div className='section-aboutme'>
            <section className='text-abouts'>
                <p className='title-about'>About Me<span className='red-star'>*</span></p><br/>
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
            </section>
            <section className='text-abouts  '>
                <p className='title-about title-about2'>My Education<span className='red-star'>*</span></p><br/>
                <ul className='content-carrier'>
                    {isiCarrier.map((items) => (
                        <li>
                            <span></span><div><p>{items.namaTempat}</p><p>{items.tahun}</p></div>
                        </li>
                    )
                    )}
                    
                </ul>
            </section>
        </div>
    )
}

export default AboutMe;