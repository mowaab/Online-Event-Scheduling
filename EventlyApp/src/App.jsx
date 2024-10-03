// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Login from './View/Login';
import Calendar from './View/Calendar';
import Homepage from './View/Homepage';
import About from './View/About';

import Home from './View/Home';
import Playground from './View/Playground';
import Dashboard from './View/Dashboard';

//import Profile from './View/Profile';
//<Route path="/profile" element={<Profile />} />




function App() {

  return (
    
    <Router>
      <div className="App">
        <Routes>

          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/about" element={<About />} />


          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/home" element={<Home />} />
          <Route path="/playground" element={<Playground />} />

        </Routes>
      </div>
    </Router>    
  );
}

export default App;
