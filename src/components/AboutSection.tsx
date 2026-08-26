import React from 'react';
import { Button } from './ui/Button';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 md:px-8 bg-gray-50">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image mosaic */}
          <div className="relative grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-md">
                {/* <img 
                  src="https://images.pexels.com/photos/5755062/pexels-photo-5755062.jpeg" 
                  alt="Resin art process"
                  className="w-full h-full object-cover"
                /> */}
              </div>
              <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-md relative top-8">
                <img 
                  src="https://images.pexels.com/photos/5755066/pexels-photo-5755066.jpeg" 
                  alt="Colorful resin piece" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="space-y-4 relative top-10">
              <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-md">
                <img 
                  src="https://images.pexels.com/photos/6060520/pexels-photo-6060520.jpeg" 
                  alt="Close-up of resin art" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-md">
                <img 
                  src="https://images.pexels.com/photos/5755253/pexels-photo-5755253.jpeg" 
                  alt="Artist at work" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-teal-200 rounded-full opacity-70"></div>
            <div className="absolute -top-6 -right-6 w-16 h-16 bg-purple-200 rounded-full opacity-70"></div>
          </div>

          {/* About content */}
          <div className="lg:pl-8">
            <div className="inline-block px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-sm font-medium mb-4">
              Our Story
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-6">
              Crafting Beauty from Liquid to Solid
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Founded in 2020, ArtfulResin began as a passion project during the lockdown when our 
                founder discovered the therapeutic and creative potential of resin art.
              </p>
              <p>
                What started as a hobby quickly evolved into a full-fledged artisan business as friends 
                and family began requesting custom pieces for their homes and special occasions.
              </p>
              <p>
                Today, we create bespoke resin art pieces, from stunning home decor to personalized 
                gifts and custom jewelry. Each piece is handcrafted with love and attention to detail, 
                ensuring that no two items are exactly alike.
              </p>
              <p>
                Our mission is to bring joy and beauty into everyday life through the transformative 
                medium of resin art, capturing moments and emotions in pieces that last forever.
              </p>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-4">
              <Button variant="primary" className="w-full sm:w-auto">Read More</Button>
              <Button variant="outline" className="w-full sm:w-auto">Our Process</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;