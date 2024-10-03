// src/Components/Home.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'; 
const Home = () => {
  const navigate = useNavigate();

  const goToCalendar = () => {
    navigate('/calendar'); // Redirect to Calendar page
  };

  const goToPlayGround = () => {
    navigate('/playground'); // Redirect to playground page
  };
  return (
    <div className="home-container">
      <h1>Welcome to Evently</h1>
      <p>
        At Evently, we help you organize and manage your events seamlessly. 
        Stay up to date with your schedules and never miss an important event!
      </p>

      <h2>Contact Information</h2>
      <p><strong>Email:</strong> support@evently.com</p>
      <p><strong>Phone:</strong> +1 123-456-7890</p>
      <p><strong>Address:</strong> 123 Evently St., Event City, EV 12345</p>

      <button className="go-to-calendar-btn" onClick={goToCalendar}>
        View Calendar
      </button>
      <br />
      <button className='play-btn' onClick={goToPlayGround}>Playground</button>
    </div>
  );
};

export default Home;
