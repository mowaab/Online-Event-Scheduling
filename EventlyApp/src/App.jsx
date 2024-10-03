// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './View/Login';
import Homepage from './View/Homepage';
import Calender from './View/Calender';

import Playground from './View/Playground';
import Dashboard from './View/Dashboard';

function App() {

  return (
    
    <Router>
      <div className="App">
        <Routes>

          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/calender" element={<Calender />} />
          
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/playground" element={<Playground />} />

        </Routes>
      </div>
    </Router>    
  );
}

export default App;
