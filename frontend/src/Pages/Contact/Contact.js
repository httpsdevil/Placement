import React from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

const Contact = () => {
  return (
    <div>
      <Header />

      <main className="py-8 px-4 mx-auto max-w-6xl">
        <h1 className="text-3xl font-bold text-center mb-4">Contact Us</h1>
        <p className="text-lg text-center mb-8">
          SCHOOL OF COMPUTER SCIENCE & IT, INDORE.
        </p>

        <div className="relative w-full h-[600px] mb-8">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d939.8663224571429!2d79.0096428850835!3d21.16401912387145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4eb0065509c99%3A0xf40c1b42124dd3f!2sSuman%20Apartment%20-%20ll!5e1!3m2!1sen!2sin!4v1722839259625!5m2!1sen!2sin"
            className="absolute inset-0 w-full h-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
