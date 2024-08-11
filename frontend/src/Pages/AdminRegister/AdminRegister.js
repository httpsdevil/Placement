import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const AdminRegister = () => {

  const [initialFormData, setinitialFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  })

  {/* yaha form data me jo names like hai field ke woh input field ke name attribute me same hona chahiye */}
  const [formData, setformData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  })

  const dataPost = async () => {
    try {
      const response = await axios.post("http://localhost:4000/register-admin", formData, {
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
    if (!formData.email) newErrors.email = 'Email name is required.';
    if (!formData.password) newErrors.password = 'Password is required.';
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords must match.';

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

  return (
    <div>
      <h1>Admin Registeration</h1>
      <form onSubmit={handleSubmit}>
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

        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default AdminRegister
