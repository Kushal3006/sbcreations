import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Testimonials: React.FC = () => {
  return (
    <section className="pt-8 pb-16 px-4 md:px-8 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        {/* Visual Testimonials Section */}
        <div className="mt-0">
          <div className="text-center mb-12">
            <span className="text-teal-600 font-semibold tracking-wider text-sm uppercase mb-2 block">Real Feedback</span>
            <h3 className="text-2xl md:text-4xl font-serif font-bold text-gray-800">
              Client Love
            </h3>
          </div>

          <div className="px-4">
            <Slider {...{
              dots: true,
              infinite: true,
              speed: 500,
              slidesToShow: 4,
              slidesToScroll: 1,
              autoplay: true,
              autoplaySpeed: 4000,
              responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 3,
                  }
                },
                {
                  breakpoint: 640,
                  settings: {
                    slidesToShow: 1,
                    centerMode: true,
                    centerPadding: '40px',
                    arrows: false
                  }
                }
              ]
            }}>
              {[
                { id: 1, src: '/testimonials/feedback/feedback-1.jpg' },
                { id: 2, src: '/testimonials/feedback/feedback-2.jpg' },
                { id: 3, src: '/testimonials/feedback/feedback-3.jpg' },
                { id: 4, src: '/testimonials/feedback/feedback-4.jpg' },
                { id: 5, src: '/testimonials/feedback/feedback-5.jpg' },
              ].map((item) => (
                <div key={item.id} className="px-3 pb-8">
                  <div className="rounded-xl overflow-hidden shadow-lg border border-gray-100 h-[400px] sm:h-[500px] relative transition-transform hover:-translate-y-2 duration-300">
                    <img
                      src={item.src}
                      alt="Client Feedback"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;