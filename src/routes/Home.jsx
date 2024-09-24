import React, { useState, useEffect } from 'react';
import ListProducts from '../components/ListProducts'
import './Home.css';

const Home = () => {
  const [imgSrc, setImgSrc] = useState('');
  const [imgHeight, setImgHeight] = useState(0);

  useEffect(() => {
    const updateImage = () => {
      if (window.innerWidth <= 768) {
        setImgSrc('../../capa-mobile.jpeg');
      } else {
        setImgSrc('../../public/capa.jpeg');
      }
    };

    updateImage(); // Set initial image based on screen size

    window.addEventListener('resize', updateImage); // Update on resize

    return () => {
      window.removeEventListener('resize', updateImage); // Clean up
    };
  }, []);

  const handleImageLoad = (e) => {
    setImgHeight(e.target.clientHeight); // Get the height of the loaded image
  };

  return (
    <div className='Home'>
      <div className='capa' style={{ position: 'relative' }}>
        <div className='filter-capa' style={{ height: imgHeight }}>
          <img className='title-png' src="../../title.png" alt="" />
          <span className='subtitle'>FAÇA SUAS COMPRAS</span>
        </div>
        <img
          className='img-capa'
          src={imgSrc}
          alt=""
          onLoad={handleImageLoad} // Set the height when the image loads
        />
      </div>
      <ListProducts />
    </div>
  );
}

export default Home;
