import '../App.css';
import '../styles/home/home.css';
import Introduction from '../components/introduction';
import Footer from '../components/footer';
import HomeContent from '../components/homeContent';
import AddFeedback from './addfeedback';
import { useEffect, useRef, useState } from 'react';
import '../components/btnAddFb';
import lenis from '../components/lenisSc';

export default function Home() {
  const [showAddFb, setShowAddFb] = useState(false)
  useEffect(() => {
      if (showAddFb === true) {
        lenis.stop(true)
      } 
      return () => {
        lenis.start(true)
      }
  }, [showAddFb])

  return (
    <div>
      <div className='body body-home' id='bodyHome'>
        <div className={`show-addfb-container ${showAddFb ? 'aktif' : 'non-aktif'}`}>
          {/* UBAH INI - jangan pakai toggle, langsung set false */}
          <div onClick={() => setShowAddFb(!setShowAddFb)} className="closeAddFb">close</div>
          <AddFeedback />
        </div>
        <div id='thenav'></div>
        <div id='thecontent'>
          <Introduction />
          <HomeContent setShowAddFb={setShowAddFb}/>
          <Footer />
        </div>
      </div>
    </div>
  );
}