import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPopup.css';
import { auth, googleProvider } from '../../firebaseConfig';
import {
  signInWithPopup,
  setPersistence,
  browserLocalPersistence,
} from 'firebase/auth';
import api from '../../utils/api.js'; // axios instance
import useUserStore from '../../zustand/store.jsx'; // zustand store

const LoginPopup = ({ setShowLogin, initialFormState = 'Login' }) => {
  const [currState, setCurrState] = useState(initialFormState); // 'Login' or 'Sign Up'
  const [error, setError] = useState('');
  const [role, setRole] = useState('Customer'); // role values: 'Customer' or 'StallOwner'
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const login = useUserStore((state) => state.login); // make sure your zustand store has "login" method

  useEffect(() => {
    setCurrState(initialFormState);
  }, [initialFormState]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setShowLogin(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [setShowLogin]);

  const handleGoogleSignIn = async () => {
    try {
      setError('');
      setLoading(true);
      await setPersistence(auth, browserLocalPersistence);
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      const token = await user.getIdToken();

      login(
        {
          id: user.uid,
          name: user.displayName,
          email: user.email,
          role,
        },
        token
      );

      setShowLogin(false);
      navigate(role === 'StallOwner' ? '/stallowner/dashboard' : '/home');
    } catch (err) {
      console.error('Google sign-in failed:', err.message);
      setError('Google login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const form = e.target;
    const name = form.querySelector('input[placeholder="Your name"]')?.value;
    const email = form.querySelector('input[placeholder="Your email"]').value;
    const password = form.querySelector('input[placeholder="Your password"]').value;

    const payload =
      currState === 'Login'
        ? { email, password }
        : { name, email, password, role };

    try {
      const res = await api.post(
        currState === 'Login' ? '/auth/login' : '/auth/signup',
        payload
      );

      if (currState === 'Sign Up') {
        if (res.data.message === 'user created successfully') {
          // Show success message and switch to login form
          setError('Account created! Please login.');
          setCurrState('Login');
        } else {
          setError(res.data.message || 'Signup successful. Please login.');
          setCurrState('Login');
        }
      } else {
        // On login, save user and token to store and navigate
        login(res.data.user, res.data.token);
        setShowLogin(false);
        navigate(res.data.user.role === 'StallOwner' ? '/stallowner/dashboard' : '/home');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
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
                  disabled={loading}
                >
                  <img
                    src="https://developers.google.com/identity/images/g-logo.png"
                    alt="Google logo"
                  />
                  Continue with Google
                </button>
              )}

              {currState !== 'Login' && (
                <input type="text" placeholder="Your name" required disabled={loading} />
              )}
              <input
                type="email"
                placeholder="Your email"
                required
                disabled={loading}
              />
              <input
                type="password"
                placeholder="Your password"
                required
                disabled={loading}
              />

              <div className="role-selection">
                <label>I am a:</label>
                <div className="role-options">
                  <button
                    type="button"
                    className={`role-btn ${role === 'Customer' ? 'active' : ''}`}
                    onClick={() => setRole('Customer')}
                    disabled={loading}
                  >
                    Customer
                  </button>
                  <button
                    type="button"
                    className={`role-btn ${role === 'StallOwner' ? 'active' : ''}`}
                    onClick={() => setRole('StallOwner')}
                    disabled={loading}
                  >
                    Stall Owner
                  </button>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="submit-btn"
              disabled={loading}
            >
              {loading ? (currState === 'Sign Up' ? 'Creating account...' : 'Logging in...') : (currState === 'Sign Up' ? 'Create account' : 'Login')}
            </button>

            <div className="login-popup-condition">
              <input type="checkbox" required id="terms-agreement" disabled={loading} />
              <label htmlFor="terms-agreement">
                By continuing, I agree to the terms of use & privacy policy.
              </label>
            </div>

            <div className="state-toggle">
              {currState === 'Login' ? (
                <p>
                  Create a new account?{' '}
                  <span
                    onClick={() => {
                      setError('');
                      setCurrState('Sign Up');
                    }}
                    style={{ cursor: 'pointer', color: 'blue' }}
                  >
                    Click here
                  </span>
                </p>
              ) : (
                <p>
                  Already have an account?{' '}
                  <span
                    onClick={() => {
                      setError('');
                      setCurrState('Login');
                    }}
                    style={{ cursor: 'pointer', color: 'blue' }}
                  >
                    Login here
                  </span>
                </p>
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
