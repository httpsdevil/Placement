import React, { useEffect, useState } from 'react';

const Coordinators = () => {
    const [admins, setAdmins] = useState([]);

    useEffect(() => {
        const fetchAdmins = async () => {
            try {
                const response = await fetch('http://localhost:4000/api/coordinators');
                const data = await response.json();
                setAdmins(data);
            } catch (error) {
                console.error('Failed to fetch admins:', error);
            }
        };

        fetchAdmins();
    }, []);

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-2xl font-bold mb-6">Coordinators</h1>
            <div className="space-y-4">
                {admins.map((admin) => (
                    <div className="bg-white p-4 rounded-lg shadow-md" key={admin._id}>
                        <h2 className="text-xl font-semibold mb-2">{admin.email}</h2>
                        <p className="mb-1"><strong className="font-semibold">Role:</strong> {admin.role}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Coordinators;
