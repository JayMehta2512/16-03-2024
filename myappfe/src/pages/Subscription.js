
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { collection, addDoc,getFirestore } from 'firebase/firestore';
// import { database } from '../firebase/FirebaseConfig';
import "../styles/Subscription.css";

const SubscriptionPage = () => {
  const { frequency } = useParams();
  const [selectedFrequency, setSelectedFrequency] = useState(frequency || 'weekly');
  const [quantity, setQuantity] = useState(1);
  const [selectedJugType, setSelectedJugType] = useState('standard');
  const [selectedBottleType, setSelectedBottleType] = useState('small');
  const [isSubscribed, setIsSubscribed] = useState(false);
  

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value, 10);
    setQuantity(newQuantity > 0 ? newQuantity : 1);
  };

  const handleFrequencyChange = (event) => {
    setSelectedFrequency(event.target.value);
  };

  const handleJugTypeChange = (event) => {
    setSelectedJugType(event.target.value);
  };

  const handleBottleTypeChange = (event) => {
    setSelectedBottleType(event.target.value);
  };

  const subscriptionData = {
    weekly: {
      title: 'Weekly Subscription',
      description: 'Enjoy a week-long supply of clean water delivered to you.',
      price: '100rs per week',
    },
    monthly: {
      title: 'Monthly Subscription',
      description: 'Never worry about running out of water with our monthly subscription.',
      price: '350rs per month',
    },
  };

  const selectedSubscription = subscriptionData[selectedFrequency];

  if (!selectedSubscription) {
    return <div>Invalid subscription type</div>;
  }

  const handleSubscribe = async () => {
    try {
      const firestore = getFirestore();
      const docRef = await addDoc(collection(firestore, 'subscriptions'), {
        frequency: selectedFrequency, // Add selected frequency
        quantity: quantity,
        jugType: selectedJugType,
        bottleType: selectedBottleType,
      });
      console.log('Subscription added with ID: ', docRef.id);
      setIsSubscribed(true);
    } catch (error) {
      console.error('Error adding subscription: ', error);
    }
  };

  return (
    <>
      <div className="subscription-container">
        <h2>{selectedSubscription.title}</h2>
        <p>{selectedSubscription.description}</p>
        <p>Price: {selectedSubscription.price}</p>

        <div>
          <label>Select Frequency: </label>
          <select value={selectedFrequency} onChange={handleFrequencyChange}>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
          </select>
        </div>

        <div>
          <label>Select Quantity: </label>
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={handleQuantityChange}
          />
        </div>

        <div>
          <label>Select Jug Type: </label>
          <select value={selectedJugType} onChange={handleJugTypeChange}>
            <option value="standard">Standard (Regular) Jug</option>
            <option value="premium">Premium (Mineral water) Jug</option>
            <option value="standard">Standard (Cold) Jug</option>
            <option value="premium">Premium (Mineral water) Jug</option>
          </select>
        </div>

        <div>
          <label>Select Bottle Type: </label>
          <select value={selectedBottleType} onChange={handleBottleTypeChange}>
            <option value="small">Small Bottle</option>
            <option value="large">Large Bottle</option>
          </select>
        </div>

        <div className="subscription-con">
          {!isSubscribed && (
            <button onClick={handleSubscribe} className="subscribe-button">
              Subscribe Now
            </button>
          )}

          {isSubscribed && (
            <div className="confirmation-message">
              <p>
                You have subscribed to {selectedSubscription.title} with {quantity} {selectedJugType} jug(s) and {quantity} {selectedBottleType} bottle(s)!
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};



export default SubscriptionPage;

