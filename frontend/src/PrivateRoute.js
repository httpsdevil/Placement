import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, role }) => {
  const token = localStorage.getItem('token');
  const userRole = token ? JSON.parse(atob(token.split('.')[1])).role : null;

  if (!token || userRole !== role) {
    // If the user is not authenticated or doesn't have the right role, redirect to login
    return <Navigate to={`/${role}-login`} replace />;
  }

  return children;
};

export default ProtectedRoute;
