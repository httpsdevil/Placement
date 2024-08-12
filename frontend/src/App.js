import React from 'react';
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Contact from './Pages/Contact/Contact';
import Faq from './Pages/FAQ/Faq';
import Login from './Pages/Login/Login';
import RegisterPage from './Pages/Register/RegisterPage';
import Register from './Pages/StudentRegister/Resigter';
import CRegister from './Pages/CompanyRegister/CRegister';
import StudentLogin from './Pages/StudentLogin/StudentLogin';
import CompanyLogin from './Pages/CompanyLogin/CompanyLogin';
import AdminLogin from './Pages/AdminLogin/AdminLogin';
import StudentDashboard from './Pages/StudentDashboard/StudentDashboard';
import CompanyDashboard from './Pages/CompanyDashboard/CompanyDashboard';
import AdminDashboard from './Pages/AdminDashboard/AdminDashboard';
// import AdminRegister from './Pages/AdminRegister/AdminRegister';         // new admin register karna ho tab use karna

import ProtectedRoute from './PrivateRoute';  // Import ProtectedRoute

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/FAQ' element={<Faq />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/register-student' element={<Register />} />
        <Route path='/register-company' element={<CRegister />} />
        {/* <Route path='/register-admin' element={<AdminRegister />} /> */} // new admin register karna ho tab use karna
        <Route path='/student-login' element={<StudentLogin />} />
        <Route path='/company-login' element={<CompanyLogin />} />
        <Route path='/admin-login' element={<AdminLogin />} />

        {/* Protecting the dashboards */}
        <Route path='/student-dashboard' element={<ProtectedRoute role='student'> <StudentDashboard /> </ProtectedRoute>} />
        <Route path='/company-dashboard' element={<ProtectedRoute role='company'> <CompanyDashboard /> </ProtectedRoute>} />
        <Route path='/admin-dashboard' element={<ProtectedRoute role='admin'> <AdminDashboard /> </ProtectedRoute>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
