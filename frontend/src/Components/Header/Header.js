import React from 'react'
import './Header.css'
import logo from '../../assets/Images/logo.jpg';

const Header = () => {
    return (
        <div>
            <div id='head'>

                <img src={logo} alt="logo" />

                <div id='head-2'>
                    <li><a href="/">Home</a></li>

                    <ul class="dropdown-menu-container">
                        <li class="dropdown">
                            <a href="/login">Login <i class="bi bi-chevron-down dropdown-indicator"></i></a>
                            <ul class="dropdown-menu">
                                <li><a href="/admin-login">Admin Login</a></li>
                                <li><a href="/student-login">Student Login</a></li>
                                <li><a href="/company-login">Company Login</a></li>
                            </ul>
                        </li>
                        <li class="dropdown">
                            <a href="/register">Register <i class="bi bi-chevron-down dropdown-indicator"></i></a>
                            <ul class="dropdown-menu">
                                <li><a href="/register-student">Student</a></li>
                                <li><a href="/register-company">Company</a></li>
                            </ul>
                        </li>
                    </ul>

                    <li><a href="/contact">Contact</a></li>
                </div>

                <div id='head-3'>
                    <a href="/FAQ">FAQ</a>
                </div>

            </div>
        </div>
    )
}

export default Header
