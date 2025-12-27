import '../App.css';
import '../styles/home/home.css';

import Introduction from '../components/introduction';
import AboutMe from '../components/aboutme';
import Footer from '../components/footer';
import Navigation from '../components/navigation';

export default function Home() {
  return (
    <div>
      <div>
        <div className='body body-home' id='bodyHome'>
          <div id='thenav'>
            <Navigation />
          </div>
          <div id='thecontent'>
            <Introduction />
            <AboutMe/>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
