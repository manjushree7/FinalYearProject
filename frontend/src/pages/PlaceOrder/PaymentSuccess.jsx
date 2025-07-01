import React, { useEffect, useState } from 'react';

const PaymentSuccess = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Show the popup modal when component mounts
    setShowModal(true);
  }, []);

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Payment Successful 🎉</h1>
      <p>Thank you for your order. Your payment was successful.</p>

      {showModal && (
        <div style={{
          position: 'fixed',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000
        }}>
          <div style={{
            backgroundColor: 'white',
            padding: '2rem',
            borderRadius: '8px',
            textAlign: 'center',
            maxWidth: '400px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.3)'
          }}>
            <h2>Success!</h2>
            <p>Your order has been successfully placed.</p>
            <button 
              onClick={closeModal} 
              style={{
                marginTop: '1rem',
                padding: '0.5rem 1rem',
                cursor: 'pointer',
                backgroundColor: '#4CAF50',
                color: 'white',
                border: 'none',
                borderRadius: '4px'
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentSuccess;
