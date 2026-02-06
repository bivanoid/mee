import './App.css';
import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import FadeContent from './components/FadeContent';
// Halaman
import Home from './pages/home';
import AddFeedback from './pages/addfeedback';
import Blog from './pages/blog';
import ArticlePage from './pages/ArticlePages';
import Loading from './components/loading';

import ReactGA from "react-ga4";
import usePageTracking from "./hooks/usePageTracking";
import ThemeMode from './themeMode';
import RevealUp from './animation/reveal';
// Context untuk Lenis
export const LenisContext = React.createContext(null);



function AppRoutes() {
  const location = useLocation();
  const lenisRef = React.useContext(LenisContext);

  useEffect(() => {
    ReactGA.initialize("G-J4M22QCN11"); // <--- Ganti ini pakai Measurement ID kamu
  }, []);

  usePageTracking();
  
  useEffect(() => {
    if (lenisRef?.current) {
      
      lenisRef.current.stop();

      lenisRef.current.scrollTo(0, {
        immediate: true,
        force: true,
        lock: true
      });

      // Start smooth scroll again after a brief delay
      setTimeout(() => {
        lenisRef.current.start();
      }, 100);
    } else {
      // Fallback jika Lenis tidak tersedia
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }
  }, [location.pathname]);

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={
        <RevealUp>
          <Home />
        </RevealUp>
      } />
      <Route path="/addfb" element={
        <RevealUp>
          <AddFeedback />
        </RevealUp>
      } />
      <Route path="/blog" element={
        <RevealUp>
          <Blog />
        </RevealUp>
      } />
      <Route path="/article/:id" element={
        <RevealUp>
          <ArticlePage />
        </RevealUp>
      } />
    </Routes>
  );
}

function App() {
  const [loading, setLoading] = useState(true);
  const lenisRef = useRef(null);


  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <LenisContext.Provider value={lenisRef}>
        <div className='body'>
          {loading ? (
            <Loading />
          ) : (
            <div>
              <AppRoutes />
            </div>
          )}
        </div>
      </LenisContext.Provider>
    </Router>
  );
}

export default App;