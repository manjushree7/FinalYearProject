import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { stall_list,food_list,menu_list,reviews as reviewsData,assets } from "../../assets/assets.js";
import { StoreContext } from '../../context/StoreContext';
import './StallDetails.css';

const StallDetails = () => {
  const { id } = useParams();
  const stall = stall_list.find((s) => s.id === parseInt(id));
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  if (!stall) return <h2>Stall not found</h2>;

  const availableFood = food_list.filter(food => food.available && food.stallId === parseInt(id));
  const outOfStockFood = food_list.filter(food => !food.available && food.stallId === parseInt(id));
  const stallReviews = reviewsData.filter(review => review.stallId === parseInt(id));

  return (
    <div className="stall-details">
      {/* Stall Info */}
      <section className="stall-info">
        <img src={stall.stall_image} alt={stall.stall_name || "Stall"} className="stall-image" />
        <div className="stall-description">
          <h1>{stall.stall_name}</h1>
          <p><strong>Location:</strong> {stall.location}</p>
          <p><strong>Operating Hours:</strong> {stall.operating_hours}</p>
        </div>
      </section>

      {/* Menu Categories */}
      <section className="menu-categories">
        <h2>Menu Categories</h2>
        <div className="menu-list">
          {menu_list.map((menu, index) => (
            <div key={index} className="menu-item">
              <img src={menu.menu_image} alt={menu.menu_name || "Menu"} className="menu-image" />
              <p>{menu.menu_name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Available Food */}
      <section className="food-list">
        <h2>Available Food</h2>
        <div className="food-images">
          {availableFood.map((food) => (
            <div key={food._id} className="food-item">
              <div className="food-item-img-container">
                <img src={food.image} alt={food.name || "Food"} className="food-item-image" />
                {!cartItems[food._id] ? (
                  <img
                    className="add"
                    onClick={() => addToCart(food._id)}
                    src={assets.add_icon_white}
                    alt="Add to cart"
                  />
                ) : (
                  <div className="food-item-counter">
                    <img
                      onClick={() => removeFromCart(food._id)}
                      src={assets.remove_icon_red}
                      alt="Remove"
                    />
                    <p>{cartItems[food._id]}</p>
                    <img
                      onClick={() => addToCart(food._id)}
                      src={assets.add_icon_green}
                      alt="Add more"
                    />
                  </div>
                )}
              </div>
              <div className="food-item-info">
                <p>{food.name}</p>
                <p className="food-item-price">Rs {food.price}</p>
                <p className="food-item-desc">{food.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sold Out Food */}
      <section className="food-list">
        <h2>Sold Out</h2>
        <div className="food-images">
          {outOfStockFood.map((food) => (
            <div key={food._id} className="food-item sold-out-item">
              <div className="image-container">
                <img src={food.image} alt={food.name || "Sold Out"} className="food-image" />
                <div className="available-soon-overlay">Available Soon</div>
              </div>
              <p>{food.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews */}
      <section className="reviews-section">
        <h2>Reviews</h2>
        {stallReviews.length > 0 ? (
          <div className="reviews-list">
            {stallReviews.map((review, index) => (
              <div key={index} className="review-item">
                <p>
                  <strong>{review.name}</strong>
                  <span className="star-rating">
                    {'★'.repeat(Math.round(review.rating)) + '☆'.repeat(5 - Math.round(review.rating))}
                  </span>
                </p>
                <p className="comment">{review.review}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>No reviews yet. Be the first to leave a review!</p>
        )}
      </section>
    </div>
  );
};

export default StallDetails;
