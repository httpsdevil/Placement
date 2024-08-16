import React, { useEffect } from 'react';
import './Home.css';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import main from '../../assets/Images/main.jpg'
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import ScrollTrigger from 'scrolltrigger';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(MotionPathPlugin);


const Home = () => {
  useEffect(() => {
    gsap.to(".animated-box", {
      duration: 5,
      repeat: -1, // Repeat indefinitely
      yoyo: true, // Reverse the animation every cycle
      motionPath: {
        path: ".motion-path",
        align: ".motion-path",
        alignOrigin: [0.5, 0.5]
      },
      ease: "power1.inOut"
    });
  }, []);

  // for image effect
  useEffect(() => {
    // Delay the animation slightly to ensure the elements are rendered
    const timer = setTimeout(() => {
      gsap.from('#hero-text img', {
        x: -100,
        duration: 1,
        opacity: 0,
        ease: 'back.out(1.8)'
      });
    }, 100); // 100ms delay to ensure DOM is updated

    return () => clearTimeout(timer); // Clean up the timer if the component unmounts
  })

  // for text effect
  useEffect(() => {
    // Delay the animation slightly to ensure the elements are rendered
    const timer = setTimeout(() => {
      gsap.from('#hero-text div', {
        x: 100,
        duration: 1,
        // repeat : -1,
        // yoyo : true
        opacity: 0,
        // stagger: 0.5 
        // scale : 2
        ease: 'back.out(1.8)'
      });
    }, 100); // 100ms delay to ensure DOM is updated

    return () => clearTimeout(timer); // Clean up the timer if the component unmounts
  })

  // text revealing effect
  useEffect(() => {
    const timer = setTimeout(() => {
      gsap.fromTo('.text span', {
        opacity: 0,
        y: 20
      }, {
        opacity: 1,
        y: 0,
        duration: 1.5,
        stagger: .3,
        ease: 'power2.out'
      });
    }, 100); // 100ms delay to ensure DOM is updated

    return () => clearTimeout(timer); // Clean up the timer if the component unmounts

  }, []);



  return (
    <div className="homepage-container">
      <Header />


      <div id="hero-text">
        <img src={main} alt="" />
        <div>
          <h1 className="text">
            <span>Welcome </span>
            <span>to </span>
            <span>Placement </span>
            <span>Portal </span>
            <span>Website </span>
          </h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, laudantium! Eum iure beatae pariatur dolor numquam accusamus, est, ducimus officia nostrum molestias distinctio quas voluptates, illum consequatur sed ut magni! Quam quidem iure quibusdam ipsa magni eligendi, quae inventore. Magnam iste a tenetur ipsum ullam tempora quo aspernatur ipsa quis qui velit repellat rerum labore reiciendis facere est eos eaque, maxime ab aut quaerat quidem, fugiat architecto hic? Aut voluptas optio odio. Veniam quos doloremque fugiat provident quas suscipit ipsa placeat, molestias illum consequuntur voluptas iure quibusdam unde et cupiditate delectus? Eaque omnis consequuntur ex recusandae numquam ipsa illum provident?</p>
          <Link to="/login" className="hero-button">Get Started</Link>
        </div>
      </div>


      <section className="animation-section">
        <svg className="path-svg" viewBox="0 0 400 200">
          <path className="motion-path" d="M10,100 Q200,10 390,100 T390,100" fill="transparent" stroke="pink" strokeWidth="20" />
        </svg>
        <div className="animated-box"></div>
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
