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
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: false, // Changed from true to false for better image transitions
    cssEase: 'ease',
    arrows: false,
    dotsClass: 'slick-dots custom-dots',
  };

  return (
    <section className="mt-16 grid grid-cols-1 lg:grid-cols-2 min-h-[400px] md:min-h-[500px]">
      {/* Content */}
      <div className="flex items-center justify-center px-4 sm:px-8 py-8 lg:px-12">
        <div className="max-w-xl">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            <span className="block text-[#8B7355]">Welcome to</span>
            <span className="mt-2 block text-[#6B5B45] italic">sbcreations</span>
          </h1>
          <p className="mt-6 text-base sm:text-lg md:text-xl text-[#8B7355] leading-relaxed">
            Discover our exquisite collection of handcrafted resin art pieces, 
            where elegance meets creativity. Each piece tells a unique story, 
            transforming your space into a gallery of timeless beauty.
          </p>
          <div className="mt-10 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Link href="#collections">
              <Button
                variant="primary"
                size="lg"
                className="min-w-[160px] sm:min-w-[180px] bg-[#8B7355] hover:bg-[#6B5B45] text-[#F5F5DC] transition-all duration-300 shadow-md hover:shadow-lg w-full sm:w-auto"
              >
                Buy Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
      {/* Carousel */}
      <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] overflow-hidden rounded-md bg-[#f5f5f5]">
        <Slider {...settings} className="h-full">
          {images.map((image, index) => (
            <div key={index} className="h-[300px] sm:h-[400px] lg:h-[500px] px-2 sm:px-4 py-4 sm:py-6">
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-scale-down mx-auto"
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Hero;