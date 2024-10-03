// src/View/Homepage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css'; 

const Navbar = () => (
    <nav className="navbar">
      <div className="logo">Evently</div> 
      <ul className="nav-links">

        <li><Link to="/">Home</Link></li>
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

      
      <h2>Our Features</h2> <br />
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
  
const Homepage = () => {
  return (
    <div className="homepage">
        <Navbar />
        <Features />
        <Testimonials />
        <Footer />
      </div>
  );
};

export default Homepage;
