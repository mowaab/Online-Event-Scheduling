import * as React from 'react';
import { useState, useEffect } from 'react'; 
import { useNavigate } from 'react-router-dom'; 
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import './Calender.css';
import Cookies from 'js-cookie'; 

export default function BasicDateCalendar() {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(null); 
  const [events, setEvents] = useState([]); 
  const [eventDetails, setEventDetails] = useState({ title: '', description: '', time: '' }); 

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

    // Only fetch if userId exists
    if (userId) {
      fetchUserAppointments();
    }
  }, [userId]); // Depend on userId

  const handleAddEvent = async() => {
    if (!selectedDate) {
      alert("Please select a date for the event.");
      return;
    }

    if (!eventDetails.title || !eventDetails.time) {
      alert("Please enter both title and time for the event.");
      return;
    }

    // Create a new event
    const appointmentData = {
      user: userId,
      title: eventDetails.title,
      date: selectedDate.format('YYYY-MM-DD'), // Ensure selectedDate is in correct format
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
    Cookies.remove('userId'); // Remove the userId cookie
    navigate('/'); // Redirect to the login page
  };

  return (
    <div className="container">
      <h2 className="header">Select a Date</h2>
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
            placeholder="Time"
            value={eventDetails.time}
            onChange={(e) => setEventDetails({ ...eventDetails, time: e.target.value })}
          />
          <button onClick={handleAddEvent} className="btn">Add Event</button>
        </div>
      </LocalizationProvider>

      <button onClick={handleLogout} className="btn">Logout</button>

      <div className="events-list">
        <h3>Scheduled Events:</h3>
        {events.length > 0 ? (
          <ul>
            {events.map((event, index) => (
              <li key={index}>
                <strong>Date:</strong> {event.date} <br />
                <strong>Title:</strong> {event.title} <br />
                <strong>Description:</strong> {event.description || 'No description'} <br />
                <strong>Time:</strong> {event.time}
              </li>
            ))}
          </ul>
        ) : (
          <p>No events scheduled yet.</p>
        )}
      </div>
    </div>
  );
}
