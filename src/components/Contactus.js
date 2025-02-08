import React from 'react';
import './../style/contact.css';
import Footer from './Footer';
import  { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

function Contactus() {
   useEffect(() => {
                  AOS.init({
                    duration: 1000,
                    once: false, 
                  });
                }, []);
  return (
    <div>
       <div className='about-header-container' data-aos='zoom-out'>
      <header className='about-header' >
      <h1>contact us</h1>
     <p>don't hesitate to reach us?</p>
      </header>
      </div>
      <div className="contact-container"  data-aos='fade-up'>
      <h2>Contact Us</h2>
      <p>We’d love to hear from you! Feel free to reach out using the form below or through our contact details.</p>
      
      <div className="contact-details">
        <div className="contact-item">
          <i className="fas fa-phone-alt"></i>
          <span>+1 (123) 456-7890</span>
        </div>
        <div className="contact-item">
          <i className="fas fa-envelope"></i>
          <span>info@gymwebsite.com</span>
        </div>
        <div className="contact-item">
          <i className="fas fa-map-marker-alt"></i>
          <span>123 Fitness Street, Fitville</span>
        </div>
      </div>

      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Your Name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Your Email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" placeholder="Your Message" rows="5" required></textarea>
        </div>
        <button type="submit" className="submit-button">Send Message</button>
      </form>
    </div>
    <Footer />
    </div>
    
  );
}

export default Contactus;
