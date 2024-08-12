import React from 'react'
import './Header.css'
import logo from '../../assets/Images/logo.jpg';
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='header-container'>
            <div className='header'>

                <img src={logo} alt="logo" className='header-logo' />

                <div className='header-nav'>
                    <li><Link to="/">Home</Link></li>

                    <ul className="dropdown-menu-container">
                        <li className="dropdown">
                            <Link to="/login">Login <i className="bi bi-chevron-down dropdown-indicator"></i></Link>
                            <ul className="dropdown-menu">
                                <li><Link to="/admin-login">Admin Login</Link></li>
                                <li><Link to="/student-login">Student Login</Link></li>
                                <li><Link to="/company-login">Company Login</Link></li>
                            </ul>
                        </li>
                        <li className="dropdown">
                            <Link to="/register">Register <i className="bi bi-chevron-down dropdown-indicator"></i></Link>
                            <ul className="dropdown-menu">
                                <li><Link to="/register-student">Student</Link></li>
                                <li><Link to="/register-company">Company</Link></li>
                            </ul>
                        </li>
                    </ul>

                    <li><Link to="/contact">Contact</Link></li>
                </div>

                <div className='header-faq'>
                    <Link to="/FAQ">FAQ</Link>
                </div>



            </div>
        </div>
    )
}

export default Header
