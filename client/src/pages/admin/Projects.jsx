import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminProjects = () => {
    const [projects, setProjects] = useState([]);
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        image: null
    });
    const [status, setStatus] = useState('');

    useEffect(() => {
        fetchProjects();
    }, []);

    const fetchProjects = async () => {
        try {
            const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/projects`);
            setProjects(res.data);
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
        data.append('title', formData.title);
        data.append('description', formData.description);
        data.append('image', formData.image);

        try {
            await axios.post(`${import.meta.env.VITE_API_URL}/api/projects`, data, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });
            setStatus('Project Added!');
            setFormData({ title: '', description: '', image: null });
            fetchProjects();
        } catch (err) {
            console.error(err);
            setStatus('Failed to add project.');
        }
    };

    return (
        <div>
            <h1 className="text-3xl font-bold mb-8">Project Management</h1>

            <div className="bg-white p-6 rounded shadow mb-8">
                <h2 className="text-xl font-bold mb-4">Add New Project</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-bold mb-2">Project Name</label>
                        <input name="title" value={formData.title} onChange={handleChange} type="text" className="w-full border p-2 rounded" required />
                    </div>
                    <div>
                        <label className="block text-sm font-bold mb-2">Description</label>
                        <textarea name="description" value={formData.description} onChange={handleChange} className="w-full border p-2 rounded" required></textarea>
                    </div>
                    <div>
                        <label className="block text-sm font-bold mb-2">Image</label>
                        <input name="image" onChange={handleChange} type="file" className="w-full" required />
                    </div>
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Add Project</button>
                    {status && <p className="mt-2 text-sm">{status}</p>}
                </form>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {projects.map(project => (
                    <div key={project._id} className="bg-white p-4 rounded shadow">
                        <img src={`${import.meta.env.VITE_API_URL}/uploads/${project.image}`} alt={project.title} className="w-full h-40 object-cover mb-4 rounded" />
                        <h3 className="font-bold text-lg">{project.title}</h3>
                        <p className="text-sm text-gray-600">{project.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AdminProjects;
