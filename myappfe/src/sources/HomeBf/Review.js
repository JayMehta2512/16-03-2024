// ReviewComponent.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Review.css';

const ReviewComponent = () => {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState('');

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const response = await axios.get('/api/reviews');
      setReviews(response.data);
    } catch (error) {
      console.error('Error fetching reviews:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/reviews', { review: newReview });
      setReviews([...reviews, response.data]);
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
