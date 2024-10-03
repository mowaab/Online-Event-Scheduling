import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Login from './View/Login';
import Calender from './View/Calender';
import Homepage from './View/Homepage';

import Playground from './View/Playground';

//import Profile from './View/Profile';
//<Route path="/profile" element={<Profile />} />




function App() {

  return (
    
    <Router>
      <div className="App">
        <Routes>

          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/calender" element={<Calender />} />

          <Route path="/playground" element={<Playground />} />

        </Routes>
      </div>
    </Router>    
  );
}

export default App;