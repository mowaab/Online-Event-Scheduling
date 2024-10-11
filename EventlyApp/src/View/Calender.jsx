import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import './Calender.css';
import Cookies from 'js-cookie';

const Navbar = ({ handleLogout }) => (
  <nav className="navbar">
    <div className="logo">Evently</div>
    <ul className="nav-links">
      <li><Link to="/calender">Calendar</Link></li>
      <li><button onClick={handleLogout} className="btnLogOut">Logout</button></li>
    </ul>
  </nav>
);

const Features = () => {
  const [selectedDate, setSelectedDate] = useState(null); 
  const [events, setEvents] = useState([]);
  const [eventDetails, setEventDetails] = useState({ title: '', description: '', time: '' });
  const navigate = useNavigate();
  const userId = localStorage.getItem('userId'); // Get userId inside the component

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

  const handleAddEvent = async () => {
    if (!selectedDate) {
      alert("Please select a date for the event.");
      return;
    }

    if (!eventDetails.title || !eventDetails.time) {
      alert("Please enter both title and time for the event.");
      return;
    }

    const appointmentData = {
      user: userId,
      title: eventDetails.title,
      date: selectedDate.format('YYYY-MM-DD'),
      time: eventDetails.time,
      description: eventDetails.description,
    };

    try {
      const response = await fetch('http://localhost:5001/api/appointments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify(appointmentData),
      });

      if (response.ok) {
        const savedAppointment = await response.json();
        setEvents([...events, savedAppointment]);
        setEventDetails({ title: '', description: '', time: '' });
      } else {
        const errorData = await response.json();
        alert(errorData.message || 'Failed to save appointment');
      }
    } catch (error) {
      console.error('Error adding event:', error);
      alert('Error adding event');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('userId');
    localStorage.removeItem('token');
    Cookies.remove('userId');
    navigate('/');
  };

  return (
    <section className="features">
      <h1>Welcome to <strong>Evently</strong></h1>
      <br /> <br />
      <div className="container1">

        <br />
        <h2 className="header1">Select a Date</h2>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar 
            value={selectedDate}
            onChange={(newDate) => setSelectedDate(newDate)} 
          />
          <div className="event-form">
            <input
              type="text"
              placeholder="Event Title"
              value={eventDetails.title}
              onChange={(e) => setEventDetails({ ...eventDetails, title: e.target.value })}
            />
            <input
              type="text"
              placeholder="Event Description"
              value={eventDetails.description}
              onChange={(e) => setEventDetails({ ...eventDetails, description: e.target.value })}
            />
            <input
              type="time"
              value={eventDetails.time}
              onChange={(e) => setEventDetails({ ...eventDetails, time: e.target.value })}
            />
            <button onClick={handleAddEvent} className="btn">Add Event</button>
          </div>
        </LocalizationProvider>


        <div className="events-list">
          <h3>Scheduled Events:</h3>
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
      </div>
    </section>
  );
};

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

const SetupPage = () => {

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('userId');
    localStorage.removeItem('token');
    Cookies.remove('userId');
    navigate('/');
  };
  return (
    <div>
      <Navbar handleLogout={handleLogout} />
      <Features />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default SetupPage;
