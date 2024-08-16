import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

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

    const [formData, setFormData] = useState(initialFormData);
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

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

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validate()) {
            axios.post('http://localhost:4000/register-student', formData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(res => {
                console.log('Response:', res.data);
                navigate('/student-login', { replace: true });
                setFormData(initialFormData);
            })
            .catch(error => {
                console.log('Error:', error);
            });
        }
    };

    const handleButtonClick = () => {
        navigate('/student-login', { replace: true });
    };

    return (
        <div className='min-h-screen flex flex-col'>
            <Header />
            <main className='flex-grow container mx-auto px-4 py-8'>
                <h1 className='text-3xl font-bold text-center mb-8'>Student Register Page</h1>
                <form onSubmit={handleSubmit} className='max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md'>
                    <div className='mb-4'>
                        <label className='block text-lg font-medium text-gray-700'>
                            First Name:
                            <input
                                type='text'
                                name='firstname'
                                value={formData.firstname}
                                onChange={handleChange}
                                className='mt-1 block w-full border-2 border-gray-300 bg-white text-gray-900 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50'
                            />
                        </label>
                        {errors.firstname && <p className='text-red-500 text-sm'>{errors.firstname}</p>}
                    </div>

                    <div className='mb-4'>
                        <label className='block text-lg font-medium text-gray-700'>
                            Last Name:
                            <input
                                type='text'
                                name='lastname'
                                value={formData.lastname}
                                onChange={handleChange}
                                className='mt-1 block w-full border-2 border-gray-300 bg-white text-gray-900 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50'
                            />
                        </label>
                        {errors.lastname && <p className='text-red-500 text-sm'>{errors.lastname}</p>}
                    </div>

                    <div className='mb-4'>
                        <label className='block text-lg font-medium text-gray-700'>
                            Email:
                            <input
                                type='email'
                                name='email'
                                value={formData.email}
                                onChange={handleChange}
                                className='mt-1 block w-full border-2 border-gray-300 bg-white text-gray-900 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50'
                            />
                        </label>
                        {errors.email && <p className='text-red-500 text-sm'>{errors.email}</p>}
                    </div>

                    <div className='mb-4'>
                        <label className='block text-lg font-medium text-gray-700'>
                            Password:
                            <input
                                type='password'
                                name='password'
                                value={formData.password}
                                onChange={handleChange}
                                className='mt-1 block w-full border-2 border-gray-300 bg-white text-gray-900 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50'
                            />
                        </label>
                        {errors.password && <p className='text-red-500 text-sm'>{errors.password}</p>}
                    </div>

                    <div className='mb-4'>
                        <label className='block text-lg font-medium text-gray-700'>
                            Confirm Password:
                            <input
                                type='password'
                                name='confirmPassword'
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                className='mt-1 block w-full border-2 border-gray-300 bg-white text-gray-900 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50'
                            />
                        </label>
                        {errors.confirmPassword && <p className='text-red-500 text-sm'>{errors.confirmPassword}</p>}
                    </div>

                    <div className='mb-4'>
                        <label className='block text-lg font-medium text-gray-700'>
                            Bachelor College Name:
                            <input
                                type='text'
                                name='bachelorCollege'
                                value={formData.bachelorCollege}
                                onChange={handleChange}
                                className='mt-1 block w-full border-2 border-gray-300 bg-white text-gray-900 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50'
                            />
                        </label>
                        {errors.bachelorCollege && <p className='text-red-500 text-sm'>{errors.bachelorCollege}</p>}
                    </div>

                    <div className='mb-4'>
                        <label className='block text-lg font-medium text-gray-700'>
                            Graduation College Name:
                            <input
                                type='text'
                                name='graduationCollege'
                                value={formData.graduationCollege}
                                onChange={handleChange}
                                className='mt-1 block w-full border-2 border-gray-300 bg-white text-gray-900 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50'
                            />
                        </label>
                        {errors.graduationCollege && <p className='text-red-500 text-sm'>{errors.graduationCollege}</p>}
                    </div>

                    <div className='mb-4'>
                        <label className='block text-lg font-medium text-gray-700'>
                            Stream:
                            <select
                                name='stream'
                                value={formData.stream}
                                onChange={handleChange}
                                className='mt-1 block w-full border-2 border-gray-300 bg-white text-gray-900 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50'
                            >
                                <option value=''>Select a stream</option>
                                <option value="Bachelor's Computer Application">Bachelor's Computer Science</option>
                                <option value="Bachelor's Business Administration (BBA)">Bachelor's Business Administration</option>
                                <option value="Bachelor's Computer Science">Bachelor's Computer Science</option>
                                <option value="Bachelor's Electrical Engineering">Bachelor's Electrical Engineering</option>
                                <option value="Bachelor's Mechanical Engineering">Bachelor's Mechanical Engineering</option>
                                <option value="Bachelor's Civil Engineering">Bachelor's Civil Engineering</option>
                                <option value="Bachelor's Chemical Engineering">Bachelor's Chemical Engineering</option>
                                <option value="Master's Computer Application">Master's Computer Application</option>
                                <option value="Master's Computer Science">Master's Computer Science</option>
                                <option value="Master's Electrical Engineering">Master's Electrical Engineering</option>
                                <option value="Master's Mechanical Engineering">Master's Mechanical Engineering</option>
                                <option value="Master's Civil Engineering">Master's Civil Engineering</option>
                                <option value="Master's Chemical Engineering">Master's Chemical Engineering</option>
                                <option value="Master's Business Administration (BBA)">Master's Business Administration</option>
                            </select>
                        </label>
                    </div>

                    <div className='mb-4'>
                        <label className='block text-lg font-medium text-gray-700'>
                            CGPA:
                            <input
                                type='text'
                                name='cgpa'
                                value={formData.cgpa}
                                onChange={handleChange}
                                className='mt-1 block w-full border-2 border-gray-300 bg-white text-gray-900 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50'
                            />
                        </label>
                        {errors.cgpa && <p className='text-red-500 text-sm'>{errors.cgpa}</p>}
                    </div>

                    <button
                        type='submit'
                        className='w-full bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                    >
                        Submit
                    </button>
                </form>
                <div className='text-center mt-4'>
                    <button
                        onClick={handleButtonClick}
                        className='bg-gray-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500'
                    >
                        Already Registered? Login
                    </button>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Register;
