// src/View/Homepage.jsx
import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './Homepage.css'; 

const Navbar = () => (
    <nav className="navbar">
      <div className="logo">Evently</div> 
      <ul className="nav-links">

        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/login"><strong><u>Login</u></strong></Link></li>
      </ul>
    </nav>
  );
  
  const HeroSection = () => (
    <section className="hero">
      <div className="hero-content">        
        
      </div>
    </section>
  );
  
  const Features = () => (
    <section className="features">
      <h2>Our Features</h2>
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
      <h2>What Our Clients Say</h2>
      <div className="testimonial-grid">
        <div className="testimonial-item">
          <p>"Evently transformed our way of everyday life!"</p>
          <span>— Mike Ox, CEO of Shmuck Incorporated</span>
        </div>
        <div className="testimonial-item">
          <p>"Amazing service with top-notch customer support."</p>
          <span>— Jane Smith, Founder of Creativa</span>
        </div>
      </div>
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
        <HeroSection />
        <Features />
        <Testimonials />
        <Footer />
      </div>
  );
};

export default Homepage;
