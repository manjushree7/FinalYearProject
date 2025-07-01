import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { stall_list, food_list, menu_list, reviews as reviewsData } from "../../assets/assets.js";
import { StoreContext } from '../../context/StoreContext';
import { assets } from '../../assets/assets';
import './StallDetails.css';

const StallDetails = () => {
  const { id } = useParams();
  const stall = stall_list.find((s) => s.id === parseInt(id));
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  if (!stall) {
    return <h2>Stall not found</h2>;
  }

  const availableFood = food_list.filter((food) => food.available);
  const outOfStockFood = food_list.filter((food) => !food.available);
  const stallReviews = reviewsData.find((review) => review.stallId === parseInt(id))?.reviews || [];

  return (
    <div className="stall-details">
      {/* Stall Info Section */}
      <div className="stall-info">
        <img src={stall.stall_image} alt={stall.stall_name} className="stall-image" />
        <div className="stall-description">
          <h1>{stall.stall_name}</h1>
          <p><strong>Location:</strong> {stall.location}</p>
          <p><strong>Operating Hours:</strong> {stall.operating_hours}</p>
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

      {/* Available Food Section with + Icon */}
      <div className="food-list">
        <h2>Available Food</h2>
        <div className="food-images">
          {availableFood.map((food) => (
            <div key={food._id} className="food-item">
              <div className="food-item-img-container">
                <img src={food.image} alt={food.name} className="food-item-image" />
                {!cartItems[food._id]
                  ? <img 
                      className='add' 
                      onClick={() => addToCart(food._id)} 
                      src={assets.add_icon_white} 
                      alt="Add to cart" 
                    />
                  : <div className='food-item-counter'>
                      <img 
                        onClick={() => removeFromCart(food._id)} 
                        src={assets.remove_icon_red} 
                        alt="Remove from cart" 
                      />
                      <p>{cartItems[food._id]}</p>
                      <img 
                        onClick={() => addToCart(food._id)} 
                        src={assets.add_icon_green} 
                        alt="Add more" 
                      />
                    </div>
                }
              </div>
              <div className="food-item-info">
                <p>{food.name}</p>
                <p className="food-item-price">Rs{food.price}</p>
                <p className="food-item-desc">{food.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sold Out Food Section */}
      <div className="food-list">
        <h2>Sold Out</h2>
        <div className="food-images">
          {outOfStockFood.map((food) => (
            <div key={food._id} className="food-item out-of-stock">
              <img src={food.image} alt={food.name} className="food-image" />
              <p>{food.name}</p>
              <p className="out-of-stock-text">Available Soon</p>
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
                    {'★'.repeat(review.rating)}
                    {'☆'.repeat(5 - review.rating)}
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