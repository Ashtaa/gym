import React, { useEffect } from 'react'
import homeimage from './../img/image1.png'
import './../style/home.css'
import { FaFacebook, FaInstagram, FaTelegram, FaTiktok, FaTwitter } from 'react-icons/fa'
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false, 
    });
  }, []);

  return (
    <div  className='home-main-container'>
      <div className='left-right_home-container'>
      <div className='left-home-container' data-aos='fade-up'>
   <h1 className='home-quote'data-aos="zoom-in">STRONGER</h1>
   <h1 className='span' data-aos="zoom-in">EVERYDAY,</h1>
   <h1 className='home-quote'data-aos="zoom-in">FITTER </h1>
<h1 className='span'data-aos="zoom-in"> FOREVER</h1>
   <p>to day is the day don hesitate to join our team,time to wake up</p>
   <button>know more</button><button>schedul</button>
</div>
<div className='right-home-container'>
<img src={homeimage} data-aos="fade-left" />
</div>
      </div>
      <div className='bottome-home'>
      <ul className='ul-home'>
        <li className='home-li'><a><FaInstagram /><h1>instagram</h1></a></li>
        <li className='home-li'><a><FaTelegram /><h1>telegram</h1></a></li>
        <li className='home-li'><a><FaTwitter /><h1>twitter</h1></a></li>
        <li className='home-li'><a><FaFacebook /><h1>facebook</h1></a></li>
        <li className='home-li'><a><FaTiktok /><h1>Tiktok</h1></a></li>
      </ul>
      </div>
    </div>
  )
}

export default Home
