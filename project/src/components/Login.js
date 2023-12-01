import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const [emailError, setEmailError] = useState('');
  const [passError, setPassError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      setEmailError('');
      setPassError('');
      setLoading(true);

      // Clear both session and local storage
      sessionStorage.clear();
      localStorage.clear();

      // Error Handling
      const response = await axios.post('http://localhost:8080/login', credentials);
      console.log(response);
      sessionStorage.id = response.data.id;
      // Set authentication status in session storage
      sessionStorage.setItem('IsAuthenticated', 'true');

      // React Router Navigation
      navigate('/Register'); // Redirect to home/dashboard instead of directly to register
    } catch (error) {
      if (error.response.data === 'Invalid Email Provided!' || error.response.data === 'Enter the required details!') {
        setEmailError(error.response.data);
      }
      if (error.response.data === 'Invalid Password Provided!' || error.response.data === 'Enter the required details!') {
        setPassError(error.response.data);
      }
      console.error('Login error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-wrapper">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              id="email"
              name="email"
              value={credentials.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={credentials.password}
              onChange={handleInputChange}
            />
          </div>
          {emailError && <div className="error-message">{emailError}</div>}
          {passError && <div className="error-message">{passError}</div>}
          <button type="submit" disabled={loading}>
            {loading ? 'Logging In...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
