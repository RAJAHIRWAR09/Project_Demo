import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-10">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                    <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">R</div>
                        <span className="text-lg font-bold">Real Trust</span>
                    </div>
                </div>

                <div className="flex space-x-6 text-sm text-gray-400 mb-4 md:mb-0">
                    <a href="#" className="hover:text-white">Home</a>
                    <a href="#" className="hover:text-white">Services</a>
                    <a href="#" className="hover:text-white">Projects</a>
                    <a href="#" className="hover:text-white">Testimonials</a>
                    <a href="#" className="hover:text-white">Contact</a>
                </div>

                <div className="flex space-x-4">
                    <a href="#" className="text-gray-400 hover:text-white"><FaFacebook /></a>
                    <a href="#" className="text-gray-400 hover:text-white"><FaTwitter /></a>
                    <a href="#" className="text-gray-400 hover:text-white"><FaLinkedin /></a>
                    <a href="#" className="text-gray-400 hover:text-white"><FaInstagram /></a>
                </div>
            </div>
            <div className="text-center text-gray-600 text-xs mt-8">
                &copy; 2024 Real Trust. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
