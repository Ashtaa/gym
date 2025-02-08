import React from 'react';
import './../style/schedul.css';
import Footer from './Footer';
import  { useEffect } from 'react'

import AOS from "aos";
import "aos/dist/aos.css";

function Schedule() {
    useEffect(() => {
            AOS.init({
              duration: 1000,
              once: false, 
            });
          }, []);
  const schedule = [
    { day: 'Monday', activities: ['Yoga - 8:00 AM', 'HIIT - 10:00 AM', 'Zumba - 6:00 PM'] },
    { day: 'Tuesday', activities: ['Pilates - 8:00 AM', 'Boxing - 10:00 AM', 'CrossFit - 6:00 PM'] },
    { day: 'Wednesday', activities: ['Cardio - 8:00 AM', 'Strength Training - 10:00 AM', 'Dance Fit - 6:00 PM'] },
    { day: 'Thursday', activities: ['Yoga - 8:00 AM', 'Cycling - 10:00 AM', 'Bootcamp - 6:00 PM'] },
    { day: 'Friday', activities: ['Pilates - 8:00 AM', 'Boxing - 10:00 AM', 'Aerobics - 6:00 PM'] },
    { day: 'Saturday', activities: ['Open Gym - All Day'] },
    { day: 'Sunday', activities: ['Rest Day'] },
  ];

  return (
    <div>
        <div className='about-header-container' data-aos='zoom-out'>
      <header className='about-header' >
      <h1>SCHEDULE</h1>
     <p>you need help for the schedule?</p>
      </header>
      </div>
        <div className="schedule-container" data-aos='fade-left'>
      <h2>Gym Schedule</h2>
      <table className="gym-schedule">
        <thead>
          <tr>
            <th>Day</th>
            <th>Activities</th>
          </tr>
        </thead>
        <tbody>
          {schedule.map((entry, index) => (
            <tr key={index}>
              <td>{entry.day}</td>
              <td>
                <ul>
                  {entry.activities.map((activity, idx) => (
                    <li key={idx}>{activity}</li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <Footer />
    </div>
  );
}

export default Schedule;
