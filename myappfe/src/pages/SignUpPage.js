
import React, { useState } from 'react';
import '../styles/SignUpPage.css';
import { Link } from 'react-router-dom';
import { database } from '../firebase/FirebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { getFirestore,collection,addDoc } from 'firebase/firestore';

const InputField = ({ label, type, value, onChange }) => {
  return (
    <label>
      {label}:
      <input
        type={type}
        value={value}
        onChange={onChange}
      />
    </label>
  );
};

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showNotification, setShowNotification] = useState(false);
  const [error, setError] = useState(null);

  const handleRegister = async () => {
    try {
      const trimmedUsername = username.trim();
      const trimmedEmail = email.trim();
      const trimmedPassword = password.trim();

      // Check if any of the fields are empty
      if (!trimmedUsername || !trimmedEmail || !trimmedPassword) {
        console.error('Registration failed: All fields are required');
        return;
      }

      // Attempt registration
      const userCredential = await createUserWithEmailAndPassword(database, trimmedEmail, trimmedPassword);
      const user = userCredential.user;

      const firestore = getFirestore();

      await addDoc(collection(firestore, 'users'), {
        uid: user.uid, // Add user's UID as a field
        username: username,
        email: email,
        password: password
      });

      console.log('Registration successful');
      setShowNotification(true);
      window.location.href = '/login';
    } catch (error) {
      console.error('Registration failed:', error.message);
      setError("Email is already been used");
      // Handle failed registration
    }
  };

  const closeNotification = () => {
    setShowNotification(false);
  };


  return (
    <>
      <div className='mainback'>
        <div className="signup-container">
          <div className="signup-header">
            <h2>Sign Up</h2>
          </div>
          <form className="signup-form">
            <InputField
              label="Username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <InputField
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <InputField
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="button" onClick={handleRegister}>
              Sign Up
            </button>
            {showNotification && (
              <div className="notification">
                <p>You are registered! Welcome aboard!</p>
                <button type="button" onClick={closeNotification}>
                  Close
                </button>
              </div>
            )}
            {error && <p className="error-message">{error}</p>} 
          </form>
          <div className="login-link">
            <p>Already have an account?<Link to="/login" className="nav-link"><span>Login</span></Link></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
