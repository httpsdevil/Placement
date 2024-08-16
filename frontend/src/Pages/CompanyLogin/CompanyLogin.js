import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

const CompanyLogin = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });

  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/register-company', { replace: true });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:4000/company-login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });

      const result = await response.json();

      if (response.ok) {
        const { token } = result;
        localStorage.setItem('token', token);
        navigate('/company-dashboard');
      } else {
        setError(result.message || 'Login failed. Please try again.');
      }
    } catch (error) {
      setError('An unexpected error occurred. Please try again.');
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Header />
      <div className="container mx-auto p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6">Company Login</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 mb-2">
              Email:
              <input
                type="email"
                name="email"
                value={loginData.email}
                onChange={handleChange}
                placeholder="Email"
                required
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            </label>
          </div>
          <div>
            <label className="block text-gray-700 mb-2">
              Password:
              <input
                type="password"
                name="password"
                value={loginData.password}
                onChange={handleChange}
                placeholder="Password"
                required
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            </label>
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
        <div className="mt-4">
          <button
            onClick={handleButtonClick}
            className="text-blue-500 hover:underline"
          >
            New Company? Register Here
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CompanyLogin;
