
import React, { useState, useEffect } from 'react';
import '../styles/MyProfile.css';
import { getFirestore, doc, updateDoc, getDocs, query, where, collection } from 'firebase/firestore';
import { database } from '../firebase/FirebaseConfig'; // Assuming you have database imported from FirebaseConfig

const MyProfile = () => {
  const [editing, setEditing] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [location, setLocation] = useState('');
  const [pincode, setPincode] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [userId, setUserId] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const currentUserEmail = database.currentUser.email;
        const firestore = getFirestore();
        const usersRef = query(collection(firestore, 'users'), where('email', '==', currentUserEmail));
        const querySnapshot = await getDocs(usersRef);
        querySnapshot.forEach((doc) => {
          const userData = doc.data();
          setUsername(userData.username);
          setEmail(userData.email);
          setPassword(userData.password);
          setLocation(userData.location);
          setPincode(userData.pincode);
          setAddress(userData.address);
          setPhoneNumber(userData.phoneNumber);
          setUserId(doc.id);
        });
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleSaveClick = async () => {
    try {
      const firestore = getFirestore();
      if (editing) {
        const userDocRef = doc(firestore, 'users', userId);
        await updateDoc(userDocRef, {
          username: username,
          email: email,
          password: password,
          location: location,
          pincode: pincode,
          address: address,
          phoneNumber: phoneNumber,
        });
        console.log('User data updated successfully');
      }
      setEditing(false);
    } catch (error) {
      console.error('Error updating user data:', error);
    }
  };

  const handleCancelClick = () => {
    setUsername('');
    setEmail('');
    setPassword('');
    setLocation('');
    setPincode('');
    setAddress('');
    setPhoneNumber('');
    setEditing(false);
  };

  return (
    <>
      <div className="user-profile-container">
        <h2>User Profile</h2>
        <div className="user-profile-info">
        <div className="profile-item">
            <label>Username:</label>
            {editing ? (
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            ) : (
              <span>{username}</span>
            )}
          </div>
          <div className="profile-item">
            <label>Email:</label>
            {editing ? (
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            ) : (
              <span>{email}</span>
            )}
          </div>
          <div className="profile-item">
            <label>Password:</label>
            {editing ? (
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            ) : (
              <span>{password}</span>
            )}
          </div>
          <div className="profile-item">
            <label>Location:</label>
            {editing ? (
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            ) : (
              <span>{location}</span>
            )}
          </div>
          <div className="profile-item">
            <label>Pincode:</label>
            {editing ? (
              <input
                type="text"
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
              />
            ) : (
              <span>{pincode}</span>
            )}
          </div>
          <div className="profile-item">
            <label>Address:</label>
            {editing ? (
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            ) : (
              <span>{address}</span>
            )}
          </div>
          <div className="profile-item">
            <label>Phone Number:</label>
            {editing ? (
              <input
                type="text"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            ) : (
              <span>{phoneNumber}</span>
            )}
          </div>
          <div className="profile-item">
            {editing ? (
              <>
                <button onClick={handleSaveClick}>Save</button>
                <button onClick={handleCancelClick}>Cancel</button>
              </>
            ) : (
              <button onClick={handleEditClick}>Edit</button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default MyProfile;
