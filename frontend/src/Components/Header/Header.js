import React from 'react'
import logo from '../../assets/Images/logo.jpg';
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className="bg-gray-800 p-4">
            <div className="flex items-center justify-between">
                <img src={logo} alt="logo" className="h-10" />

                <div className="flex space-x-4">
                    <Link to="/" className="text-white hover:text-gray-400">Home</Link>

                    <div className="relative">
                        <Link to="/login" className="text-white hover:text-gray-400 flex items-center">
                            Login
                            <i className="bi bi-chevron-down text-white ml-2"></i>
                        </Link>
                        <ul className="absolute hidden mt-2 bg-gray-700 text-white rounded-lg shadow-lg group-hover:block">
                            <li><Link to="/admin-login" className="block px-4 py-2 hover:bg-gray-600">Admin Login</Link></li>
                            <li><Link to="/student-login" className="block px-4 py-2 hover:bg-gray-600">Student Login</Link></li>
                            <li><Link to="/company-login" className="block px-4 py-2 hover:bg-gray-600">Company Login</Link></li>
                        </ul>
                    </div>

                    <div className="relative">
                        <Link to="/register" className="text-white hover:text-gray-400 flex items-center">
                            Register
                            <i className="bi bi-chevron-down text-white ml-2"></i>
                        </Link>
                        <ul className="absolute hidden mt-2 bg-gray-700 text-white rounded-lg shadow-lg group-hover:block">
                            <li><Link to="/register-student" className="block px-4 py-2 hover:bg-gray-600">Student</Link></li>
                            <li><Link to="/register-company" className="block px-4 py-2 hover:bg-gray-600">Company</Link></li>
                        </ul>
                    </div>

                    <Link to="/contact" className="text-white hover:text-gray-400">Contact</Link>
                </div>

                <div>
                    <Link to="/FAQ" className="text-white hover:text-gray-400">FAQ</Link>
                </div>
            </div>
        </div>
    )
}

export default Header
