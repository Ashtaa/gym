import React, { useEffect } from 'react'
import './../style/about.css'
import AOS from "aos";
import "aos/dist/aos.css";
import aboutimg from './../img/img3.jpg'
import Footer from './Footer';

function About() {
    useEffect(() => {
        AOS.init({
          duration: 1000,
          once: false, 
        });
      }, []);
  return (
    <div className='about-main-container'>
      <div className='about-header-container' data-aos='zoom-out'>
      <header className='about-header' >
      <h1>About us</h1>
     <p>any thing you need to know about our gym?</p>
      </header>
      </div>
      <div className='about-content-container'>
      <div className='about-content-left' data-aos='fade-left'>
       <h3>Welcome to <span>Our Gym!</span></h3>
       <p>
       At our gym, we are committed to helping you achieve your fitness goals in a supportive and motivating environment. Whether you're a beginner or an experienced athlete, we offer state-of-the-art equipment, expert trainers, and a variety of classes to suit your needs. Our mission is to inspire and empower you to lead a healthier, stronger, and more confident life. Join our community and experience a place where fitness meets fun, and everyone is encouraged to reach their full potential. Your journey to better health starts here—let’s achieve greatness together!</p>
      </div>
      <div className='about-image'>
        <img src={aboutimg} data-aos='fade-right' />
      </div>
      </div>
      <div className='about-bottom-container'>
        <div
        ><h1>150+</h1>
        <p>EQUIPMENTS</p>
        </div>
        <div
        ><h1>10+</h1>
        <p>CERTIFIED TRAINERS</p>
        </div>
        <div
        ><h1>50+</h1>
        <p>SATISFIED MEMBERS</p>
        </div>
        <div
        ><h1>2+</h1>
        <p>YEARS OF EXPIREANCE</p>
        </div>
        </div>
        <Footer />
    </div>
  )
}

export default About
