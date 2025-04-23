import React, { useContext } from 'react';
import './Cart.css';
import { StoreContext } from '../../context/StoreContext';
import { useNavigate } from 'react-router-dom';

const Cart = ({ onClose }) => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount } = useContext(StoreContext);
  const navigate = useNavigate();

  const handleClose = () => {
    navigate('/'); // Redirects to home route (handled by your header)
    if (onClose) onClose(); // Also calls the original close function if provided
  };

  return (
    <div className="cart-popup-overlay" onClick={handleClose}>
      <div className="cart-popup" onClick={(e) => e.stopPropagation()}>
        <button className="close-popup" onClick={handleClose}>✕</button>
        
        <div className="cart-content">
          <h2>Your Cart</h2>
          
          {Object.values(cartItems).every(qty => qty === 0) ? (
            <p className="empty-cart-message">Your cart is empty</p>
          ) : (
            <>
              <table className="cart-table">
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th>Total</th>
                    <th>Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {food_list.map((item) => {
                    if (cartItems[item._id] > 0) {
                      return (
                        <tr key={item._id}>
                          <td>{item.name}</td>
                          <td>Rs {item.price}</td>
                          <td>{cartItems[item._id]}</td>
                          <td>Rs {item.price * cartItems[item._id]}</td>
                          <td>
                            <span 
                              className="cross" 
                              onClick={() => removeFromCart(item._id)}
                            >
                              x
                            </span>
                          </td>
                        </tr>
                      );
                    }
                    return null;
                  })}
                </tbody>
              </table>

              <div className="cart-totals-section">
                <h3>Cart Totals</h3>
                <div className="cart-total-row">
                  <span>SubTotal:</span>
                  <span>Rs {getTotalCartAmount()}</span>
                </div>
                <div className="cart-total-row">
                  <span>Delivery Fee:</span>
                  <span>Rs {getTotalCartAmount() === 0 ? 0 : 2}</span>
                </div>
                <div className="cart-total-row grand-total">
                  <span>Total:</span>
                  <span>Rs {getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</span>
                </div>
                <button 
                  className="checkout-button"
                  onClick={() => navigate('/order')}
                >
                  PROCEED TO CHECKOUT
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;