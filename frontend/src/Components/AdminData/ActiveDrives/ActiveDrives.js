import React, { useEffect, useState } from 'react';

const ActiveDrives = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/active-drives');
        const data = await response.json();
        setCompanies(data);
      } catch (error) {
        console.error('Failed to fetch companies:', error);
      }
    };

    fetchCompanies();
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Active Drives</h1>
      <ol className="space-y-4">
        {companies.map((company) => (
          <li key={company._id} className="bg-white p-4 rounded-lg shadow-md">
            <div className="mb-2">
              <strong className="font-semibold">Drive Name:</strong> <span>{company.full_name}</span>
            </div>
            {company.createdAt && (
              <div className="mb-2">
                <strong className="font-semibold">Date Created:</strong> <span>{new Date(company.createdAt).toLocaleDateString()}</span>
              </div>
            )}
            <div className="mb-2">
              <strong className="font-semibold">Role:</strong> <span>{company.role}</span>
            </div>
            <div className="mb-2">
              <strong className="font-semibold">Designation:</strong> <span>{company.designation}</span>
            </div>
            <div className="mb-2">
              <strong className="font-semibold">Email:</strong> <span>{company.email}</span>
            </div>
            <div className="mb-2">
              <strong className="font-semibold">Contact Number:</strong> <span>{company.contact_number}</span>
            </div>
            <div className="mb-2">
              <strong className="font-semibold">Website:</strong> <span>{company.website}</span>
            </div>
            <div className="mb-2">
              <strong className="font-semibold">City:</strong> <span>{company.city}</span>
            </div>
            <div className="mb-2">
              <strong className="font-semibold">About Role:</strong> <span>{company.about_role}</span>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default ActiveDrives;
