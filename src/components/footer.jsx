import '../styles/footer.css';
import Logo from './logo';
import lenis from './lenisSc';

export default function Footer() {

    const toSc1 = () => {
        const section = document.getElementById('sc1');
        if (section) {
            lenis.scrollTo(section);
        }
    };

    const toSc2 = () => {
        const section = document.getElementById('sc2');
        if (section) {
            lenis.scrollTo(section);
        }
    };
    const toSc3 = () => {
        const section = document.getElementById('sc3');
        if (section) {
            lenis.scrollTo(section);
        }
    };

    const toSc4 = () => {
        const section = document.getElementById('sc4');
        if (section) {
            lenis.scrollTo(section);
        }
    }

    return (
        
            <div className="footer">

                <div className='footer-main'>
                    
                    <div className='footer2'>
                        <div className='top-footer2'>
                        {/* <div className='logo-footer logo-footer1'>
                        <LogoPattern/>
                        </div> */}
                        <div className='logo-footer logo-footer2'>
                        <Logo/>
                        </div>
                            <div className='con-footer-content'>
                            
                            <p>Creative developer passionate about building exceptional digital experiences with modern<br /> technologies.</p>
                            <p>Connect with me.</p>
                            <div className='social-media-footer'>
                                <a href='https://www.instagram.com/bivanoid/' className='ig'><i className="fi fi-brands-instagram"></i></a>
                                <a href='' className='lnkdn'><i className="fi fi-brands-linkedin"></i></a>

                                <a href='https://x.com/frdnavn?t=_OWYH1ArXL6VGadD3H-L_w&s=08' className='twt'><i className="fi fi-brands-twitter-alt-circle"></i></a>
                                <a href='https://wa.me/087739770494' className='wa'><i className="fi fi-brands-whatsapp"></i></a>
                                <a href='https://t.me/bieblupee' className='tele'><i className="fi fi-brands-telegram"></i></a>
                                <a href='https://github.com/bivanoid' className='gth'><i className="fi fi-brands-github"></i></a>
                            </div>
                            <p className='copyright'>&copy; 2025 Firdhan Abivandya. All rights reserved.</p>
                            </div>
                        </div>

                    </div>
                    <div className='footer3'>
                        <div className='con-footer3-content'>
                        <div className='get-in-touch'>
                            <h1>Get In Touch</h1>
                            <ul>
                                <li><a href='mailto:abivandyafirdhan@gmail.com'>abivandyafirdhan@gmail.com</a></li>
                                <li><a href='https://wa.me/087739770494'>Whatsapp</a></li>
                                <li><a href='https://t.me/bieblupee'>Telegram</a></li>

                            </ul>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        
        
    )
}