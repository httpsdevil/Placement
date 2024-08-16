import React, { useState, useEffect } from 'react';
import HeaderSecond from '../../Components/HeaderSecond/HeaderSecond';
import Footer from '../../Components/Footer/Footer';
import EditProfile from '../../Components/StudentData/EditProfile/EditProfile';
import MyApplication from '../../Components/StudentData/MyApplication/MyApplication';
import ActiveDrive from '../../Components/StudentData/ActiveDrive/ActiveDrive';
import CoordinatorsInfo from '../../Components/StudentData/CoordinatorsInfo/CoordinatorsInfo';
import axios from 'axios';

const StudentDashboard = () => {
  const [selectedSection, setSelectedSection] = useState('editProfile');
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const fetchUserName = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/student/application', {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        });
        setUserName(response.data.first_name); // Assuming userName is first_name
      } catch (error) {
        console.error('Error fetching user name:', error);
      }
    };

    fetchUserName();
  }, []);

  const renderSection = () => {
    switch (selectedSection) {
      case 'editProfile':
        return <EditProfile />;
      case 'myApplication':
        return <MyApplication />;
      case 'activeDrive':
        return <ActiveDrive />;
      case 'coordinatorsInfo':
        return <CoordinatorsInfo />;
      default:
        return <EditProfile />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <HeaderSecond />
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-800 text-white p-4">
          <div className="mb-4">
            <p className="text-lg font-semibold">Welcome, {userName}!</p>
          </div>
          <ul>
            <li
              className="cursor-pointer hover:bg-gray-700 p-2 rounded"
              onClick={() => setSelectedSection('editProfile')}
            >
              <i className="icon-edit-profile mr-2"></i> Edit Profile
            </li>
            <li
              className="cursor-pointer hover:bg-gray-700 p-2 rounded"
              onClick={() => setSelectedSection('myApplication')}
            >
              <i className="icon-my-application mr-2"></i> My Application
            </li>
            <li
              className="cursor-pointer hover:bg-gray-700 p-2 rounded"
              onClick={() => setSelectedSection('activeDrive')}
            >
              <i className="icon-active-drive mr-2"></i> Active Drive
            </li>
            <li
              className="cursor-pointer hover:bg-gray-700 p-2 rounded"
              onClick={() => setSelectedSection('coordinatorsInfo')}
            >
              <i className="icon-coordinators-info mr-2"></i> Coordinators Info
            </li>
          </ul>
        </aside>
        {/* Main Content */}
        <main className="flex-1 p-6 bg-gray-100">
          {renderSection()}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default StudentDashboard;
