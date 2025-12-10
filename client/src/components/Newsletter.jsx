import React, { useState } from 'react';
import axios from 'axios';

const Newsletter = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`${import.meta.env.VITE_API_URL}/api/subscribe`, { email });
            setStatus('Subscribed!');
            setEmail('');
        } catch (err) {
            console.error(err);
            setStatus(err.response?.data?.msg || 'Failed.');
        }
    };

    return (
        <div id="newsletter" className="bg-blue-500 py-12">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
                <div className="mb-6 md:mb-0 text-white">
                    <h2 className="text-2xl font-bold">Subscribe to Our Newsletter</h2>
                    <p className="text-white opacity-90">Sign up specifically for updates and projects.</p>
                </div>
                <div className="w-full md:w-auto">
                    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
                        <input
                            type="email"
                            placeholder="Enter Email Address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="px-4 py-2 rounded-md focus:outline-none text-gray-800 w-full sm:w-64"
                            required
                        />
                        <button type="submit" className="bg-white text-blue-500 font-bold px-6 py-2 rounded-md hover:bg-gray-100 transition duration-300">
                            Subscribe
                        </button>
                    </form>
                    {status && <p className="text-white text-sm mt-2">{status}</p>}
                </div>
            </div>
        </div>
    );
};

export default Newsletter;
