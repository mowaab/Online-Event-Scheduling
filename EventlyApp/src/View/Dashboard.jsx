// src/Components/Dashboard.jsx
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Calender.css';
import Cookies from 'js-cookie';

const Navbar = ({ handleLogout }) => (
  <nav className="navbar">
    <div className="logo">Evently</div>
    <ul className="nav-links">
      <li><Link to="/calender">Calendar</Link></li>
      <li><Link to="/dashboard">Dashboard</Link></li>
      <li><button onClick={handleLogout} className="btnLogOut">Logout</button></li>
    </ul>
  </nav>
);

const Testimonials = () => (
    <section className="testimonials">
      <h2>Our Features</h2>
      <div className="feature-grid">
        <div className="feature-item">
          <h3>Fast Performance</h3>
          <p>Our solutions are optimized for speed and efficiency.</p>
        </div>
        <div className="feature-item">
          <h3>Responsive Design</h3>
          <p>Looks great on all screen sizes from mobile to desktop.</p>
        </div>
        <div className="feature-item">
          <h3>Customizable</h3>
          <p>Fully customizable designs to fit your brand and needs.</p>
        </div>
      </div>
  
      <h2>Contact Information</h2>
      <p><strong>Email:</strong> emotional-support@evently.com</p>
      <p><strong>Phone:</strong> 073 420 69 69</p>
      <p><strong>Address:</strong> 123 Evently St, Event City, EV 12345</p>
    </section>
  );
  
  const Footer = () => (
    <footer>
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Evently. All Rights Reserved.</p>
        <ul className="social-links">
          <li><a href="https://facebook.com">Facebook</a></li>
          <li><a href="https://twitter.com">Twitter</a></li>
          <li><a href="https://instagram.com">Instagram</a></li>
        </ul>
      </div>
    </footer>
  );
  
const Dashboard = () => {
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();
  const userId = localStorage.getItem('userId'); // Get userId

  useEffect(() => {
    const fetchUserAppointments = async () => {
      try {
        const response = await fetch(`http://localhost:5001/api/appointments/${userId}`);
        if (response.ok) {
          const appointments = await response.json();
          setEvents(appointments); 
        } else {
          const errorData = await response.json();
          console.error('Error fetching appointments:', errorData.message);
        }
      } catch (error) {
        console.error('Error fetching appointments:', error);
      }
    };

    if (userId) {
      fetchUserAppointments();
    }
  }, [userId]);

  const handleLogout = () => {
    localStorage.removeItem('userId');
    localStorage.removeItem('token');
    Cookies.remove('userId');
    navigate('/');
  };

  return (
    <div className="dashboard-container">
      <Navbar handleLogout={handleLogout} />
      
      <section className="features">
        <h1>Your Scheduled <strong>Events</strong></h1>
        <div className="events-list">
          {events.length > 0 ? (
            <ul>
              {events.map((event, index) => (
                <li key={index}>
                  <strong>Date:</strong> {event.date.split('T')[0]} <br />
                  <strong>Title:</strong> {event.title} <br />
                  <strong>Description:</strong> {event.description || 'No description'} <br />
                  <strong>Time:</strong> {event.time} <br /> <br />
                </li>
              ))}
            </ul>
          ) : (
            <p>No events scheduled yet.</p>
          )}
        </div>
      </section>
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Dashboard;
