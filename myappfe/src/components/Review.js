import { collection, addDoc, getDocs,getFirestore } from 'firebase/firestore';
import React, { useState, useEffect } from 'react';
import "./Review.css"
const ReviewComponent = () => {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState('');


  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const firestore = getFirestore();
      const querySnapshot = await getDocs(collection(firestore, 'reviews'));
      const fetchedReviews = [];
      querySnapshot.forEach((doc) => {
        fetchedReviews.push({ id: doc.id, ...doc.data() });
      });
      setReviews(fetchedReviews);
    } catch (error) {
      console.error('Error fetching reviews:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const firestore = getFirestore();
      const docRef = await addDoc(collection(firestore, 'reviews'), { content: newReview });
      setReviews([...reviews, { id: docRef.id, content: newReview }]);
      setNewReview('');
    } catch (error) {
      console.error('Error submitting review:', error);
    }
  };

  return (
    <div className="review-container">
      <ul className="reviews-list">
        {reviews.map((review) => (
          <li key={review.id}>{review.content}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <textarea
          value={newReview}
          onChange={(e) => setNewReview(e.target.value)}
          placeholder="Write your review..."
          required
        />
        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
};

export default ReviewComponent;
