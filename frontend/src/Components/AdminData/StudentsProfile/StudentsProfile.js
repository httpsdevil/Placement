import React, { useEffect, useState } from 'react';
import axios from 'axios';

const StudentsProfile = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const response = await axios.get('http://localhost:4000/api/students');
                setStudents(response.data);
            } catch (error) {
                console.error('Failed to fetch students:', error);
            }
        };

        fetchStudents();
    }, []);

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-2xl font-bold mb-6">Student Profiles</h1>
            <div className="space-y-4">
                {students.map((student) => (
                    <div className="bg-white p-4 rounded-lg shadow-md" key={student._id}>
                        <h2 className="text-xl font-semibold mb-2">{student.first_name} {student.last_name}</h2>
                        <p className="mb-1"><strong className="font-semibold">Email:</strong> {student.email}</p>
                        <p className="mb-1"><strong className="font-semibold">Bachelor College:</strong> {student.bachelor_college}</p>
                        <p className="mb-1"><strong className="font-semibold">Graduation College:</strong> {student.graduation_college}</p>
                        <p className="mb-1"><strong className="font-semibold">Stream:</strong> {student.stream}</p>
                        <p className="mb-1"><strong className="font-semibold">CGPA:</strong> {student.cgpa}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StudentsProfile;
