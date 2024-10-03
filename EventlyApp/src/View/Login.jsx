// src/Components/Login.jsx
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isCreatingAccount, setIsCreatingAccount] = useState(false); // Toggle between login and signup
  const navigate = useNavigate();

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    // Simple authentication logic for demo purposes
    if (username === 'a' && password === '123') {
      navigate('/calender'); // Redirect to dashboard after successful login
    } else {
      setError('Invalid username or password');
    }
  };

  const handleCreateAccountSubmit = (e) => {
    e.preventDefault();
    // Account creation logic can go here
    navigate('/'); // Redirect to home after account creation
  };

  
  return (
    <div className="login-container">
      <h2>{isCreatingAccount ? 'Create an Account' : 'Login Page'}</h2>

      {isCreatingAccount ? (
        // Create account form
        <form onSubmit={handleCreateAccountSubmit}>
          <div>
            <label htmlFor="name">Fullname:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <br />
            <input type="email" id="email" name="email" required />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button type="submit">Create Account</button>
        </form>
      ) : (
        // Login form
        <form onSubmit={handleLoginSubmit}>
          <div>
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <button type="submit">Login</button>

        </form>
      )}

      <br />
      <Link
        style={{color: 'darkcyan'}}
        to="#"
        onClick={() => setIsCreatingAccount(!isCreatingAccount)}
      >
        {isCreatingAccount ? 'Already have an account? Login' : 'Create an account'}
      </Link>

    </div>
  );
};

export default Login;