import React from 'react';
import { Link } from 'react-router-dom';

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import './Playground.css';
/* 
import { useNavigate, Link } from 'react-router-dom';


const navigate = useNavigate();
const goToProfile = () => {
    navigate('/profile'); 
  };
  */

  const Navbar = () => (
    <nav className="navbar">
      <div className="logo">Evently</div> 
      <ul className="nav-links">

        <li><Link to="/">Home</Link></li>
        <li><Link to="/calender">Calendar</Link></li>
        <li><Link to="/playground">Playground</Link></li>
        <li><Link to="/login"><strong><u>Login</u></strong></Link></li>
      </ul>
    </nav>
  );
  

  const Features = () => (
    <section className="features">

      <h1>Welcome to <strong>Evently</strong></h1> <br />
      <p>
        At Evently, we help you organize and manage your events seamlessly. 
        Stay up to date with your schedules and never miss an important event!
      </p> <br />

      <div className="container1">
        <br/>
        <h2 className="header1">Select a Date</h2>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar />
        </LocalizationProvider>
        </div>
     
    </section>
  );
  
  const Testimonials = () => (
    <section className="testimonials">
      <h2>What Our Clients Say</h2> <br />
      <div className="testimonial-grid">
        <div className="testimonial-item">
          <p>"Evently transformed our way of everyday life!"</p>
          <span>— Mike Ox, CEO of Schmuck Incorporated</span>
        </div>
        <div className="testimonial-item">
          <p>"Amazing service with top-notch customer support."</p>
          <span>— Mohammad Abbas, The Real Founder of SpaceX</span>
        </div>
      </div>

      <br /><br />
      <h2>Contact Information</h2>
      <br />
      <p><strong>Email:</strong> emotional-support@evently.com</p>
      <p><strong>Phone:</strong> 073 420 69 69</p>
      <p><strong>Address:</strong> 123 Evently St, Event City, EV 12345</p>
      <br />
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
  return (
    <div>        
      <div className="homepage">
        <Navbar />
        <Features />
        <Testimonials />
        <Footer />
      </div>
      
      
      <div id="header">
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
			<h1>Evently</h1>
			<div id="nav">
				<ul>
					<li><a href="">About</a></li>
					<li><a href="">Contact</a></li>
					<li><a href="">Services</a></li>
					<li><a href="">Profile</a></li>
				</ul>
			</div>
		</div>
		<div id="content">
			
            <div className="container1">
            <br/>
            <h2 className="header1">Select a Date</h2>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateCalendar />
                </LocalizationProvider>
			</div>
			<div class="article column1">
				<p>Column One</p>
			</div>
			<div class="article column2">
                <br />
                <img src="evently.png" height={"120"}/>
			</div>
			<div class="article column3">
				<p>Column Three</p>
			</div>
		</div>
		<div id="footer">
			<p>&copy; Copyright Evently 2024</p>
		</div>


        <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />

      {/* Menu Bar */}
      <nav style={{ padding: '10px', backgroundColor: '#333', color: '#fff' }}>
        <ul style={{ display: 'flex', listStyle: 'none', justifyContent: 'space-around' }}>
          

          <li><img src="evently.png" width={""} height={"20"}/></li>
          <li><a style={{ color: '#fea' }}>Evently</a></li>
          <li></li>
          <li></li>
          <li></li>
          <li><a href="#profile" style={{ color: '#fff', textDecoration: 'none' }}>Profile</a></li>

        </ul>
      </nav>

        <div className="container1">
        <br/>
        <h2 className="header1">Select a Date</h2>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar />
        </LocalizationProvider>
        </div>
      

      <nav style={{ padding: '10px', backgroundColor: '#333', color: '#fff' }}>
        <ul style={{ display: 'flex', listStyle: 'none', justifyContent: 'space-around' }}>
          

          <li> <p>&copy; Copyright Evently 2024</p></li>
          <li> </li>

        </ul>
      </nav>

    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />

    


      {/* Setup Content 
      <header>
        <h1>Welcome to WordPress Setup</h1>
      </header>
      <section id="theme">
        <h2>Step 1: Choose Your Theme</h2>
        <p>Select a theme that suits your style or business.</p>
        <button>Choose Theme</button>
      </section>
      <section id="customize">
        <h2>Step 2: Customize Your Site</h2>
        <p>Update colors, fonts, and layouts to fit your brand.</p>
        <button>Customize</button>
      </section>
      <section id="domain">
        <h2>Step 3: Set Your Domain</h2>
        <p>Choose a unique domain or connect an existing one.</p>
        <button>Choose Domain</button>
      </section>
      <footer id="finish">
        <button>Finish Setup</button>
      </footer> */}
    </div>
  );
}

export default SetupPage;
