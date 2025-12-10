import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProjectsSection = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/projects`);
                setProjects(res.data);
                setLoading(false);
            } catch (err) {
                console.error("Error fetching projects", err);
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    return (
        <div id="projects" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-blue-500 mb-4">Our Projects</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        We know what buyers are looking for and suggest projects that will bring clients top dollar for the sale of their homes.
                    </p>
                </div>

                {loading ? (
                    <div className="text-center">Loading...</div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {projects.length === 0 ? (
                            <div className="col-span-full text-center text-gray-500">No projects added yet.</div>
                        ) : (
                            projects.map((project) => (
                                <div key={project._id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group">
                                    <div className="h-56 overflow-hidden relative">
                                        <img
                                            src={`${import.meta.env.VITE_API_URL}/uploads/${project.image}`}
                                            alt={project.title}
                                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="p-6 text-center">
                                        <h3 className="text-lg font-bold text-blue-500 mb-1">{project.title}</h3>
                                        <p className="text-gray-400 text-xs mb-6 uppercase">Project Name, Location</p> {/* Placeholder for sub-info if needed */}
                                        <button className="bg-orange-500 text-white px-8 py-2 rounded-sm text-sm font-bold uppercase hover:bg-orange-600 transition-colors duration-200">
                                            Read More
                                        </button>
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

export default ProjectsSection;
