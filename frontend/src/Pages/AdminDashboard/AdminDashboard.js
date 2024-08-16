import React, { useState } from 'react';
import HeaderSecond from '../../Components/HeaderSecond/HeaderSecond';
import Footer from '../../Components/Footer/Footer';
import Dashboard from '../../Components/AdminData/Dashboard/Dashboard';
import ActiveDrives from '../../Components/AdminData/ActiveDrives/ActiveDrives';
import StudentsProfile from '../../Components/AdminData/StudentsProfile/StudentsProfile';
import Coordinators from '../../Components/AdminData/Coordinators/Coordinators';

const AdminDashboard = () => {
  const [selectedSection, setSelectedSection] = useState('dashboard');

  const renderSection = () => {
    switch (selectedSection) {
      case 'dashboard':
        return <Dashboard />;
      case 'activeDrives':
        return <ActiveDrives />;
      case 'studentsProfile':
        return <StudentsProfile />;
      case 'coordinators':
        return <Coordinators />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <HeaderSecond />
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-800 text-white p-4">
          <ul>
            <li
              className="cursor-pointer hover:bg-gray-700 p-2 rounded"
              onClick={() => setSelectedSection('dashboard')}
            >
              <i className="icon-dashboard mr-2"></i> Dashboard
            </li>
            <li
              className="cursor-pointer hover:bg-gray-700 p-2 rounded"
              onClick={() => setSelectedSection('activeDrives')}
            >
              <i className="icon-active-drives mr-2"></i> Active Drives
            </li>
            <li
              className="cursor-pointer hover:bg-gray-700 p-2 rounded"
              onClick={() => setSelectedSection('studentsProfile')}
            >
              <i className="icon-students-profile mr-2"></i> Students Profile
            </li>
            <li
              className="cursor-pointer hover:bg-gray-700 p-2 rounded"
              onClick={() => setSelectedSection('coordinators')}
            >
              <i className="icon-coordinators mr-2"></i> Co-Ordinators
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

export default AdminDashboard;
