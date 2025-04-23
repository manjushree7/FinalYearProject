import React from 'react';
import { useParams } from 'react-router-dom';
import { stall_list, food_list, menu_list, reviews as reviewsData } from "../../assets/assets.js";
import './StallDetails.css';

const StallDetails = () => {
  const { id } = useParams(); // Get stall ID from URL
  const stall = stall_list.find((s) => s.id === parseInt(id));

  if (!stall) {
    return <h2>Stall not found</h2>;
  }

  // Filter food items based on availability
  const availableFood = food_list.filter((food) => food.available);
  const outOfStockFood = food_list.filter((food) => !food.available);

  // Get reviews for the current stall
  const stallReviews = reviewsData.find((review) => review.stallId === parseInt(id))?.reviews || [];

  return (
    <div className="stall-details">
      <div className="stall-info">
        <img src={stall.stall_image} alt={stall.stall_name} className="stall-image" />
        <div className="stall-description">
          <h1>{stall.stall_name}</h1>
          <p><strong>Location:</strong> {stall.location}</p>
          <p><strong>Operating Hours:</strong> {stall.operating_hours}</p>
          <p><strong>Available Food:</strong> {availableFood.map(food => food.name).join(', ')}</p>
          <p>
            <strong>Find on Google Maps:</strong>
            <a href={`https://www.google.com/maps/place/27.71213241625674,85.33094773653187`} 
              target="_blank" 
              rel="noopener noreferrer">
              View Location
            </a>
          </p>
        </div>
      </div>

      {/* Menu Categories Section */}
      <div className="menu-categories">
        <h2>Menu Categories</h2>
        <div className="menu-list">
          {menu_list.map((menu, index) => (
            <div key={index} className="menu-item">
              <img src={menu.menu_image} alt={menu.menu_name} className="menu-image" />
              <p>{menu.menu_name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Available Food Section */}
      <div className="food-list">
        <h2>Available Food</h2>
        <div className="food-images">
          {availableFood.map((food) => (
            <div key={food._id} className="food-item">
              <img src={food.image} alt={food.name} className="food-image" />
              <p>{food.name}</p>
              <p>${food.price}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Out of Stock Food Section */}
      <div className="food-list">
        <h2>Sold Out</h2>
        <div className="food-images">
          {outOfStockFood.map((food) => (
            <div key={food._id} className="food-item out-of-stock">
              <img src={food.image} alt={food.name} className="food-image" />
              <p>{food.name}</p>
              <p>Out of Stock</p>
            </div>
          ))}
        </div>
      </div>

      {/* Reviews Section */}
      <div className="reviews-section">
        <h2>Reviews</h2>
        {stallReviews.length > 0 ? (
          <div className="reviews-list">
            {stallReviews.map((review) => (
              <div key={review.id} className="review-item">
                <p>
                  <strong>{review.name}</strong> 
                  <span className="star-rating">
                    {'★'.repeat(review.rating)} {/* Filled stars */}
                    {'☆'.repeat(5 - review.rating)} {/* Empty stars */}
                  </span>
                </p>
                <p className="comment">{review.comment}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>No reviews yet. Be the first to leave a review!</p>
        )}
      </div>
    </div>
  );
};

export default StallDetails;
