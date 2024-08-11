import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const StudentLogin = () => {
  const [loginData, setloginData] = useState({
    email: "",
    password: ""
  });

  const [error, setError] = useState(""); // State to manage error messages

  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    const { name, value } = e.target;
    setloginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send a request to your authentication server
      const response = await fetch('http://localhost:4000/student-login', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });

      const result = await response.json();

      console.log("Response mila hai :",response);

      if (response.ok) {
        // Save the token received from the server
        const { token } = result;
        localStorage.setItem('token', token); // Store token in localStorage
        console.log('Login successful, token saved');

        // On success, redirect to the dashboard
        navigate('/student-dashboard');
      } else {
        // On failure, show an error message
        setError(result.message || 'Login failed. Please try again.');
      }
    } catch (error) {
      // Handle network errors
      setError('An unexpected error occurred. Please try again.');
    }
  };



    const handleButtonClick = () => {
        // Navigate to the "/about" route
        navigate('/register-student', { replace: true });     // replace true mtlb woh back back back karne wali problem nahi ayegi
      };


  return (
    <div>
      <h1>Student Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Email:
            <input 
              type="email"
              name="email"
              value={loginData.email}
              placeholder="Email"
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Password:
            <input 
              type="password"
              name="password"
              value={loginData.password}
              placeholder="Password"
              onChange={handleChange}
              required
            />
          </label>
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Submit</button>
      </form>
      <button onClick={handleButtonClick}>New Student? Click here to register</button>
    </div>
  );
};

export default StudentLogin;
