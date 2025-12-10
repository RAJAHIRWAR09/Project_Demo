import React from 'react';
import { FaHome, FaPaintBrush, FaBullhorn } from 'react-icons/fa';

const AboutSections = () => {
    return (
        <>
            {/* Not Your Average Realtor Section */}
            <div className="py-20 overflow-hidden">
                <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
                    <div className="w-full md:w-1/2 mb-10 md:mb-0 relative">
                        {/* Abstract shapes / images replacement */}
                        <div className="md:pr-12">
                            <h2 className="text-blue-500 font-bold text-xl mb-4">Not Your Average Realtor</h2>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                Real Trust is not your average realtor. We offer exceptional service,
                                combining detailed market knowledge with a creative approach to
                                design and marketing. We help you find the perfect home or
                                sell strictly for top dollar.
                            </p>
                            <div className="flex space-x-2">
                                <div className="w-2 h-2 rounded-full bg-blue-200"></div>
                                <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                                <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 relative">
                        {/* Image Collage Placeholder */}
                        <div className="relative h-80 w-full">
                            <div className="absolute top-0 right-0 w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-lg z-10">
                                <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Agent 1" className="w-full h-full object-cover" />
                            </div>
                            <div className="absolute bottom-0 left-10 w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-lg z-10">
                                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Agent 2" className="w-full h-full object-cover" />
                            </div>
                            <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-blue-50 z-0"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Why Choose Us Section */}
            <div className="py-16 bg-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-blue-500 mb-12">Why Choose Us?</h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="flex flex-col items-center">
                            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center text-blue-500 text-2xl mb-4 shadow-sm">
                                <FaHome />
                            </div>
                            <h3 className="font-bold text-lg text-blue-500 mb-2">Potential ROI</h3>
                            <p className="text-gray-500 text-sm max-w-xs">
                                Whether you are looking to buy or invest, we provide you the best market analysis to ensure maximum returns on your potential investment.
                            </p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center text-blue-500 text-2xl mb-4 shadow-sm">
                                <FaPaintBrush />
                            </div>
                            <h3 className="font-bold text-lg text-blue-500 mb-2">Design</h3>
                            <p className="text-gray-500 text-sm max-w-xs">
                                Our creative design team works to give you the best aesthetic and functional designs for your dream home or office space.
                            </p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center text-blue-500 text-2xl mb-4 shadow-sm">
                                <FaBullhorn />
                            </div>
                            <h3 className="font-bold text-lg text-blue-500 mb-2">Marketing</h3>
                            <p className="text-gray-500 text-sm max-w-xs">
                                We use high-end marketing strategies and tools to ensure your property gets the visibility and attention it deserves in the market.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* About Us Video/Image Section at Bottom */}
            <div className="py-16 bg-white relative">
                <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
                    <div className="w-full md:w-1/2">
                        <div className="grid grid-cols-2 gap-4">
                            <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="House" className="rounded-lg shadow-md" />
                            <img src="https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Interior" className="rounded-lg shadow-md mt-8" />
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 text-center md:text-left">
                        <h2 className="text-3xl font-bold text-blue-500 mb-4 inline-block border-b-2 border-blue-500 pb-2">About Us</h2>
                        <p className="text-gray-600 mb-6">
                            With almost 20 years of experience in real estate, we help our clients find the
                            perfect home or investment property. We provide professional service in
                            building relationships with our clients and many improvements in our relationships
                            by communicating effectively.
                        </p>
                        <button className="text-blue-500 font-bold border border-blue-500 px-6 py-2 rounded hover:bg-blue-50 transition uppercase text-sm">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutSections;
