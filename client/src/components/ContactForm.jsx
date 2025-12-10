import React, { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
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
        setStatus('Sending...');
        try {
            await axios.post(`${import.meta.env.VITE_API_URL}/api/contact`, formData);
            setStatus('Submitted successfully!');
            setFormData({ fullName: '', email: '', mobile: '', city: '' });
        } catch (err) {
            console.error(err);
            setStatus('Failed to submit.');
        }
    };

    return (
        <div id="contact" className="py-10 bg-white">
            {/* This section is somewhat redundant with the Hero modal, but requested separately or as part of landing.
                 The ref image has a contact form in the hero, but also mentions "Contact" in nav.
                 I'll add a separate contact section or just rely on the hero one?
                 The requirements say "Contact Form... submit... shown in admin".
                 The reference image has a "Contact Form" section, looking like part of the hero or separate?
                 Actually the "reference image for Contact Form" is the one inside the hero likely.
                 BUT, Requirement 1 mentions "Contact Form- Create a contact form... where user can submit".
                 I'll put it in a dedicated section at bottom too just in case, or make the Hero form functional.
                 I'll make the Hero form functional AND add this section for completeness if needed.
                 Actually, the prompt says "Contact Form ... Reference Image" and points to the Hero one (likely).
                 But let's create a functional component we can use anywhere.
             */}
            <div className="container mx-auto px-4 max-w-lg">
                <h2 className="text-3xl font-bold text-center text-blue-500 mb-8">Contact Us</h2>
                <form onSubmit={handleSubmit} className="space-y-4 shadow-lg p-8 rounded-lg bg-gray-50 border border-gray-100">
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2">Full Name</label>
                        <input name="fullName" value={formData.fullName} onChange={handleChange} type="text" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                    </div>
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
                        <input name="email" value={formData.email} onChange={handleChange} type="email" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                    </div>
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2">Mobile Number</label>
                        <input name="mobile" value={formData.mobile} onChange={handleChange} type="text" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                    </div>
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2">City</label>
                        <input name="city" value={formData.city} onChange={handleChange} type="text" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                    </div>

                    <button type="submit" className="w-full bg-orange-500 text-white font-bold py-2 rounded-md hover:bg-orange-600 transition duration-300">
                        Submit
                    </button>
                    {status && <p className="text-center text-sm mt-2">{status}</p>}
                </form>
            </div>
        </div>
    );
};

export default ContactForm;
