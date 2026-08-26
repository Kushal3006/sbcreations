import React, { useState } from 'react';
import { Button } from './ui/Button';
import { init } from '@emailjs/browser';
import emailjs from '@emailjs/browser';

// Initialize EmailJS
init("gaFKFaQxZRI1iIcv1");

const categories = [
	{ id: 'resin-art', label: 'Resin Art' },
	{ id: 'gift-hampers', label: 'Gift Hampers' },
	{ id: 'jewelry', label: 'Resin Jewelry' },
	{ id: 'home-decor', label: 'Home Decor' },
	{ id: 'other', label: 'Other' }
];

interface FormData {
	name: string;
	email: string;
	phone: string;
	category: string;
	budget: string;
	description: string;
	deadline: string;
	reference: File | null;
}

const initialFormData: FormData = {
	name: '',
	email: '',
	phone: '',
	category: '',
	budget: '',
	description: '',
	deadline: '',
	reference: null
};

const CustomOrderForm: React.FC = () => {
	const [formData, setFormData] = useState<FormData>(initialFormData);
	const [submitting, setSubmitting] = useState(false);
	const [submitted, setSubmitted] = useState(false);
	const [error, setError] = useState<string | null>(null);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
		const { name, value } = e.target;
		setFormData(prev => ({ ...prev, [name]: value }));
		setError(null);
	};

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0] || null;
		setFormData(prev => ({ ...prev, reference: file }));
		setError(null);
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setSubmitting(true);
		setError(null);

		try {
			// Prepare email parameters
			const templateParams = {
				user_name: formData.name,
				user_email: formData.email,
				user_phone: formData.phone,
				category: formData.category,
				budget: formData.budget,
				description: formData.description,
				deadline: formData.deadline,
				to_email: 'stephenking5454@gmail.com',
			};
			
			// Send email using EmailJS
			const result = await emailjs.send(
				'service_qbvfnq8',
				'template_q0gnitr',
				templateParams
			);

			console.log('Email sent!', result.text);
			setSubmitting(false);
			setSubmitted(true);
			
			// Reset form after success
			setTimeout(() => {
				setSubmitted(false);
				setFormData(initialFormData);
			}, 3000);
		} catch (error) {
			console.error('Error sending email:', error);
			setSubmitting(false);
			setError('Sorry, there was a problem sending your request. Please try again or contact us directly.');
		}
	};

	return (
		<section id="custom" className="w-full h-full flex flex-col overflow-hidden">
			<div className="w-full max-w-4xl h-full flex flex-col">
				<div className="bg-white/95 sm:rounded-3xl shadow-2xl border border-[#ece7e1] flex flex-col h-full overflow-hidden">
					<div className="grid grid-cols-1 md:grid-cols-2 h-full md:overflow-auto">
						{/* Left side - Form */}
						<div className="p-4 sm:p-6 md:p-8 overflow-y-auto">
							<h2 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-[#8B7355] mb-2">Custom Order Request</h2>
							<p className="text-[#6B5B45] mb-4 sm:mb-6 font-light text-sm">Let us create something special just for you. Fill out the form below and we'll get back to you within 24 hours.</p>
							{submitted ? (
								<div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
									<div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
										<svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
									</div>
									<h3 className="text-xl font-semibold text-green-800 mb-2">Request Received!</h3>
									<p className="text-green-700">Thank you for your custom order request. We'll review the details and contact you shortly.</p>
								</div>
							) : (
								<form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
									{error && (
										<div className="bg-red-50 border border-red-200 rounded-lg p-3 sm:p-4 text-center">
											<p className="text-red-700 text-sm">{error}</p>
										</div>
									)}
									<div className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2">
										<div>
											<label htmlFor="name" className="block text-sm font-medium text-[#8B7355] mb-1">Full Name *</label>
											<input 
												type="text" 
												id="name" 
												name="name" 
												value={formData.name} 
												onChange={handleChange} 
												required 
												className="w-full px-3 sm:px-4 py-2 border border-[#A0937D]/30 rounded-lg focus:ring-2 focus:ring-[#8B7355] focus:border-transparent bg-white/80 text-[#8B7355] placeholder-[#A0937D] text-sm sm:text-base" 
												placeholder="Your Name" 
											/>
										</div>
										<div>
											<label htmlFor="email" className="block text-sm font-medium text-[#8B7355] mb-1">Email Address *</label>
											<input 
												type="email" 
												id="email" 
												name="email" 
												value={formData.email} 
												onChange={handleChange} 
												required 
												className="w-full px-3 sm:px-4 py-2 border border-[#A0937D]/30 rounded-lg focus:ring-2 focus:ring-[#8B7355] focus:border-transparent bg-white/80 text-[#8B7355] placeholder-[#A0937D] text-sm sm:text-base" 
												placeholder="you@email.com" 
											/>
										</div>
										<div>
											<label htmlFor="phone" className="block text-sm font-medium text-[#8B7355] mb-1">Phone Number</label>
											<input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-3 sm:px-4 py-2 border border-[#A0937D]/30 rounded-lg focus:ring-2 focus:ring-[#8B7355] focus:border-transparent bg-white/80 text-[#8B7355] placeholder-[#A0937D] text-sm sm:text-base" placeholder="Optional" />
										</div>
										<div>
											<label htmlFor="category" className="block text-sm font-medium text-[#8B7355] mb-1">Product Category *</label>
											<select id="category" name="category" value={formData.category} onChange={handleChange} required className="w-full px-3 sm:px-4 py-2 border border-[#A0937D]/30 rounded-lg focus:ring-2 focus:ring-[#8B7355] focus:border-transparent bg-white/80 text-[#8B7355]">
												<option value="" disabled>Select a category</option>
												{categories.map(category => (
													<option key={category.id} value={category.id}>{category.label}</option>
												))}
											</select>
										</div>
									</div>
									<div className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2">
										<div>
											<label htmlFor="budget" className="block text-sm font-medium text-[#8B7355] mb-1">Budget Range</label>
											<input type="text" id="budget" name="budget" value={formData.budget} onChange={handleChange} placeholder="e.g., ₹1000-₹3000" className="w-full px-3 sm:px-4 py-2 border border-[#A0937D]/30 rounded-lg focus:ring-2 focus:ring-[#8B7355] focus:border-transparent bg-white/80 text-[#8B7355] placeholder-[#A0937D] text-sm sm:text-base" />
										</div>
										<div>
											<label htmlFor="deadline" className="block text-sm font-medium text-[#8B7355] mb-1">Desired Completion Date</label>
											<input type="date" id="deadline" name="deadline" value={formData.deadline} onChange={handleChange} min={new Date().toISOString().split('T')[0]} className="w-full px-3 sm:px-4 py-2 border border-[#A0937D]/30 rounded-lg focus:ring-2 focus:ring-[#8B7355] focus:border-transparent bg-white/80 text-[#8B7355] text-sm sm:text-base" />
										</div>
									</div>
									<div>
										<label htmlFor="description" className="block text-sm font-medium text-[#8B7355] mb-1">Project Description *</label>
										<textarea id="description" name="description" value={formData.description} onChange={handleChange} required rows={4} placeholder="Describe what you're looking for, including colors, size, purpose, etc." className="w-full px-3 sm:px-4 py-2 border border-[#A0937D]/30 rounded-lg focus:ring-2 focus:ring-[#8B7355] focus:border-transparent bg-white/80 text-[#8B7355] placeholder-[#A0937D] text-sm sm:text-base" />
									</div>
									<div>
										<label htmlFor="reference" className="block text-sm font-medium text-[#8B7355] mb-1">Reference Image (optional)</label>
										<input type="file" id="reference" name="reference" accept="image/*" onChange={handleFileChange} className="w-full px-3 sm:px-4 py-2 border border-[#A0937D]/30 rounded-lg bg-white/80 text-[#8B7355]" />
									</div>
									<div>
										<Button type="submit" disabled={submitting} className="w-full bg-gradient-to-r from-[#8B7355] to-[#A0937D] text-white font-semibold py-3 rounded-xl shadow-lg hover:from-[#7A6449] hover:to-[#8B7355] transition-all duration-300">
											{submitting ? 'Submitting...' : 'Submit Custom Order Request'}
										</Button>
									</div>
								</form>
							)}
						</div>
						
						{/* Right side - Image and info */}
						<div className="relative bg-gradient-to-br from-[#8B7355]/90 to-[#A0937D]/80 text-white flex items-start min-h-[auto] md:min-h-[200px] h-full overflow-y-auto">
							<div className="absolute inset-0 opacity-20">
								<img src="https://images.pexels.com/photos/6060590/pexels-photo-6060590.jpeg" alt="Custom resin art creation" className="h-full w-full object-cover" />
							</div>
							<div className="relative p-4 sm:p-6 md:p-8">
								<h3 className="text-lg sm:text-xl font-serif font-bold mb-3 sm:mb-4">Why Choose Custom?</h3>
								<div className="space-y-3 sm:space-y-4">
									<div className="flex">
										<div className="flex-shrink-0 flex items-center justify-center h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-white/30 text-[#8B7355] font-bold text-sm sm:text-base">1</div>
										<div className="ml-3 sm:ml-4">
											<h4 className="text-base sm:text-lg font-medium">Personalized Design</h4>
											<p className="mt-0.5 text-white/90 text-sm">Create a one-of-a-kind piece that reflects your unique style and preferences.</p>
										</div>
									</div>
									<div className="flex">
										<div className="flex-shrink-0 flex items-center justify-center h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-white/30 text-[#8B7355] font-bold text-sm sm:text-base">2</div>
										<div className="ml-3 sm:ml-4">
											<h4 className="text-base sm:text-lg font-medium">Perfect Gifting</h4>
											<p className="mt-0.5 text-white/90 text-sm">Surprise your loved ones with a meaningful gift created especially for them.</p>
										</div>
									</div>
									<div className="flex">
										<div className="flex-shrink-0 flex items-center justify-center h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-white/30 text-[#8B7355] font-bold text-sm sm:text-base">3</div>
										<div className="ml-3 sm:ml-4">
											<h4 className="text-base sm:text-lg font-medium">Exact Specifications</h4>
											<p className="mt-0.5 text-white/90 text-sm">Get the precise size, color, and design elements that perfectly suit your space.</p>
										</div>
									</div>
								</div>
								<div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-white/30">
									<p className="text-sm sm:text-base font-medium mb-1 sm:mb-2">Have questions?</p>
									<p className="text-white/80 text-xs sm:text-sm">Contact us at <span className="font-medium text-white">info@artfulresin.com</span> or call <span className="font-medium text-white">(555) 123-4567</span></p>
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