import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from '../components/admin/Sidebar';
import AdminProjects from './admin/Projects';
import AdminClients from './admin/Clients';
import AdminContacts from './admin/Contacts';
import AdminSubscribers from './admin/Subscribers';

const AdminDashboard = () => {
    return (
        <div className="flex bg-gray-100 min-h-screen">
            <Sidebar />
            <div className="flex-1 p-10 overflow-y-auto">
                <Routes>
                    <Route path="/" element={<Navigate to="projects" replace />} />
                    <Route path="projects" element={<AdminProjects />} />
                    <Route path="clients" element={<AdminClients />} />
                    <Route path="contacts" element={<AdminContacts />} />
                    <Route path="subscribers" element={<AdminSubscribers />} />
                </Routes>
            </div>
        </div>
    );
};

export default AdminDashboard;
