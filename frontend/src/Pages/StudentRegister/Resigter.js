import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Register.css'


const Register = () => {
    const initialFormData = {
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        confirmPassword: '',
        bachelorCollege: '',
        graduationCollege: '',
        stream: '',
        cgpa: '',
    };


    {/* yaha form data me jo names like hai field ke woh input field ke name attribute me same hona chahiye */ }

    // State for form fields
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        confirmPassword: '',
        bachelorCollege: '',
        graduationCollege: '',
        stream: '',
        cgpa: '',
    });

    const dataPost = async () => {
        try {
            const res = await axios.post('http://localhost:4000/register-student', formData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log('Response:', res.data);
            setFormData(initialFormData);
        } catch (error) {
            console.log('Error:', error);
        }
    };

    // State for error messages
    const [errors, setErrors] = useState({});

    // Handle input changes
    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'file' ? files[0] : value,
        });
    };

    // Validate form fields
    const validate = () => {
        const newErrors = {};
        if (!formData.firstname) newErrors.firstname = 'First name is required.';
        if (!formData.lastname) newErrors.lastname = 'Last name is required.';
        if (!formData.email) newErrors.email = 'Email is required.';
        if (!formData.password) newErrors.password = 'Password is required.';
        if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords must match.';
        if (!formData.bachelorCollege) newErrors.bachelorCollege = 'Bachelor College name is required.';
        if (!formData.graduationCollege) newErrors.graduationCollege = 'Graduation College name is required.';
        if (!formData.cgpa) newErrors.cgpa = 'CGPA is required.';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        if (validate()) {
            // Handle form submission logic here
            console.log('Form submitted:', formData);
            // For example, send the data to a server or API
            dataPost();
        }
    };

    const navigate = useNavigate();

    const handleButtonClick = () => {
        // Navigate to the "/about" route
        navigate('/student-login', { replace: true });    // replace true mtlb woh back back back karne wali problem nahi ayegi
      };
    

    return (
        <div className='firstDiv'>
            <h1>Student Register Page</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        First Name:
                        <input
                            type="text"
                            name="firstname"
                            value={formData.firstname}
                            onChange={handleChange}
                        />
                    </label>
                    {errors.firstname && <p>{errors.firstname}</p>}
                </div>

                <div>
                    <label>
                        Last Name:
                        <input
                            type="text"
                            name="lastname"
                            value={formData.lastname}
                            onChange={handleChange}
                        />
                    </label>
                    {errors.lastname && <p>{errors.lastname}</p>}
                </div>

                <div>
                    <label>
                        Email:
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </label>
                    {errors.email && <p>{errors.email}</p>}
                </div>

                <div>
                    <label>
                        Password:
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </label>
                    {errors.password && <p>{errors.password}</p>}
                </div>

                <div>
                    <label>
                        Confirm Password:
                        <input
                            type="password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                        />
                    </label>
                    {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
                </div>

                <div>
                    <label>
                        Bachelor College Name:
                        <input
                            type="text"
                            name="bachelorCollege"
                            value={formData.bachelorCollege}
                            onChange={handleChange}
                        />
                    </label>
                    {errors.bachelorCollege && <p>{errors.bachelorCollege}</p>}
                </div>

                <div>
                    <label>
                        Graduation College Name:
                        <input
                            type="text"
                            name="graduationCollege"
                            value={formData.graduationCollege}
                            onChange={handleChange}
                        />
                    </label>
                    {errors.graduationCollege && <p>{errors.graduationCollege}</p>}
                </div>

                <div>
                    <label>
                        Stream:
                        <select
                            name="stream"
                            value={formData.stream}
                            onChange={handleChange}
                        >
                            <option value="">Select a stream</option>
                            <option value="Bachelor's Computer Application">Bachelor's Computer Science</option>
                            <option value="Bachelor's Business Administration (BBA)">Bachelor's Business Administration</option>
                            <option value="Bachelor's Computer Science">Bachelor's Computer Science</option>
                            <option value="Bachelor's Electrical Engineering">Bachelor's Electrical Engineering</option>
                            <option value="Bachelor's Mechanical Engineering">Bachelor's Mechanical Engineering</option>
                            <option value="Bachelor's Civil Engineering">Bachelor's Civil Engineering</option>
                            <option value="Bachelor's Chemical Engineering">Bachelor's Chemical Engineering</option>
                            <option value="Master's Computer Application">Master's Computer Applicatione</option>
                            <option value="Master's Computer Science">Master's Computer Science</option>
                            <option value="Master's Electrical Engineering">Master's Electrical Engineering</option>
                            <option value="Master's Mechanical Engineering">Master's Mechanical Engineering</option>
                            <option value="Master's Civil Engineering">Master's Civil Engineering</option>
                            <option value="Master's Chemical Engineering">Master's Chemical Engineering</option>
                            <option value="Master's Business Administration (BBA)">Master's Business Administration</option>
                        </select>
                    </label>
                </div>

                <div>
                    <label>
                        CGPA:
                        <input
                            type="text"
                            name="cgpa"
                            value={formData.cgpa}
                            onChange={handleChange}
                        />
                    </label>
                    {errors.cgpa && <p>{errors.cgpa}</p>}
                </div>

                <button type="submit">Submit</button>
            </form>
            <div>
        <button onClick={handleButtonClick}>Already Register? Login</button>
      </div>
        </div>
    );
};

export default Register;
