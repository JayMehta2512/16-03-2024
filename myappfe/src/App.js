import React from 'react';
import Home from './sources/HomeAf/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import SignUpPage from './pages/SignUpPage';
import Login from './pages/LoginPage';
import Order from './pages/Order';
import MyProfile from './pages/MyProfile';
import Weekly from './pages/Subscription/Weekly';
import Daily from './pages/Subscription/Daily';
import Monthly from './pages/Subscription/Monthly';
import SubscriptionPage from './pages/Subscription';
import Features from './pages/Features';
import Homebf from './sources/HomeBf/HomeBf';
import AdminDashboard from './admin/AdminDashboard';
export default function App() {

  return (
    <Router>
      <div className='app'>
        <Routes>
          
          <Route path='/' element={<Homebf />} />
          <Route path='/homeAf' element={<Home />} />
          <Route path='/SignUp' element={<SignUpPage/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/order' element={<Order/>} />
          <Route path='/myprofile' element={<MyProfile/>} />
          <Route path='/weekly' element={<Weekly/>} />
          <Route path='/daily' element={<Daily/>} />
          <Route path='/monthly' element={<Monthly/>} />
          <Route path='/subscription' element={<SubscriptionPage/>} />
          <Route path='/features' element={<Features/>} />
          <Route path='/adminD' element={<AdminDashboard/>} />
          
        </Routes>
      </div>
    </Router>
  );
}

