import React from 'react'
import './Footer.css'
import insta from '../../assets/Images/insta.png';
import twit from '../../assets/Images/twit.jpg';

const Footer = () => {
  return (
    <>
      <div id='main'>
        <div id='copyright'>
          <p>2024 © Copyright <span>SCSIT</span>. All Rights Reserved</p>
          <span id='tg'>SCSIT-PLACEMENT CELL</span>
        </div>
        <div id='social-logo'>
          {/* target blank new tab kholega, and rel jo hai wh security measures ka kuch hai when using target blank */}
          <a href="https://www.instagram.com/"  target="_blank"  rel="noopener noreferrer"><img src={insta} alt="logo" /></a>     
          <a href="https://x.com/?lang=en"  target="_blank"  rel="noopener noreferrer"><img src={twit} alt="logo" /></a>
        </div>
      </div>
    </>
  )
}

export default Footer
