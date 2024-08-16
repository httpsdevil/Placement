import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CoordinatorsInfo = () => {
    const [coordinators, setCoordinators] = useState([]);

    useEffect(() => {
        const fetchCoordinators = async () => {
            try {
                const response = await axios.get('http://localhost:4000/api/coordinators');
                setCoordinators(response.data);
            } catch (error) {
                console.error('Failed to fetch coordinators:', error);
            }
        };

        fetchCoordinators();
    }, []);

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-2xl font-bold mb-6">Coordinators Info</h1>
            <ul className="space-y-4">
                {coordinators.map((coordinator) => (
                    <li key={coordinator._id} className="bg-white p-4 rounded-lg shadow-md">
                        <div><strong>Email:</strong> {coordinator.email}</div>
                        <div><strong>Role:</strong> {coordinator.role}</div>
                        {/* Add other coordinator details */}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CoordinatorsInfo;
