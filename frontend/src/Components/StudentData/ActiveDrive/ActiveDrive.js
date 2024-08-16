import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ActiveDrive = () => {
    const [companies, setCompanies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchCompanies();
    }, []);

    const fetchCompanies = async () => {
        try {
            const response = await axios.get('http://localhost:4000/api/companies', {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            });
            setCompanies(response.data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching companies:', error);
            setError('Failed to fetch companies data');
            setLoading(false);
        }
    };

    if (loading) {
        return <div className="text-gray-500 text-center">Loading...</div>;
    }

    if (error) {
        return <div className="text-red-500 text-center">{error}</div>;
    }

    return (
        <div className="p-6 bg-white shadow-lg rounded-lg">
            <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Active Drives</h1>
            {companies.length > 0 ? (
                companies.map(company => (
                    <div key={company._id} className="mb-8 p-4 border rounded-lg hover:shadow-md transition-shadow duration-200">
                        <h2 className="text-xl font-semibold text-blue-600 mb-2">{company.full_name}</h2>
                        <p className="text-gray-700"><span className="font-semibold">Designation:</span> {company.designation}</p>
                        <p className="text-gray-700"><span className="font-semibold">Email:</span> {company.email}</p>
                        <p className="text-gray-700"><span className="font-semibold">Contact Number:</span> {company.contact_number}</p>
                        <p className="text-gray-700"><span className="font-semibold">Website:</span> <a href={company.website} className="text-blue-500 hover:underline">{company.website}</a></p>
                        <p className="text-gray-700"><span className="font-semibold">City:</span> {company.city}</p>
                        <p className="text-gray-700"><span className="font-semibold">About Role:</span> {company.about_role}</p>
                        <p className="text-gray-600 text-sm"><span className="font-semibold">Created At:</span> {new Date(company.createdAt).toLocaleDateString()}</p>
                    </div>
                ))
            ) : (
                <div className="text-gray-500 text-center">No companies available.</div>
            )}
        </div>
    );
};

export default ActiveDrive;
