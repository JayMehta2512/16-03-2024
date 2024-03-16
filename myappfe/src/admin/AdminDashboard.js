import React, { useState, useEffect } from 'react';
import { collection, getDocs, updateDoc, doc, getFirestore } from 'firebase/firestore'; 
import { Link } from 'react-router-dom';
import './AdminD.css';

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);

  // Fetch users from Firestore on component mount
  useEffect(() => {
    const fetchUsers = async () => {
      const firestore = getFirestore();
      const usersCollection = collection(firestore, 'users');
      const data = await getDocs(usersCollection);
      const usersData = data.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setUsers(usersData);
    };
    fetchUsers();
  }, []);

  const handleEditUser = async (userId, newData) => {
    try {
      const firestore = getFirestore();
      const userDoc = doc(firestore, 'users', userId);
      await updateDoc(userDoc, newData);
      console.log('User data updated successfully');
      
      // Update the local state with the updated user data
      setUsers(prevUsers => {
        const updatedUsers = prevUsers.map(user => {
          if (user.id === userId) {
            // Merge the new data into the user object
            return { ...user, ...newData };
          }
          return user;
        });
        return updatedUsers;
      });
    } catch (error) {
      console.error('Error updating user data:', error.message);
    }
  };

  return (
    <div className="admin-dashboard">
      <h2>Welcome to Admin Dashboard</h2>
      <Link to="/report" className="report-button">Report</Link>
      <div className="users-list">
        <h3>Users</h3>
        <table className="user-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Age</th>
              <th>Address</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td><input type="text" value={user.username} onChange={(e) => handleEditUser(user.id, { username: e.target.value })} /></td>
                <td>{user.email}</td>
                <td>{user.password}</td>
                <td><input type="text" value={user.age} onChange={(e) => handleEditUser(user.id, { age: e.target.value })} /></td>
                <td><input type="text" value={user.address} onChange={(e) => handleEditUser(user.id, { address: e.target.value })} /></td>
                <td><input type="text" value={user.phone} onChange={(e) => handleEditUser(user.id, { phone: e.target.value })} /></td>
                <td>
                  <button className="edit-button" onClick={() => handleEditUser(user.id, { name: 'New Name' })}>
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;
