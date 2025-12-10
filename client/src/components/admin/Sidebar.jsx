import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="w-64 bg-gray-800 text-white min-h-screen p-6">
            <h2 className="text-2xl font-bold mb-8">Admin Panel</h2>
            <nav className="space-y-4">
                <Link to="/admin/projects" className="block py-2 px-4 hover:bg-gray-700 rounded">
                    Projects
                </Link>
                <Link to="/admin/clients" className="block py-2 px-4 hover:bg-gray-700 rounded">
                    Clients
                </Link>
                <Link to="/admin/contacts" className="block py-2 px-4 hover:bg-gray-700 rounded">
                    Contact Details
                </Link>
                <Link to="/admin/subscribers" className="block py-2 px-4 hover:bg-gray-700 rounded">
                    Subscribers
                </Link>
                <Link to="/" className="block py-2 px-4 hover:bg-gray-700 rounded mt-8 text-blue-400">
                    Back to Landing Page
                </Link>
            </nav>
        </div>
    );
};

export default Sidebar;
