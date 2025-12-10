import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ClientsSection = () => {
    const [clients, setClients] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchClients = async () => {
            try {
                const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/clients`);
                setClients(res.data);
                setLoading(false);
            } catch (err) {
                console.error("Error fetching clients", err);
                setLoading(false);
            }
        };

        fetchClients();
    }, []);

    return (
        <div id="testimonials" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-blue-500">Happy Clients</h2>
                </div>

                {loading ? (
                    <div className="text-center">Loading...</div>
                ) : (
                    <div className="flex flex-wrap justify-center gap-8">
                        {clients.length === 0 ? (
                            <p className="text-gray-500">No clients added yet. Add them in the Admin Panel.</p>
                        ) : (
                            clients.map((client) => (
                                <div key={client._id} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 max-w-xs w-full hover:shadow-2xl transition-shadow duration-300">
                                    <div className="flex flex-col items-start text-left">
                                        <div className="w-16 h-16 rounded-full overflow-hidden mb-6 border-2 border-white shadow-sm">
                                            <img
                                                src={`${import.meta.env.VITE_API_URL}/uploads/${client.image}`}
                                                alt={client.name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                                            {client.description}
                                        </p>
                                        <div className="mt-auto">
                                            <h4 className="text-blue-500 font-bold text-lg">{client.name}</h4>
                                            <span className="text-gray-400 text-xs uppercase font-medium">{client.designation}</span>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ClientsSection;
