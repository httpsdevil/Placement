import React from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer';
import Button from '../../Components/Button/Button';
import Student from '../../assets/Images/Student.jpg';
import Company from '../../assets/Images/Company.jpg';
import Admin from '../../assets/Images/Admin.jpg';
import './Login.css'

const Login = () => {
  return (
    <div>
      <Header />

      <div id='mainDiv'>

        <div className='tg'>
          <a><img src={Student} alt="Student-logo" /></a>

          <div>
            <p>Student?</p>
            <p>Students can login using their credentials. New students can register.</p>
          </div>

          <button>
            <a href="/student-login">Login</a>
          </button>


        </div>

        <div id='company' className='tg'>
          <a><img src={Company} alt="Company-logo" /></a>
          <div>
            <p>Company?</p>
            <p>Companies can login using their credentials. New company can register.</p>
          </div>
          <button>
            <a href="/company-login">Login</a>
          </button>
        </div>

        <div className='tg'>
          <a><img src={Admin} alt="Admin-logo" /></a>
          <div>
            <p>Admin?</p>
            <p>Admin can login using their credentials. And can manage everything</p>
          </div>
          <button className='btn2'>
            <a href="/admin-login">Login &nbsp; ➛</a>
          </button>
        </div>

      </div>

      <Footer />
    </div>
  )
}

export default Login
