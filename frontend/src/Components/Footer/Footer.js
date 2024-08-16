import React from 'react';
import insta from '../../assets/Images/insta.png';
import twit from '../../assets/Images/twit.jpg';

const Footer = () => {
  return (
    <footer className="bg-yellow-300 text- black py-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="text-center sm:text-left">
            <p className="mb-2 text-sm sm:text-base">
              2024 © Copyright <span className="font-bold">SCSIT</span>. All Rights Reserved
            </p>
            <span className="block text-lg font-semibold sm:text-xl">
              SCSIT-PLACEMENT CELL
            </span>
          </div>
          <div className="flex gap-4 mt-4 sm:mt-0">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <img src={insta} alt="Instagram logo" className="h-8 w-8"/>
            </a>
            <a
              href="https://x.com/?lang=en"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <img src={twit} alt="Twitter logo" className="h-8 w-8"/>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
