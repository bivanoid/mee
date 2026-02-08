import '../styles/footer.css';
import Logo from './logo';
import lenis from './lenisSc';
import { Link } from 'react-router-dom';

export default function Footer() {

    return (
        
            <div className="footer">

                <div className='footer-main'>
                    
                    <div className='footer2'>
                        <div className='top-footer2'>
                        <div className='logo-footer logo-footer2'>
                        <Logo/>
                        </div>
                            <div className='con-footer-content'>
                            
                            <p>Creative developer passionate about building exceptional digital experiences with modern<br /> technologies.</p>
                            <p>Connect with me.</p>
                            <div className='social-media-footer'>
                                <a href='https://www.instagram.com/bivanoid/' className='ig'><i className="fi fi-brands-instagram"></i></a>
                                <a href='' className='lnkdn'><i className="fi fi-brands-linkedin"></i></a>
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
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/blog">Blog</Link></li>
                                <li><a href='https://t.me/bieblupee'>Repository</a></li>

                            </ul>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        
        
    )
}