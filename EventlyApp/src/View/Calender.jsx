import * as React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import './Calender.css';


export default function BasicDateCalendar() {

  const navigate = useNavigate();
  const handleLogout = () => {
    navigate('/'); // Redirect to the root (login) page
  };
  return (
    <div className="container">
      
      <div>
        <ul>
          <li>Home</li>
        </ul>
      </div>
      
      <div>
      <br/>
      <h2 className="header">Select a Date</h2>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar />
      </LocalizationProvider>
      </div>
      
      
      
      <div>
      <button className="go-to-calendar-btn" onClick={handleLogout}>
        Logout
      </button>
      <br />
      </div>

    </div>
    
  );
}