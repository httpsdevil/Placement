import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import HeaderSecond from '../../Components/HeaderSecond/HeaderSecond'
import Footer from '../../Components/Footer/Footer'
import './AdminLogin.css'

const AdminLogin = () => {
  const [loginData, setloginData] = useState({
    email: "",
    password: ""
  })

  const [error, setError] = useState(""); // State to manage error messages

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setloginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send a request to your authentication server
      const response = await fetch('http://localhost:4000/admin-login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });

      const result = await response.json();

      console.log("Response mila hai :", response);

      if (response.ok) {
        // Save the token received from the server
        const { token } = result;
        localStorage.setItem('token', token); // Store token in localStorage
        console.log('Login successful, token saved');

        // On success, redirect to the dashboard
        navigate('/admin-dashboard');
      } else {
        // On failure, show an error message
        setError(result.message || 'Login failed. Please try again.');
      }
    } catch (error) {
      // Handle network errors
      setError('An unexpected error occurred. Please try again.');
    }
  };


  return (
    <div>
      <HeaderSecond />
      <div className='tg-15'>
        <h1>Admin Login</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              Email :
              <input
                type="email"
                name="email"
                value={loginData.email}
                onChange={handleChange}
                placeholder='Email'
                required />
            </label>
          </div>

          <div>
            <label>
              Password :
              <input
                type="password"
                name="password"
                value={loginData.password}
                onChange={handleChange}
                placeholder='password'
                required />
            </label>
          </div>
          {error && <p style={{ color: 'red' }}>{error}</p>}

          <button type='submit'>
            Submit
          </button>
        </form>
      </div>

      <Footer />

    </div>
  )
}

export default AdminLogin
