import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './PlaceOrder.css';
import { StoreContext } from '../../context/StoreContext';
import eSewaIcon from '../../assets/esewa.png';
import phonePeIcon from '../../assets/fonepay.png';

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [loadingLocation, setLoadingLocation] = useState(false);
  const [errorLocation, setErrorLocation] = useState('');
  const navigate = useNavigate();

  const handlePaymentSelect = (method) => {
    setSelectedPayment(method);
  };

  const handleGetLocation = async () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser");
      return;
    }

    setLoadingLocation(true);
    setErrorLocation(''); // Reset error

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        try {
          const response = await fetch(
            `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=60c077776a394a8dbbda4becfe848d8b`
          );

          if (!response.ok) {
            throw new Error('Failed to fetch data from the geocoding API');
          }

          const data = await response.json();
          const location = data.results[0]?.formatted || "Location not found";

          // Set location in input field
          document.querySelector("input[placeholder='Address']").value = location;
        } catch (error) {
          console.error("Error fetching address:", error);
          setErrorLocation('Failed to fetch address. Please try again.');
        }
        setLoadingLocation(false);
      },
      (error) => {
        console.error("Geolocation error:", error);
        setErrorLocation('Failed to get your location.');
        setLoadingLocation(false);
      }
    );
  };

  const handlePayment = async () => {
    if (!selectedPayment) {
      alert('Please select a payment method');
      return;
    }

    // For now, simulate payment success and redirect
    if (selectedPayment === 'esewa') {
      console.log('Initiating eSewa payment');
      // Call backend or eSewa API here
      // On success:
      // navigate('/placeorder/PaymentSuccess');
      // On failure, you can navigate to PaymentFailure or show error
    } else if (selectedPayment === 'phonepe') {
      console.log('Initiating PhonePe payment');
      // Call backend or PhonePe API here
      // navigate('/placeorder/PaymentSuccess');
    }
  };

  const totalAmount = getTotalCartAmount();
  const deliveryFee = totalAmount === 0 ? 0 : 2;
  const grandTotal = totalAmount + deliveryFee;

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
          <input type="text" placeholder='City' required />
          <input type="tel" placeholder='Phone number' required />
          <input type="text" placeholder='Address' required />
          
          {errorLocation && <p className="error-message">{errorLocation}</p>}

          <button type="button" className="location-btn" onClick={handleGetLocation}>
            {loadingLocation ? "Getting Location..." : "Use My Current Location"}
          </button>
        </div>

        <div className="place-order-right">
          <div className="order-summary">
            <h2 className="section-title">Order Summary</h2>
            <div className="summary-details">
              <div className="summary-row">
                <p>SubTotal</p>
                <p>Rs {totalAmount}</p>
              </div>
              <div className="summary-row">
                <p>Delivery fee</p>
                <p>Rs {deliveryFee}</p>
              </div>
              <div className="divider"></div>
              <div className="summary-row total-row">
                <b>Total</b>
                <b>Rs {grandTotal}</b>
              </div>
            </div>

            <h3 className="payment-label">Proceed through these payment options:</h3>
            <div className="payment-options" style={{ display: 'flex', gap: '20px' }}>
              <button
                type="button"
                className={`payment-method-button ${selectedPayment === 'esewa' ? 'selected' : ''}`}
                onClick={() => handlePaymentSelect('esewa')}
                style={{
                  border: selectedPayment === 'esewa' ? '2px solid green' : '1px solid #ccc',
                  padding: '10px 20px',
                  borderRadius: '10px',
                  cursor: 'pointer',
                  background: 'white'
                }}
              >
                <img src={eSewaIcon} alt="eSewa" className="payment-icon" />
              </button>
              <button
                type="button"
                className={`payment-method-button ${selectedPayment === 'phonepe' ? 'selected' : ''}`}
                onClick={() => handlePaymentSelect('phonepe')}
                style={{
                  border: selectedPayment === 'phonepe' ? '2px solid green' : '1px solid #ccc',
                  padding: '10px 20px',
                  borderRadius: '10px',
                  cursor: 'pointer',
                  background: 'white'
                }}
              >
                <img src={phonePeIcon} alt="PhonePe" className="payment-icon" />
              </button>
            </div>

            {/* Show Pay Now only if a payment option is selected */}
            {selectedPayment && (
              <button
                type="button"
                className="payment-submit"
                onClick={handlePayment}
                style={{ marginTop: '20px', cursor: 'pointer' }}
              >
                Pay Now with {selectedPayment === 'esewa' ? 'eSewa' : 'PhonePe'}
              </button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default PlaceOrder;
