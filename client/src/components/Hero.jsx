import React from 'react';
import { useState } from 'react';
import axios from 'axios';

const Hero = () => {
    // Making the Hero form functional as well since it's prominent
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        mobile: '',
        city: ''
    });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`${import.meta.env.VITE_API_URL}/api/contact`, formData);
            setStatus('Request Sent!');
            setFormData({ fullName: '', email: '', mobile: '', city: '' });
        } catch (err) {
            console.error(err);
            setStatus('Failed.');
        }
    };

    return (
        <div className="relative h-[600px] flex items-center bg-gray-900 overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80" alt="Office" className="w-full h-full object-cover opacity-50" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/70"></div>
            </div>

            <div className="container mx-auto px-4 z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full">
                {/* Text Content */}
                <div className="text-white space-y-6">
                    <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                        Consultation, <br />
                        Design, <br />
                        & Marketing
                    </h1>
                    <div className="flex space-x-2">
                        {/* Decorative dots if needed */}
                    </div>
                </div>

                {/* Consultation Form Card - "Get a Free Consultation" */}
                <div className="flex justify-center lg:justify-end">
                    <div className="bg-blue-600/80 backdrop-blur-md p-8 rounded-lg max-w-sm w-full shadow-2xl border border-blue-500/50">
                        <h2 className="text-2xl font-bold text-white mb-6 text-center">Get a Free Consultation</h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <input
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    type="text"
                                    placeholder="Full Name"
                                    className="w-full bg-transparent border-b border-blue-300/50 text-white placeholder-blue-200 py-3 focus:outline-none focus:border-white transition-colors"
                                    required
                                />
                            </div>
                            <div>
                                <input
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    type="email"
                                    placeholder="Email Address"
                                    className="w-full bg-transparent border-b border-blue-300/50 text-white placeholder-blue-200 py-3 focus:outline-none focus:border-white transition-colors"
                                    required
                                />
                            </div>
                            <div>
                                <input
                                    name="mobile"
                                    value={formData.mobile}
                                    onChange={handleChange}
                                    type="text"
                                    placeholder="Mobile Number"
                                    className="w-full bg-transparent border-b border-blue-300/50 text-white placeholder-blue-200 py-3 focus:outline-none focus:border-white transition-colors"
                                    required
                                />
                            </div>
                            <div>
                                <input
                                    name="city"
                                    value={formData.city}
                                    onChange={handleChange}
                                    type="text"
                                    placeholder="Area / City"
                                    className="w-full bg-transparent border-b border-blue-300/50 text-white placeholder-blue-200 py-3 focus:outline-none focus:border-white transition-colors"
                                    required
                                />
                            </div>
                            <button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 mt-6 rounded shadow-lg uppercase tracking-wide transition transform hover:-translate-y-0.5">
                                Get Quick Quote
                            </button>
                            {status && <p className="text-center text-white text-sm mt-2">{status}</p>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
