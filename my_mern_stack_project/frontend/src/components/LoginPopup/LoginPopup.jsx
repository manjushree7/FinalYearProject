import React, { useState, useEffect } from 'react';
import './LoginPopup.css';
import { assets } from '../../assets/assets';
import { auth, googleProvider } from '../../firebaseConfig';
import { signInWithRedirect } from 'firebase/auth';

const LoginPopup = ({ setShowLogin, initialFormState = 'Login' }) => {
  const [currState, setCurrState] = useState(initialFormState);
  const [error, setError] = useState('');
  const [role, setRole] = useState('Customer');

  // Set initial form state when prop changes
  useEffect(() => {
    setCurrState(initialFormState);
  }, [initialFormState]);

  // Lock body scroll when popup is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  // Handle escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setShowLogin(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [setShowLogin]);

  const handleGoogleSignIn = () => {
    signInWithRedirect(auth, googleProvider);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currState === 'Login') {
      console.log("Logging in as", role);
    } else {
      console.log("Creating new", role, "account...");
    }
  };

  return (
    <div 
      className="login-popup-overlay"
      onClick={(e) => e.target === e.currentTarget && setShowLogin(false)}
    >
      <div className="login-popup-content">
        <div className="login-form">
          <button 
            className="close-button" 
            onClick={() => setShowLogin(false)}
            aria-label="Close login popup"
          >
            &times;
          </button>
          
          <form className="login-popup-container" onSubmit={handleSubmit}>
            <div className="login-popup-title">
              <h2>{currState}</h2>
            </div>

            <div className="login-popup-inputs">
              {currState === 'Login' && (
                <button
                  type="button"
                  className="google-sign-in"
                  onClick={handleGoogleSignIn}
                >
                  <img src="https://developers.google.com/identity/images/g-logo.png" alt="Google logo" />
                  Continue with Google
                </button>
              )}
              
              {currState !== 'Login' && <input type="text" placeholder="Your name" required />}
              
              <input type="email" placeholder="Your email" required />
              <input type="password" placeholder="Your password" required />

              <div className="role-selection">
                <label>I am a:</label>
                <div className="role-options">
                  <button
                    type="button"
                    className={`role-btn ${role === 'Customer' ? 'active' : ''}`}
                    onClick={() => setRole('Customer')}
                  >
                    Customer
                  </button>
                  <button
                    type="button"
                    className={`role-btn ${role === 'Stall Owner' ? 'active' : ''}`}
                    onClick={() => setRole('Stall Owner')}
                  >
                    Stall Owner
                  </button>
                </div>
              </div>
            </div>

            <button type="submit" className="submit-btn">
              {currState === 'Sign Up' ? 'Create account' : 'Login'}
            </button>

            <div className="login-popup-condition">
              <input type="checkbox" required id="terms-agreement" />
              <label htmlFor="terms-agreement">
                By continuing, I agree to the terms of use & privacy policy.
              </label>
            </div>

            <div className="state-toggle">
              {currState === 'Login' ? (
                <p>Create a new account? <span onClick={() => setCurrState('Sign Up')}>Click here</span></p>
              ) : (
                <p>Already have an account? <span onClick={() => setCurrState('Login')}>Login here</span></p>
              )}
            </div>

            {error && <p className="error">{error}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPopup;