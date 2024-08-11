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
          <a href="/"><img src={insta} alt="logo" /></a>
          <a href="/"><img src={twit} alt="logo" /></a>
        </div>
      </div>
    </>
  )
}

export default Footer
