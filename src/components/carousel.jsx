// src/components/Carousel.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import '../assets/css/carousel.css'; 

const Carousel = () => {
  const images = [
      '/images/carousel-example3.jpg',
    '/images/carousel-example1.jpg',
    '/images/carousel-example2.jpg',
  ];

  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      spaceBetween={30}
      slidesPerView={1}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop={true}
      pagination={{ clickable: true }}
    >
      {images.map((src, index) => (
        <SwiperSlide key={index}>
          <img src={src} alt={`Slide ${index}`} className="carousel-img" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
