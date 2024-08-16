import React, { useEffect, useState } from 'react';

const Dashboard = () => {
    const [coordinatorsCount, setCoordinatorsCount] = useState(0);
    const [studentsCount, setStudentsCount] = useState(0);
    const [companiesCount, setCompaniesCount] = useState(0);

    useEffect(() => {
        const fetchCounts = async () => {
            try {
                const [coordinatorsRes, studentsRes, companiesRes] = await Promise.all([
                    fetch('http://localhost:4000/api/dashboard/coordinators'),
                    fetch('http://localhost:4000/api/dashboard/students'),
                    fetch('http://localhost:4000/api/dashboard/companies')
                ]);

                const coordinatorsData = await coordinatorsRes.json();
                const studentsData = await studentsRes.json();
                const companiesData = await companiesRes.json();

                setCoordinatorsCount(coordinatorsData.count);
                setStudentsCount(studentsData.count);
                setCompaniesCount(companiesData.count);
            } catch (error) {
                console.error('Failed to fetch counts:', error);
            }
        };

        fetchCounts();
    }, []);

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <div className="bg-white p-4 rounded-lg shadow-md text-center">
                    <h2 className="text-xl font-semibold mb-2">Number of Coordinators</h2>
                    <p className="text-2xl font-bold">{coordinatorsCount}</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md text-center">
                    <h2 className="text-xl font-semibold mb-2">Total Students</h2>
                    <p className="text-2xl font-bold">{studentsCount}</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md text-center">
                    <h2 className="text-xl font-semibold mb-2">Total Companies</h2>
                    <p className="text-2xl font-bold">{companiesCount}</p>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
