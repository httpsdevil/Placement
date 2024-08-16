import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

const CRegister = () => {

  const [initialFormData, setInitialFormData] = useState({
    fullname: '',
    password: '',
    confirmPassword: '',
    designation: '',
    email: '',
    contactNumber: '',
    website: '',
    city: '',
    aboutRole: '',
  });

  const [formData, setFormData] = useState(initialFormData);

  const navigate = useNavigate();

  const dataPost = async () => {
    try {
      const response = await axios.post("http://localhost:4000/register-company", formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log("Response from backend:", response.data);
      navigate('/company-login', { replace: true });
      setFormData(initialFormData);
    } catch (err) {
      console.log(`Error: ${err}`);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'file' ? files[0] : value,
    });
  };

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.fullname) newErrors.fullname = 'Full name is required.';
    if (!formData.password) newErrors.password = 'Password is required.';
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords must match.';
    if (!formData.designation) newErrors.designation = 'Designation is required.';
    if (!formData.email) newErrors.email = 'Email is required.';
    if (!formData.contactNumber) newErrors.contactNumber = 'Contact number is required.';
    if (!formData.website) newErrors.website = 'Website is required.';
    if (!formData.city) newErrors.city = 'City is required.';
    if (!formData.aboutRole) newErrors.aboutRole = 'About Role is required.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form Submitted:", formData);
      dataPost();
    } else {
      console.log("Validation error");
    }
  };

  const handleButtonClick = () => {
    navigate('/company-login', { replace: true });
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Header />

      <div className="container mx-auto p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6">Company Registration</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 mb-2">
              Full Name:
              <input
                type="text"
                name="fullname"
                value={formData.fullname}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            </label>
            {errors.fullname && <p className="text-red-500 text-sm">{errors.fullname}</p>}
          </div>

          <div>
            <label className="block text-gray-700 mb-2">
              Password:
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            </label>
            {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
          </div>

          <div>
            <label className="block text-gray-700 mb-2">
              Confirm Password:
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            </label>
            {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
          </div>

          <div>
            <label className="block text-gray-700 mb-2">
              Designation:
              <input
                type="text"
                name="designation"
                value={formData.designation}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            </label>
            {errors.designation && <p className="text-red-500 text-sm">{errors.designation}</p>}
          </div>

          <div>
            <label className="block text-gray-700 mb-2">
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            </label>
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          <div>
            <label className="block text-gray-700 mb-2">
              Contact Number:
              <input
                type="tel"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            </label>
            {errors.contactNumber && <p className="text-red-500 text-sm">{errors.contactNumber}</p>}
          </div>

          <div>
            <label className="block text-gray-700 mb-2">
              Website:
              <input
                type="url"
                name="website"
                value={formData.website}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            </label>
            {errors.website && <p className="text-red-500 text-sm">{errors.website}</p>}
          </div>

          <div>
            <label className="block text-gray-700 mb-2">
              Select Your State:
              <select
                id="state"
                name="state"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="">--Please choose a state--</option>
                <option value="Andhra Pradesh">Andhra Pradesh</option>
                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                <option value="Assam">Assam</option>
                <option value="Bihar">Bihar</option>
                <option value="Chhattisgarh">Chhattisgarh</option>
                <option value="Goa">Goa</option>
                <option value="Gujarat">Gujarat</option>
                <option value="Haryana">Haryana</option>
                <option value="Himachal Pradesh">Himachal Pradesh</option>
                <option value="Jharkhand">Jharkhand</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Kerala">Kerala</option>
                <option value="Madhya Pradesh">Madhya Pradesh</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Manipur">Manipur</option>
                <option value="Meghalaya">Meghalaya</option>
                <option value="Mizoram">Mizoram</option>
                <option value="Nagaland">Nagaland</option>
                <option value="Odisha">Odisha</option>
                <option value="Punjab">Punjab</option>
                <option value="Rajasthan">Rajasthan</option>
                <option value="Sikkim">Sikkim</option>
                <option value="Tamil Nadu">Tamil Nadu</option>
                <option value="Telangana">Telangana</option>
                <option value="Tripura">Tripura</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
                <option value="Uttarakhand">Uttarakhand</option>
                <option value="West Bengal">West Bengal</option>
              </select>
            </label>
          </div>

          <div>
            <label className="block text-gray-700 mb-2">
              City:
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
            </label>
            {errors.city && <p className="text-red-500 text-sm">{errors.city}</p>}
          </div>

          <div>
            <label className="block text-gray-700 mb-2">
              About Role:
              <textarea
                id="message"
                name="aboutRole"
                value={formData.aboutRole}
                onChange={handleChange}
                rows="4"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                placeholder="Enter description for role here..."
              />
            </label>
            {errors.aboutRole && <p className="text-red-500 text-sm">{errors.aboutRole}</p>}
          </div>

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
            Already Registered? Login
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CRegister;
