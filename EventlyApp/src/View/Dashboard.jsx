// src/Components/Dashboard.jsx
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Dashboard.css'; 
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
  const [filteredEvents, setFilteredEvents] = useState([]); // For search functionality
  const [editEventId, setEditEventId] = useState(null); // Track event being edited
  const [editEventDetails, setEditEventDetails] = useState({ title: '', description: '', time: '' });
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const userId = localStorage.getItem('userId'); // Get userId

  useEffect(() => {
    const fetchUserAppointments = async () => {
      try {
        const response = await fetch(`http://localhost:5001/api/appointments/${userId}`);
        if (response.ok) {
          const appointments = await response.json();
          setEvents(appointments); 
          setFilteredEvents(appointments); // Set for filtered events
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

  // Handle Delete Event
  const handleDeleteEvent = async (eventId) => {
    try {
      const response = await fetch(`http://localhost:5001/api/appointments/${eventId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        // Remove event from the state
        setEvents(events.filter(event => event._id !== eventId));
        setFilteredEvents(filteredEvents.filter(event => event._id !== eventId));
        alert('Event deleted successfully');
      } else {
        const errorData = await response.json();
        alert(errorData.message || 'Failed to delete event');
      }
    } catch (error) {
      console.error('Error deleting event:', error);
      alert('Error deleting event');
    }
  };

  // Handle Update Event
  const handleUpdateEvent = async () => {
    if (!editEventDetails.title || !editEventDetails.time) {
      alert('Please provide both title and time for the event');
      return;
    }

    try {
      const response = await fetch(`http://localhost:5001/api/appointments/${editEventId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editEventDetails),
      });

      if (response.ok) {
        const updatedEvent = await response.json();
        // Update the event in the events list
        setEvents(events.map(event => (event._id === updatedEvent._id ? updatedEvent : event)));
        setFilteredEvents(filteredEvents.map(event => (event._id === updatedEvent._id ? updatedEvent : event)));
        
        setEditEventId(null); // Reset edit mode
        setEditEventDetails({ title: '', description: '', time: '' });
        alert('Event updated successfully');
      } else {
        const errorData = await response.json();
        alert(errorData.message || 'Failed to update event');
      }
    } catch (error) {
      console.error('Error updating event:', error);
      alert('Error updating event');
    }
  };

  // Search and filter events
  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query) {
      const filtered = events.filter(event => 
        event.title.toLowerCase().includes(query.toLowerCase()) ||
        event.date.includes(query)
      );
      setFilteredEvents(filtered);
    } else {
      setFilteredEvents(events); // Reset to original events if no query
    }
  };

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
        <input
          type="text"
          className="search-input"
          placeholder="Search by title or date"
          value={searchQuery}
          onChange={(e) => handleSearch(e.target.value)}
        />
        <h2>Total Events: {filteredEvents.length}</h2>

        <div className="events-list">
          {filteredEvents.length > 0 ? (
            <ul>
              {filteredEvents.map((event) => (
                <li key={event._id}>
                  {editEventId === event._id ? (
                    <div>
                      <input
                        type="text"
                        value={editEventDetails.title}
                        onChange={(e) => setEditEventDetails({ ...editEventDetails, title: e.target.value })}
                        placeholder="Title"
                      />
                      <input
                        type="text"
                        value={editEventDetails.description}
                        onChange={(e) => setEditEventDetails({ ...editEventDetails, description: e.target.value })}
                        placeholder="Description"
                      />
                      <input
                        type="time"
                        value={editEventDetails.time}
                        onChange={(e) => setEditEventDetails({ ...editEventDetails, time: e.target.value })}
                      />
                      <br />
                      <button onClick={handleUpdateEvent}>Update</button>
                      <button onClick={() => setEditEventId(null)}>Cancel</button>
                    </div>
                  ) : (
                    <div>
                      <strong>Title:</strong> <u> <strong>{event.title}</strong> </u> <br />
                      <strong>Description:</strong> {event.description || 'No description'} <br />
                      <strong>Date:</strong> {event.date.split('T')[0]} <br />
                      <strong>Time:</strong> {event.time} <br />
                      <button onClick={() => setEditEventId(event._id) || setEditEventDetails(event)}>Edit</button>
                      <button onClick={() => handleDeleteEvent(event._id)}>Delete</button>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          ) : (
            <p>No events found.</p>
          )}
        </div>
        <Testimonials />
        <Footer />
      </section>
    </div>
  );
};

export default Dashboard;
