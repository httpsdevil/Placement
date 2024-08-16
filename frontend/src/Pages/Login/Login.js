import React from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import Student from '../../assets/Images/Student.jpg';
import Company from '../../assets/Images/Company.jpg';
import Admin from '../../assets/Images/Admin.jpg';

const Login = () => {
  return (
    <div>
      <Header />

      <main className="py-8 px-4 mx-auto max-w-6xl">
        <div className="flex flex-col gap-8 sm:grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:gap-6 lg:gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center">
            <img src={Student} alt="Student-logo" className="h-48 w-48 mb-4" />
            <div>
              <p className="text-lg font-semibold">Student?</p>
              <p className="text-gray-600 mt-2">
                Students can login using their credentials. New students can register.
              </p>
            </div>
            <a
              href="/student-login"
              className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              Login
            </a>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center">
            <img src={Company} alt="Company-logo" className="h-48 w-48 mb-4" />
            <div>
              <p className="text-lg font-semibold">Company?</p>
              <p className="text-gray-600 mt-2">
                Companies can login using their credentials. New company can register.
              </p>
            </div>
            <a
              href="/company-login"
              className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              Login
            </a>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center">
            <img src={Admin} alt="Admin-logo" className="h-48 w-48 mb-4" />
            <div>
              <p className="text-lg font-semibold">Admin?</p>
              <p className="text-gray-600 mt-2">
                Admin can login using their credentials and manage everything.
              </p>
            </div>
            <a
              href="/admin-login"
              className="mt-4 inline-block bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
            >
              Login &nbsp; ➛
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Login;
