import React from 'react';
import './PlaceOrder.css';
import { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);

  return (
    <div className="place-order-container">
      <form className='place-order-form'>
        <div className="place-order-left">
          <h2 className="section-title">Delivery Information</h2>
          <div className="multi-fields">
            <input type="text" placeholder='First name' required />
            <input type="text" placeholder='Last name' required />
          </div>
          <input type="email" placeholder='Email address' required />
          <input type="text" placeholder='Street address' required />
          <div className="multi-fields">
            <input type="text" placeholder='City' required />
            <input type="text" placeholder='Province' required />
          </div>
          <input type="tel" placeholder='Phone number' required />
        </div>
        
        <div className="place-order-right">
          <div className="order-summary">
            <h2 className="section-title">Order Summary</h2>
            <div className="summary-details">
              <div className="summary-row">
                <p>SubTotal</p>
                <p>Rs {getTotalCartAmount()}</p>
              </div>
              <div className="summary-row">
                <p>Delivery fee</p>
                <p>Rs {getTotalCartAmount() === 0 ? 0 : 2}</p>
              </div>
              <div className="divider"></div>
              <div className="summary-row total-row">
                <b>Total</b>
                <b>Rs {getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</b>
              </div>
            </div>
            <button type="submit" className="payment-button">
              PROCEED TO PAYMENT
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PlaceOrder;