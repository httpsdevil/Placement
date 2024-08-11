import React from 'react'
// import { useNavigate } from 'react-router-dom' 
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer';
import Student from '../../assets/Images/Student.jpg';
import Company from '../../assets/Images/Company.jpg';
// import Admin from '../../assets/Images/Admin.jpg';

const RegisterPage = () => {
    // const navigate = useNavigate();

    // const handleButtonClick1 = ()=>{
    //     navigate('/register-student', {replace : true})
    // }

    // const handleButtonClick2 = ()=>{
    //     navigate('/register-company', {replace : true})
    // }
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
                       <a href="register-student"> Register</a>
                    </button>


                </div>

                <div id='company' className='tg'>
                    <a><img src={Company} alt="Company-logo" /></a>
                    <div>
                        <p>Company?</p>
                        <p>Companies can login using their credentials. New company can register.</p>
                    </div>
                    <button>
                        <a href="/register-company">Register</a>
                    </button>
                </div>

            </div>

            <Footer />
        </div>
    )
}

export default RegisterPage
