import React from 'react';
import { Star } from 'lucide-react';
import { testimonials } from '../data/testimonials';
import AnimatedCounter from './AnimatedCounter';

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto max-w-5xl">
        {/* Animated Counters Section */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-12">
          <AnimatedCounter value={1200} duration={2000} label="Orders Delivered Till Now" />
          <div className="hidden sm:block h-12 w-px bg-gray-300 mx-4" />
          <AnimatedCounter value={150} duration={2000} label="International Orders" />
        </div>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-4">
            Customer Reviews
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            See what our happy customers have to say about their experience with us!
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-xl shadow-lg p-6 flex flex-col h-full">
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-teal-400 mr-3"
                />
                <div>
                  <p className="font-semibold text-gray-800 text-base">{testimonial.name}</p>
                  <p className="text-xs text-gray-500">{testimonial.location}</p>
                </div>
              </div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={i < testimonial.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
                  />
                ))}
                <span className="ml-2 text-xs text-gray-400">{testimonial.date}</span>
              </div>
              <p className="text-gray-700 italic mb-4 flex-grow">"{testimonial.text}"</p>
              <div className="rounded-lg overflow-hidden h-32 w-full mt-2">
                <img
                  src={testimonial.image}
                  alt={`${testimonial.name}'s purchase`}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;