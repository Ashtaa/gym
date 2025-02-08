import React, { useEffect } from 'react';
import './../style/ourteam.css';
import member1 from'./../img/image1.png'
import member2 from'./../img/trainer (1).jpg'
import member3 from'./../img/trainer (2).jpg'
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from './Footer';

function Ourteam() {
    useEffect(() => {
                AOS.init({
                  duration: 1000,
                  once: false, 
                });
              }, []);
  const teamMembers = [
    { name: 'John Doe', role: 'Fitness Trainer', image: member1 },
    { name: 'Jane Smith', role: 'Yoga Instructor', image: member2 },
    { name: 'Mike Johnson', role: 'Nutritionist', image: member3 },
    { name: 'Emily Davis', role: 'Personal Trainer', image: member1 },
  ];

  return (
   <div>
    <div className='about-header-container' data-aos='zoom-out'>
      <header className='about-header' >
      <h1>OUR TEAM</h1>
     <p>MEET OUR CREAW?</p>
      </header>
      </div>
     <div className="team-container">
      <h2>Meet Our Team</h2>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div className="team-card" key={index} data-aos='zoom-in'>
            <img src={member.image} alt={member.name} className="team-image" />
            <h3 className="team-name">{member.name}</h3>
            <p className="team-role">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
    <Footer />
   </div>
  );
}

export default Ourteam;
