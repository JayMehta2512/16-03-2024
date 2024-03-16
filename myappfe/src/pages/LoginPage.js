import React, { useState } from 'react';
import '../styles/LoginPage.css';
import { Link } from 'react-router-dom';
import { database } from '../firebase/FirebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth'; // Assuming 'database' is your Firebase authentication object

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(database,email, password);
      console.log('Login successful');
      if (email === 'jaymehta@gmail.com') {
        console.log ("admin")
        window.location.href = '/adminD' ;
      }
        else {
          window.location.href = '/homeAf'; 
        }
     
    } catch (error) {
      console.error('Login failed:', error.message);
      setError("Invalid Email Or Password"); // Set error state to display error message
    }
  };
  

  return (
    <>
      <div className="login-container">
        <div className="login-header">
          <h2>Login</h2>
        </div>
        <form className="login-form">
          <label>
            Email:
            <input
              type="email" // Changed type to 'email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <br />
          <button type="button" onClick={handleLogin}>
            Login
          </button>
          {error && <p className="error-message">{error}</p>} {/* Display error message if exists */}
        </form>
        <div className="signup-link">
          <p>Don't have an account?<Link to="/SignUp" className="nav-link"><span>New User</span></Link></p>
        </div>
      </div>
    </>
  );
};

export default Login;
