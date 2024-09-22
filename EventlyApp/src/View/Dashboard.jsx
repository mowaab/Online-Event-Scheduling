// src/components/Dashboard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';


const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/'); // Redirect back to login page on logout
  };

  return (
    <div className='CreateAccount'>
      <h1>Welcome to <u>Evently!</u></h1>
      <br />
      <h4>You have successfully completed to create an account with us!</h4>
      <br />
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};


export default Dashboard;
