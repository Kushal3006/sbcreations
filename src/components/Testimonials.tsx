import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { testimonials } from '../data/testimonials';

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const goToPrevious = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-4">
            Customer Love
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Read what our customers have to say about their experience with our handcrafted resin art pieces.
          </p>
        </div>

        <div 
          className="relative bg-white rounded-xl shadow-lg overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Testimonial Slider */}
          <div className="relative h-full">
            <div className="overflow-hidden">
              <div 
                className="flex flex-col md:flex-row transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="w-full flex-shrink-0">
                    <div className="grid grid-cols-1 md:grid-cols-3">
                      {/* Image (hidden on mobile) */}
                      <div className="hidden md:block">
                        <img 
                          src={testimonial.image}
                          alt={`${testimonial.name}'s purchase`}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      
                      {/* Content */}
                      <div className="md:col-span-2 p-8 md:p-12 flex flex-col">
                        <div className="flex items-center mb-6">
                          <div className="flex space-x-1">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i} 
                                size={18} 
                                className={i < testimonial.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"} 
                              />
                            ))}
                          </div>
                          <span className="ml-2 text-sm text-gray-500">
                            {testimonial.date}
                          </span>
                        </div>
                        
                        <blockquote className="flex-grow">
                          <p className="text-lg italic text-gray-700 leading-relaxed">
                            "{testimonial.text}"
                          </p>
                        </blockquote>
                        
                        <div className="mt-6 flex items-center">
                          <div className="h-12 w-12 rounded-full bg-gray-200 flex-shrink-0 overflow-hidden">
                            <img 
                              src={testimonial.avatar} 
                              alt={testimonial.name}
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <div className="ml-4">
                            <p className="font-medium text-gray-800">{testimonial.name}</p>
                            <p className="text-sm text-gray-500">{testimonial.location}</p>
                          </div>
                        </div>

                        {/* Mobile image (shown only on mobile) */}
                        <div className="mt-6 md:hidden rounded-lg overflow-hidden h-40">
                          <img 
                            src={testimonial.image}
                            alt={`${testimonial.name}'s purchase`}
                            className="h-full w-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Controls */}
            <div className="absolute bottom-4 right-4 flex space-x-2">
              <button 
                onClick={goToPrevious}
                className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={goToNext}
                className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} />
              </button>
            </div>
            
            {/* Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === activeIndex ? 'bg-teal-500 w-4' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;