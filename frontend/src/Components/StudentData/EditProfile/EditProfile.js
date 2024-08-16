import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StudentProfile = () => {
    const [profile, setProfile] = useState({
        first_name: '',
        last_name: '',
        bachelor_college: '',
        graduation_college: '',
        stream: '',
        cgpa: ''
    });
    const [editing, setEditing] = useState(false);

    useEffect(() => {
        fetchProfile();
    }, []);

    const fetchProfile = async () => {
        try {
            const response = await axios.get('http://localhost:4000/api/student/application', {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            });
            setProfile(response.data);
        } catch (error) {
            console.error('Error fetching profile:', error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfile({ ...profile, [name]: value });
    };

    const handleSave = async () => {
        try {
            await axios.put('http://localhost:4000/api/student/profile', profile, {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            });
            setEditing(false);
        } catch (error) {
            console.error('Error saving profile:', error);
        }
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
            <h1 className="text-3xl font-bold mb-6">Student Profile</h1>
            <div className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">First Name</label>
                    <input
                        type="text"
                        name="first_name"
                        value={profile.first_name}
                        onChange={handleChange}
                        disabled={!editing}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Last Name</label>
                    <input
                        type="text"
                        name="last_name"
                        value={profile.last_name}
                        onChange={handleChange}
                        disabled={!editing}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Bachelor College</label>
                    <input
                        type="text"
                        name="bachelor_college"
                        value={profile.bachelor_college}
                        onChange={handleChange}
                        disabled={!editing}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Graduation College</label>
                    <input
                        type="text"
                        name="graduation_college"
                        value={profile.graduation_college}
                        onChange={handleChange}
                        disabled={!editing}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Stream</label>
                    <input
                        type="text"
                        name="stream"
                        value={profile.stream}
                        onChange={handleChange}
                        disabled={!editing}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">CGPA</label>
                    <input
                        type="text"
                        name="cgpa"
                        value={profile.cgpa}
                        onChange={handleChange}
                        disabled={!editing}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
                <div className="flex space-x-4 mt-4">
                    <button
                        type="button"
                        onClick={() => setEditing(!editing)}
                        className={`py-2 px-4 rounded-md shadow-sm text-white ${
                            editing ? 'bg-red-500 hover:bg-red-600' : 'bg-blue-500 hover:bg-blue-600'
                        } focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                    >
                        {editing ? 'Cancel' : 'Edit'}
                    </button>
                    {editing && (
                        <button
                            type="button"
                            onClick={handleSave}
                            className="py-2 px-4 bg-green-500 text-white rounded-md shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                        >
                            Save
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default StudentProfile;
