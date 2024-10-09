// src/Components/Login.jsx
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Cookies from 'js-cookie'; // Import js-cookie for cookie handling
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState(''); 
  const [error, setError] = useState('');
  const [isCreatingAccount, setIsCreatingAccount] = useState(false); // Toggle between login and signup
  const navigate = useNavigate();

  const handleLoginSubmit = async (e) => {
    e.preventDefault(); 
    const loginData = {username, password};

    try {
      const response = await fetch('http://localhost:5001/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData), // Send the login data in JSON format
      });
  
      if (response.ok) {
        const data = await response.json();// Parse the response data
        console.log('Login successful: ', data);
        localStorage.setItem('userId', data.userId); // Save user ID in local storage

        navigate('/calender'); // Redirect to the calendar page after successful login
      } else {
        const errorData = await response.json(); // Parse error response
        setError(errorData.message); // Set error message if login fails
      }
    } catch (error) {
      console.error('Error logging in:', error);
      setError('Error logging in');
    }
  };

  const handleCreateAccountSubmit = async (e) => {
    e.preventDefault();

    const userData = 
    {
      username: e.target.username.value, //Get username from the form
      email: e.target.email.value, // Get email from form
      password: e.target.password.value // // // 
    };
    try {
      // Make API call to register the new user
      const response = await fetch('http://localhost:5001/api/users/register', {
        method: 'POST', // Specify POST method for creating a resourse
        headers:{'Content-Type':'application/json',}, // setting content type for JSON data
        body: JSON.stringify(userData), // Convert user data to JSON 
      }); 
      if(response.ok)
        {
          const data = await response.json(); //Parse response data 
          console.log('User created Successfully: ', data); // seccess message 
          navigate('/'); // Redirect to home after account creation

        }else {
          const errorData = await response.json(); // Parse error response data
          setError(errorData.message); // Set error message from server response
        }
    } catch (error) {
      console.error('Error creating account:', error); // Log error for debugging
      setError('Error creating account');
    }
     
  };

  
  return (
    <div className="login-container">
      <h2>{isCreatingAccount ? 'Create an Account' : 'Login Page'}</h2>

      {isCreatingAccount ? (
        // Create account form
        <form onSubmit={handleCreateAccountSubmit}>
          <div>
            <label htmlFor="username">Username:</label> {/* Username input */}
            <input
              type="text"
              id="username" // Set the id for the input field
              name="username" // Set the name for the input field
              required
              value={username} // Bind username state
              onChange={(e) => setUsername(e.target.value)} // Update username state
            />
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