import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminContacts = () => {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        const fetchContacts = async () => {
            try {
                const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/contact`);
                setContacts(res.data);
            } catch (err) {
                console.error(err);
            }
        };
        fetchContacts();
    }, []);

    return (
        <div>
            <h1 className="text-3xl font-bold mb-8">Contact Submissions</h1>
            <div className="bg-white rounded shadow overflow-x-auto">
                <table className="min-w-full">
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="py-2 px-4 text-left">Name</th>
                            <th className="py-2 px-4 text-left">Email</th>
                            <th className="py-2 px-4 text-left">Mobile</th>
                            <th className="py-2 px-4 text-left">City</th>
                            <th className="py-2 px-4 text-left">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contacts.map(contact => (
                            <tr key={contact._id} className="border-b">
                                <td className="py-2 px-4">{contact.fullName}</td>
                                <td className="py-2 px-4">{contact.email}</td>
                                <td className="py-2 px-4">{contact.mobile}</td>
                                <td className="py-2 px-4">{contact.city}</td>
                                <td className="py-2 px-4">{new Date(contact.createdAt).toLocaleDateString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminContacts;
