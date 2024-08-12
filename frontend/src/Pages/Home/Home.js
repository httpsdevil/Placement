import React from 'react';
import './Home.css';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import heroImage from '../../assets/Images/heroImage.jpg'; // Ensure you have a hero image
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <div className="homepage-container">
      <Header />

      <section className="homepage-hero">
        <img src={heroImage} alt="Hero" className="hero-image" />
        <div className="hero-text">
          <h1>Welcome to Placement Portal Website</h1>
          <p>Your gateway to a bright career future. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae corrupti accusantium vel excepturi rerum soluta.</p>
          <Link to="/login" className="hero-button">Get Started</Link>
        </div>
      </section>

      <section id='mainMiddle'>
        <h2>About Us</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae corrupti accusantium vel excepturi rerum soluta, totam a enim provident reiciendis quaerat fuga ipsam, asperiores repellat quisquam illum sapiente fugit! Tempora impedit praesentium fuga, placeat fugiat veritatis natus modi iure optio nostrum id distinctio, dolore consectetur assumenda accusantium cumque hic aperiam eligendi quia, magni aut vel molestias neque! Amet consequuntur similique temporibus sed, porro, cupiditate at, quos facilis labore nemo provident aliquid iste accusantium quibusdam iusto accusamus minima assumenda. Laborum dicta beatae sint neque laboriosam odit eligendi, explicabo quo? Provident, repellendus.</p>
      </section>

      <Footer />
    </div>
  );
}

export default Home;
