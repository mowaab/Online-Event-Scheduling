import * as React from 'react';
import { useState } from 'react'; // import useState to use React state 
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import './Calendar.css';

export default function BasicDateCalendar() {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(null); // this stores the currently selected date 
  const [events, setEvents] = useState([]); // this stores all the events
  const [eventDetails, setEventDetails] = useState({ title: '', description: '', time: '' }); // this stores details of the event being created

  // Function to handle adding an event
  const handleAddEvent = () => {
    if (!selectedDate) {
      alert("Please select a date for the event.");
      return;
    }

    if (!eventDetails.title || !eventDetails.time) {
      alert("Please enter both title and time for the event.");
      return;
    }

    // Create a new event
    const newEvent = {
      date: selectedDate.format('YYYY-MM-DD'), // Formatting the date for readability
      ...eventDetails,
    };

    // Add the new event to the events array
    setEvents([...events, newEvent]);

    // Clear the form after adding the event
    setEventDetails({ title: '', description: '', time: '' });
  };

  const handleLogout = () => {
    navigate('/'); // Redirect to the root (login) page
  };

  return (
    <div className="container">
      <h2 className="header">Select a Date</h2>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar 
          value={selectedDate}
          onChange={(newDate) => setSelectedDate(newDate)} // Capturing the selected date
        />
        <div className="event-form">
          {/* Input for event title */}
          <input
            type="text"
            placeholder="Event Title"
            value={eventDetails.title}
            onChange={(e) => setEventDetails({ ...eventDetails, title: e.target.value })}
          />
          {/* Input for event description */}
          <input
            type="text"
            placeholder="Event Description"
            value={eventDetails.description}
            onChange={(e) => setEventDetails({ ...eventDetails, description: e.target.value })}
          />
          {/* Input for event time */}
          <input
            type="time"
            placeholder="Time"
            value={eventDetails.time}
            onChange={(e) => setEventDetails({ ...eventDetails, time: e.target.value })}
          />
          {/* Button to add the event */}
          <button onClick={handleAddEvent} className="btn">Add Event</button>
        </div>
      </LocalizationProvider>

      {/* Logout Button */}
      <button onClick={handleLogout} className="btn">Logout</button>

      {/* Display List of Events */}
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