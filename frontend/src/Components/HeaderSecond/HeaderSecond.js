import React from 'react'
import './HeaderSecond.css'
import logo from '../../assets/Images/logo.jpg';
import { Link } from 'react-router-dom'

const HeaderSecond = () => {
    return (
        <div>
            <div className='header'>

                <img src={logo} alt="logo" className='header-logo' />

                <div className='header-nav'>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/student-login">Student-Login</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </div>

                <div className='header-faq'>
                    <Link to="/FAQ">FAQ</Link>
                </div>

            </div>
        </div>
    )
}

export default HeaderSecond
