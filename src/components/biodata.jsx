
import '../styles/aboutme.css';

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


        <div className='con-sticky'>
            <div className='sticky'>
                <div className='con-scroll-sticky'>
                    <div className='sticky-header'>
                            <h1 id='namamu'>/Firdhan <span>Abivandya.</span></h1>
                    </div>
                        <div className='bio' id='bio'>
                                <h1 >Information<span> *</span></h1>


                                <ul className='list-bio'>
                                    <li>
                                        <div className='text-bio'><i className="text-bio-icon fi fi-rs-thumbtack"></i><p>Surakarta, Central Java</p></div>
                                    </li>
                                    <li>
                                        <a href='mailto:abivandyafirdhan@gmail.com' className='text-bio'><i className="text-bio-icon fi fi-rs-user"></i><p>Junior Web Developer</p></a>
                                    </li>
                                    <li>
                                        <a href='https://wa.me/6287739770494' className='text-bio'><i className="text-bio-icon fi fi-rs-student-alt"></i><p>As a student</p></a>
                                    </li>
                                </ul>

                                <h1 className='skills-ttl'>Skills<span> *</span></h1>
                            

                                <div className='skills'>
                                {listSkill.map((items) => (
                                    <span key={items.label}  className='box-skill'>{items.label}</span>
                                ))}
                                </div>
                            
                        </div>
                </div>
            </div>
        </div>
    )

}

export default Biodata;