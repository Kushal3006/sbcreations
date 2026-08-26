import React, { useState } from 'react';
import { Button } from './ui/Button';
import { Mail } from 'lucide-react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setError('Please enter your email address');
      return;
    }
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address');
      return;
    }
    
    // Reset error if any
    setError('');
    
    // Simulate submission
    setTimeout(() => {
      setSubmitted(true);
      setEmail('');
    }, 1000);
  };

  return (
    <section className="py-16 px-4 md:px-8 bg-teal-600">
      <div className="container mx-auto max-w-4xl">
        <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-teal-700 to-teal-600 shadow-lg">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 h-40 w-40 transform translate-x-1/4 -translate-y-1/4 bg-teal-500 opacity-40 rounded-full"></div>
          <div className="absolute bottom-0 left-0 h-32 w-32 transform -translate-x-1/4 translate-y-1/4 bg-teal-500 opacity-30 rounded-full"></div>
          
          <div className="relative p-8 md:p-12 text-center">
            <Mail className="h-12 w-12 mx-auto mb-6 text-white/90" />
            
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
              Join Our Creative Community
            </h2>
            <p className="text-teal-100 max-w-2xl mx-auto mb-8">
              Subscribe to our newsletter for exclusive offers, new product announcements, 
              craft tips, and inspirational resin art ideas delivered to your inbox.
            </p>
            
            {submitted ? (
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-md mx-auto">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Thank You for Subscribing!</h3>
                <p className="text-teal-100">
                  You've successfully joined our newsletter. Look out for creative inspiration coming to your inbox soon!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="flex-grow">
                    <input
                      type="email"
                      placeholder="Your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={`w-full px-4 py-3 rounded-lg border-2 border-transparent focus:outline-none focus:border-teal-400 ${
                        error ? 'border-red-300 bg-red-50' : 'bg-white'
                      } text-sm md:text-base`}
                    />
                    {error && (
                      <p className="mt-2 text-left text-red-200 text-sm">
                        {error}
                      </p>
                    )}
                  </div>
                  <Button 
                    type="submit" 
                    className="bg-white text-teal-700 hover:bg-teal-50 min-w-[120px] w-full sm:w-auto"
                  >
                    Subscribe
                  </Button>
                </div>
                <p className="mt-4 text-sm text-teal-100">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;