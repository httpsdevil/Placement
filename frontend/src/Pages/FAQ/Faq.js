import React from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

const Faq = () => {
  return (
    <div>
      <Header />

      <main className="py-8 px-4 mx-auto max-w-6xl">
        <h1 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h1>
        
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-2">What is this website about?</h2>
            <p className="text-gray-600">
              This website is a placement cell platform designed to connect students, companies, and coordinators. It provides features for registration, login, and profile management.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-2">How do I register?</h2>
            <p className="text-gray-600">
              You can register by clicking on the "Register" link on the homepage and selecting the appropriate registration type (Student or Company).
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-2">How can I contact support?</h2>
            <p className="text-gray-600">
              If you need support, you can contact us through the "Contact" page available in the header menu.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-2">What do I do if I forget my password?</h2>
            <p className="text-gray-600">
              If you forget your password, you can use the "Forgot Password" feature on the login page to reset it.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-2">Where can I find more information?</h2>
            <p className="text-gray-600">
              For more information, please visit the "About" page or contact us through the "Contact" page.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Faq;
