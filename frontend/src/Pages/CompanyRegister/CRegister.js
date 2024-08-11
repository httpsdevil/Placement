import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import './CRegister.css'

const CRegister = () => {

  const [initialFormData, setinitialFormData] = useState({
    fullname: '',
    password: '',
    confirmPassword: '',
    designation: '',
    email: '',
    contactNumber: '',
    website: '',
    city: '',
    aboutRole: '',
  })

  {/* yaha form data me jo names like hai field ke woh input field ke name attribute me same hona chahiye */}
  const [formData, setformData] = useState({
    fullname: '',
    password: '',
    confirmPassword: '',
    designation: '',
    email: '',
    contactNumber: '',
    website: '',
    city: '',
    aboutRole: '',
  })

  const dataPost = async () => {
    try {
      const response = await axios.post("http://localhost:4000/register-company", formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      console.log("Response from backend :", response.data);
      setformData(initialFormData);
    }
    catch (err) {
      console.log(`Error mili hai: ${err}`)
    }

  }


  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setformData({
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
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form Submitted :", formData)
      dataPost();
    }
    else {
      console.log("error hai")
    }
  }

  const naviagte = useNavigate();

  const handleButtonClick = ()=>{
    naviagte('/company-login', {replace: true})
  }

  return (
    <div>
      <h1>Company Registeration</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Full Name :
            <input
              type="text" 
              name='fullname'                             
              value={formData.fullname}
              onChange={handleChange} />
          </label>
          {errors.fullname && <p>{errors.fullname}</p>}
        </div>

        <div>
          <label>
            Password :
            <input
              type="password"
              name='password'
              value={formData.password}
              onChange={handleChange} />
          </label>
          {errors.password && <p>{errors.password}</p>}
        </div>

        <div>
          <label>
            Confirm Password :
            <input
              type="password"
              name='confirmPassword'
              value={formData.confirmPassword}
              onChange={handleChange} />
          </label>
          {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
        </div>

        <div>
          <label>
            Designation
            <input
              type="text"
              name='designation'
              value={formData.designation}
              onChange={handleChange} />
          </label>
          {errors.designation && <p>{errors.designation}</p>}
        </div>

        <div>
          <label>
            Email :
            <input
              type="email"
              name='email'
              value={formData.email}
              onChange={handleChange} />
          </label>
          {errors.email && <p>{errors.email}</p>}
        </div>

        <div>
          <label>
            Contact Number :
            <input
              type="tel"
              name='contactNumber'
              value={formData.contactNumber}
              onChange={handleChange} />
          </label>
          {errors.contactNumber && <p>{errors.contactNumber}</p>}
        </div>

        <div>
          <label>
            Website :
            <input
              type="url"
              name='website'
              value={formData.website}
              onChange={handleChange} />
          </label>
          {errors.website && <p>{errors.website}</p>}
        </div>

        <div>
          <label>Select Your State:
            <select id="state" name="state">
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
          <label>
            City :
            <input
              type="text"
              name='city'
              value={formData.city}
              onChange={handleChange} />
          </label>
          {errors.city && <p>{errors.city}</p>}
        </div>

        <div>
          <label>
            About Role :<br />
            <textarea
              id="message"
              name="aboutRole"
              value={formData.aboutRole}
              onChange={handleChange}
              rows="4"
              cols="50"
              placeholder="Enter description for role here..." />
            <br />
            {errors.aboutRole && <p>{errors.aboutRole}</p>}
          </label>
        </div>

        <button type='submit'>Submit</button>
      </form>
      <div>
        <button onClick={handleButtonClick}>Already Register? Login</button>
      </div>
    </div>
  )
}

export default CRegister
