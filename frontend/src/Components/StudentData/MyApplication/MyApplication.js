import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MyApplication = () => {
    const [student, setStudent] = useState(null);
    const [application, setApplication] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchApplication();
    }, []);

    const fetchApplication = async () => {
        try {
            const response = await axios.get('http://localhost:4000/api/student/application', {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            });
            console.log('Response data:', response.data);
            setStudent(response.data); 
            setApplication(response.data.application);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching application:', error);
            setError('Failed to fetch application details');
            setLoading(false);
        }
    };

    if (loading) {
        return <p className="text-gray-500">Loading...</p>;
    }

    if (error) {
        return <p className="text-red-500">{error}</p>;
    }

    if (!student) {
        return <p className="text-gray-500">No student data available.</p>;
    }

    return (
        <div className="p-6 bg-white shadow-lg rounded-lg">
            <h1 className="text-2xl font-bold mb-6 text-indigo-600">My Application</h1>
            <div className="mb-6">
                <h2 className="text-xl font-semibold mb-4 text-indigo-500">Personal Information</h2>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <p className="font-semibold text-gray-800">First Name:</p>
                        <p className="text-gray-600">{student.first_name}</p>
                    </div>
                    <div>
                        <p className="font-semibold text-gray-800">Last Name:</p>
                        <p className="text-gray-600">{student.last_name}</p>
                    </div>
                    <div>
                        <p className="font-semibold text-gray-800">Email:</p>
                        <p className="text-gray-600">{student.email}</p>
                    </div>
                    <div>
                        <p className="font-semibold text-gray-800">Bachelor College:</p>
                        <p className="text-gray-600">{student.bachelor_college}</p>
                    </div>
                    <div>
                        <p className="font-semibold text-gray-800">Graduation College:</p>
                        <p className="text-gray-600">{student.graduation_college}</p>
                    </div>
                    <div>
                        <p className="font-semibold text-gray-800">Stream:</p>
                        <p className="text-gray-600">{student.stream}</p>
                    </div>
                    <div>
                        <p className="font-semibold text-gray-800">CGPA:</p>
                        <p className="text-gray-600">{student.cgpa}</p>
                    </div>
                </div>
            </div>
            <div>
                <h2 className="text-xl font-semibold mb-4 text-indigo-500">Application Information</h2>
                {application ? (
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <p className="font-semibold text-gray-800">Application ID:</p>
                            <p className="text-gray-600">{application._id}</p>
                        </div>
                        <div>
                            <p className="font-semibold text-gray-800">Status:</p>
                            <p className="text-gray-600">{application.status}</p>
                        </div>
                        <div>
                            <p className="font-semibold text-gray-800">Position Applied:</p>
                            <p className="text-gray-600">{application.position}</p>
                        </div>
                        <div>
                            <p className="font-semibold text-gray-800">Company:</p>
                            <p className="text-gray-600">{application.company}</p>
                        </div>
                        <div>
                            <p className="font-semibold text-gray-800">Date Applied:</p>
                            <p className="text-gray-600">{new Date(application.dateApplied).toLocaleDateString()}</p>
                        </div>
                    </div>
                ) : (
                    <p className="text-gray-500">No application found.</p>
                )}
            </div>
        </div>
    );
};

export default MyApplication;
