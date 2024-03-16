import React, { useEffect, useState } from 'react';
import { collection, getDocs, deleteDoc, doc,getFirestore } from 'firebase/firestore';
import "../styles/Order.css"

const Order = () => {
  const [subscriptions, setSubscriptions] = useState([]);

  useEffect(() => {
    const fetchSubscriptions = async () => {
      const firestore = getFirestore();
      const querySnapshot = await getDocs(collection(firestore, 'subscriptions'));
      const subscriptionsData = [];
      querySnapshot.forEach((doc) => {
        subscriptionsData.push({ id: doc.id, ...doc.data() });
      });
      setSubscriptions(subscriptionsData);
    };

    fetchSubscriptions();
  }, []);

  const removeSubscription = async (subscriptionId) => {
    try {
      const firestore = getFirestore();
      await deleteDoc(doc(firestore, 'subscriptions', subscriptionId));
      setSubscriptions(subscriptions.filter((subscription) => subscription.id !== subscriptionId));
    } catch (error) {
      console.error('Error removing subscription:', error);
    }
  };
  const handlePayment = () => {
    console.log("Payment button clicked");
    
  };

  return (
    <div className="order">
      <h2>Your Orders</h2>
      {subscriptions.map((subscription) => (
        <div key={subscription.id} className="subscription">
          <h3>{subscription.frequency} Subscription</h3>
          <p>Quantity: {subscription.quantity}</p>
          <p>Jug Type: {subscription.jugType}</p>
          <p>Bottle Type: {subscription.bottleType}</p>
          <button onClick={() => removeSubscription(subscription.id)}>Remove</button>
          <button onClick={handlePayment}>Pay Now</button>
        </div>
      ))}
    </div>
  );
};

export default Order;
