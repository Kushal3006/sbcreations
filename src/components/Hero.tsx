import React from 'react';
import { Button } from './ui/Button';
import { Link } from './ui/Link';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const images = [
  '/p1.jpg',
  '/p2.jpg',
  '/p3.jpg',
  '/p4.jpg',
];

const Hero: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    fade: true,
    cssEase: 'ease',
    arrows: false,
    dotsClass: 'slick-dots custom-dots',
  };

  return (
    <section className="relative w-full min-h-[80vh] flex items-center justify-center bg-[#f5f5dc] overflow-hidden">
      {/* Background carousel with overlay */}
      <div className="absolute inset-0 z-0">
        <Slider {...settings} className="h-full w-full">
          {images.map((image, idx) => (
            <div key={idx} className="h-[80vh] w-full flex items-center justify-center bg-[#f5f5dc]">
              <img
                src={image}
                alt={`Hero Slide ${idx + 1}`}
                className="w-full h-full object-cover object-center transition-transform duration-700"
                draggable={false}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-white/0" />
            </div>
          ))}
        </Slider>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-white/80 pointer-events-none" />
      </div>
    </section>
  );
};

export default Hero;