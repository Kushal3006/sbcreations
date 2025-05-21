import React, { useState } from 'react';
import { Button } from './ui/Button';

const categories = [
  { id: 'resin-art', label: 'Resin Art' },
  { id: 'gift-hampers', label: 'Gift Hampers' },
  { id: 'jewelry', label: 'Resin Jewelry' },
  { id: 'home-decor', label: 'Home Decor' },
  { id: 'other', label: 'Other' }
];

const CustomOrderForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    category: '',
    budget: '',
    description: '',
    deadline: ''
  });
  
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          category: '',
          budget: '',
          description: '',
          deadline: ''
        });
      }, 3000);
    }, 1500);
  };

  return (
    <section id="custom" className="py-20 px-4 sm:px-6 md:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Left side - Form */}
            <div className="p-8 md:p-12">
              <h2 className="text-3xl font-serif font-bold text-gray-800 mb-2">
                Custom Order Request
              </h2>
              <p className="text-gray-600 mb-8">
                Let us create something special just for you or your loved ones.
                Fill out the form below and we'll get back to you within 24 hours.
              </p>

              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-green-800 mb-2">Request Received!</h3>
                  <p className="text-green-700">
                    Thank you for your custom order request. We'll review the details and contact you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                        Product Category *
                      </label>
                      <select
                        id="category"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      >
                        <option value="" disabled>Select a category</option>
                        {categories.map(category => (
                          <option key={category.id} value={category.id}>
                            {category.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-1">
                        Budget Range
                      </label>
                      <input
                        type="text"
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        placeholder="e.g., $50-$100"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                      Project Description *
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      required
                      rows={4}
                      placeholder="Please describe what you're looking for, including colors, size, purpose, etc."
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    ></textarea>
                  </div>

                  <div>
                    <label htmlFor="deadline" className="block text-sm font-medium text-gray-700 mb-1">
                      Desired Completion Date
                    </label>
                    <input
                      type="date"
                      id="deadline"
                      name="deadline"
                      value={formData.deadline}
                      onChange={handleChange}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <Button
                      type="submit"
                      disabled={submitting}
                      className="w-full"
                    >
                      {submitting ? 'Submitting...' : 'Submit Custom Order Request'}
                    </Button>
                  </div>
                </form>
              )}
            </div>

            {/* Right side - Image and info */}
            <div className="relative bg-teal-600 text-white flex items-center min-h-[300px]">
              <div className="absolute inset-0 opacity-20">
                <img
                  src="https://images.pexels.com/photos/6060590/pexels-photo-6060590.jpeg"
                  alt="Custom resin art creation"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="relative p-8 md:p-12">
                <h3 className="text-2xl font-serif font-bold mb-6">Why Choose Custom?</h3>
                
                <div className="space-y-6">
                  <div className="flex">
                    <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-full bg-teal-700 text-white">
                      1
                    </div>
                    <div className="ml-4">
                      <h4 className="text-xl font-medium">Personalized Design</h4>
                      <p className="mt-1 text-teal-100">
                        Create a one-of-a-kind piece that reflects your unique style and preferences.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-full bg-teal-700 text-white">
                      2
                    </div>
                    <div className="ml-4">
                      <h4 className="text-xl font-medium">Perfect Gifting</h4>
                      <p className="mt-1 text-teal-100">
                        Surprise your loved ones with a meaningful gift created especially for them.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-full bg-teal-700 text-white">
                      3
                    </div>
                    <div className="ml-4">
                      <h4 className="text-xl font-medium">Exact Specifications</h4>
                      <p className="mt-1 text-teal-100">
                        Get the precise size, color, and design elements that perfectly suit your space.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-teal-500">
                  <p className="text-lg font-medium mb-2">Have questions?</p>
                  <p className="text-teal-100">
                    Contact us directly at <span className="font-medium text-white">info@artfulresin.com</span> or call us at <span className="font-medium text-white">(555) 123-4567</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomOrderForm;