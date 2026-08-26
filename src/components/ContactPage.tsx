import React, { useState } from 'react';
import { Mail, Phone, Send, Instagram, Facebook, Twitter } from 'lucide-react';

const ContactPage: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here (e.g., API call or EmailJS)
        console.log('Form submitted:', formData);
        alert('Thank you for your message! We will get back to you soon.');
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    return (
        <div className="pt-8 pb-16 min-h-screen">
            <div className="container mx-auto px-4 max-w-6xl">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <span className="text-teal-600 font-semibold tracking-wider text-sm uppercase mb-2 block">Get in Touch</span>
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-6 relative inline-block">
                        Contact Us
                        <svg className="absolute w-24 h-2 -bottom-2 right-0 text-teal-200" viewBox="0 0 100 10" preserveAspectRatio="none">
                            <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                        </svg>
                    </h1>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
                        Have a question about our products or want a custom order? We'd love to hear from you.
                    </p>
                </div>

                <div className="flex justify-center items-center">
                    {/* Contact Information */}
                    <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-gray-100 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-teal-50 rounded-full -mr-16 -mt-16 opacity-50"></div>
                        <div className="absolute bottom-0 left-0 w-24 h-24 bg-pink-50 rounded-full -ml-12 -mb-12 opacity-50"></div>

                        <h2 className="text-2xl font-serif font-bold text-gray-800 mb-8 z-10 relative">Contact Information</h2>

                        <div className="space-y-8 z-10 relative">
                            <div className="flex items-start group">
                                <div className="bg-teal-50 p-3 rounded-lg mr-4 group-hover:bg-teal-100 transition-colors duration-300">
                                    <Mail className="w-6 h-6 text-teal-600" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-800 mb-1">Email Us</h3>
                                    <p className="text-gray-600">hello@sbcreations.com</p>
                                    <p className="text-gray-600">support@sbcreations.com</p>
                                </div>
                            </div>

                            <div className="flex items-start group">
                                <div className="bg-teal-50 p-3 rounded-lg mr-4 group-hover:bg-teal-100 transition-colors duration-300">
                                    <Phone className="w-6 h-6 text-teal-600" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-800 mb-1">Call Us</h3>
                                    <p className="text-gray-600">+91 98765 43210</p>
                                    <p className="text-gray-500 text-sm">Mon - Fri, 9am - 6pm</p>
                                </div>
                            </div>


                        </div>

                        <div className="mt-12 pt-8 border-t border-gray-100">
                            <h3 className="font-semibold text-gray-800 mb-4">Follow Us</h3>
                            <div className="flex space-x-4">
                                <a href="#" className="bg-gray-50 p-3 rounded-full hover:bg-teal-50 hover:text-teal-600 transition-all duration-300 text-gray-400">
                                    <Instagram className="w-5 h-5" />
                                </a>
                                <a href="#" className="bg-gray-50 p-3 rounded-full hover:bg-teal-50 hover:text-teal-600 transition-all duration-300 text-gray-400">
                                    <Facebook className="w-5 h-5" />
                                </a>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ContactPage;
