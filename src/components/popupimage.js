import React, { useEffect, useState } from 'react';
import '../styles/scrollhorizontal.css';

export default function PopupImage({ imageUrl, onClose }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const bodynya = document.getElementById('thecontent')

  useEffect(() => {
    if (imageUrl) {
      // Trigger animasi masuk setelah mount
      setTimeout(() => setIsVisible(true), 10);
      setIsImageLoaded(false);
      document.body.style.overflow = "hidden"
      bodynya.style.filter = 'grayscale(100%) brightness(50%)'
    } else {
      setIsVisible(false);
      setIsImageLoaded(false);
    }
  }, [imageUrl]);

  const handleClose = () => {
    setIsVisible(false);
    // Tunggu animasi selesai sebelum menutup
    setTimeout(() => {
      onClose();
      document.body.style.overflow = "auto"
      bodynya.style.filter = 'none'
    }, 300);
  };

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  if (!imageUrl) return null;

  return (
    <div
      className={`fullscreen-overlay ${isVisible ? 'visible' : ''}`}
      onClick={handleClose}
    >
      <img
        src={imageUrl}
        alt="Fullscreen"
        className={isImageLoaded ? 'loaded' : ''}
        onLoad={handleImageLoad}
        onClick={(e) => e.stopPropagation()}
      />
      <button className="close-button" onClick={handleClose}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>
    </div>
  );
}