// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './View/Login';
import Dashboard from './View/Dashboard';
import Calender from './View/Calender';


function App() {

  return (
    
    <Router>
      <div className="App">
        <Routes>

          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/calender" element={<Calender />} />

        </Routes>
      </div>
    </Router>    
  );
}

export default App;
