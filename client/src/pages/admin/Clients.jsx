import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminClients = () => {
    const [clients, setClients] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        designation: '',
        description: '',
        image: null
    });
    const [status, setStatus] = useState('');

    useEffect(() => {
        fetchClients();
    }, []);

    const fetchClients = async () => {
        try {
            const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/clients`);
            setClients(res.data);
        } catch (err) {
            console.error(err);
        }
    };

    const handleChange = (e) => {
        if (e.target.name === 'image') {
            setFormData({ ...formData, image: e.target.files[0] });
        } else {
            setFormData({ ...formData, [e.target.name]: e.target.value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append('name', formData.name);
        data.append('designation', formData.designation);
        data.append('description', formData.description);
        data.append('image', formData.image);

        try {
            await axios.post(`${import.meta.env.VITE_API_URL}/api/clients`, data, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });
            setStatus('Client Added!');
            setFormData({ name: '', designation: '', description: '', image: null });
            fetchClients();
        } catch (err) {
            console.error(err);
            setStatus('Failed to add client.');
        }
    };

    return (
        <div>
            <h1 className="text-3xl font-bold mb-8">Client Management</h1>

            <div className="bg-white p-6 rounded shadow mb-8">
                <h2 className="text-xl font-bold mb-4">Add Happy Client</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-bold mb-2">Client Name</label>
                        <input name="name" value={formData.name} onChange={handleChange} type="text" className="w-full border p-2 rounded" required />
                    </div>
                    <div>
                        <label className="block text-sm font-bold mb-2">Designation</label>
                        <input name="designation" value={formData.designation} onChange={handleChange} type="text" className="w-full border p-2 rounded" required />
                    </div>
                    <div>
                        <label className="block text-sm font-bold mb-2">Description (Testimonial)</label>
                        <textarea name="description" value={formData.description} onChange={handleChange} className="w-full border p-2 rounded" required></textarea>
                    </div>
                    <div>
                        <label className="block text-sm font-bold mb-2">Image</label>
                        <input name="image" onChange={handleChange} type="file" className="w-full" required />
                    </div>
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Add Client</button>
                    {status && <p className="mt-2 text-sm">{status}</p>}
                </form>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {clients.map(client => (
                    <div key={client._id} className="bg-white p-4 rounded shadow text-center">
                        <img src={`${import.meta.env.VITE_API_URL}/uploads/${client.image}`} alt={client.name} className="w-24 h-24 object-cover mx-auto rounded-full mb-4" />
                        <h3 className="font-bold">{client.name}</h3>
                        <p className="text-xs text-blue-500 uppercase">{client.designation}</p>
                        <p className="text-sm text-gray-600 mt-2 italic">"{client.description}"</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AdminClients;
