import React from 'react';
import logo from '../../assets/Images/logo.jpg';
import { useNavigate, Link } from 'react-router-dom';
import './HeaderSecond.css'; // Make sure to update this if you're moving to Tailwind CSS

const HeaderSecond = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <div className="bg-gray-800 text-white p-4">
      <div className="flex items-center justify-between">
        <img src={logo} alt="logo" className="w-24 h-auto" />
        <div className="flex space-x-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/login" className="hover:underline">Login</Link>
          <Link to="/register" className="hover:underline">Register</Link>
          <button 
            onClick={handleLogout} 
            className="bg-red-500 px-4 py-2 rounded hover:bg-red-700"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeaderSecond;


