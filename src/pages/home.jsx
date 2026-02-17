import '../App.css';
import '../styles/home/home.css';
import { lazy, Suspense } from 'react';


const Introduction = lazy(() => import('../components/introduction'));
const Footer = lazy(() => import('../components/footer'));
const HomeContent = lazy(() => import('../components/homeContent'));
const AddFeedback = lazy(() => import('./addfeedback'));

import { useEffect, useState } from 'react';
import '../components/btnAddFb';
import lenis from '../components/lenisSc';
import Loading from '../components/loading';


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
          <div onClick={() => setShowAddFb(!setShowAddFb)} className="closeAddFb">close</div>
          <AddFeedback />
        </div>
        <div id='thenav'></div>
        <Suspense fallback={<Loading/>}>
          <Introduction />
          <HomeContent setShowAddFb={setShowAddFb}/>
          <Footer />
        </Suspense>

      </div>
    </div>
  );
}