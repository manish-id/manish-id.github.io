// src/components/Loader.jsx
import React, { useEffect, useState } from 'react';
import '../assets/css/loader.css';

const Loader = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setFadeOut(true); // mulai fade-out setelah 2 detik
    }, 2000);

    const timer2 = setTimeout(() => {
      setIsVisible(false); // hapus dari DOM setelah 5 detik total (2+3)
    }, 5000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className={`loader ${fadeOut ? 'fade-out' : 'fade-in'}`}>
      <h1>
        <span style={{ fontFamily: 'High Cruiser' }}>M</span>
        <span style={{ fontFamily: 'High Cruiser' }}>A</span>
        <span style={{ fontFamily: 'High Cruiser' }}>N</span>
        <span style={{ fontFamily: 'High Cruiser' }}>I</span>
        <span style={{ fontFamily: 'High Cruiser' }}>S</span>
        <span style={{ fontFamily: 'High Cruiser' }}>H</span>
        <span style={{ fontFamily: 'High Cruiser' }}>.</span>
      </h1>
    </div>
  );
};

export default Loader;
