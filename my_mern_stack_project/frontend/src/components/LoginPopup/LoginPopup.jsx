// import React, { useState } from 'react';
// import './LoginPopup.css';
// import { assets } from '../../assets/assets';
// import { auth, googleProvider } from '../../firebaseConfig';
// import { signInWithPopup } from 'firebase/auth';

// const LoginPopup = ({ setShowLogin }) => {
//   const [currState, setCurrState] = useState('Login');
//   const [error, setError] = useState('');

//   // Google Sign-In function
//   const handleGoogleSignIn = async () => {
//     try {
//       const result = await signInWithPopup(auth, googleProvider);
//       const userCredential = result.user;
//       console.log('User logged in: ', userCredential);
      
//       // Close the login popup after successful login
//       setShowLogin(false); // Ensure this function is passed and working
//     } catch (err) {
//       setError('Error logging in with Google: ' + err.message);
//     }
//   };

//   // Form submission for regular login or sign up
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (currState === 'Login') {
//       // Perform login logic here
//       console.log("Logging in user...");
//     } else {
//       // Perform sign-up logic here
//       console.log("Creating new account...");
//     }
//   };

//   return (
//     <div className="login-popup">
//       <form className="login-popup-container" onSubmit={handleSubmit}>
//         <div className="login-popup-title">
//           <h2>{currState}</h2>
//           <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="close" />
//         </div>

//         <div className="login-popup-inputs">
//           {currState === 'Login' && (
//             <button
//               type="button"
//               className="google-sign-in"
//               onClick={handleGoogleSignIn}
//             >
//               <img src="https://developers.google.com/identity/images/g-logo.png" alt="Google logo" />
//               Continue with Google
//             </button>
//           )}

//           {currState !== 'Login' && <input type="text" placeholder="Your name" required />}
//           <input type="email" placeholder="Your email" required />
//           <input type="password" placeholder="Your password" required />
//         </div>

//         <button type="submit">{currState === 'Sign Up' ? 'Create account' : 'Login'}</button>

//         <div className="login-popup-condition">
//           <input type="checkbox" required />
//           <p>By continuing, I agree to the terms of use & privacy policy.</p>
//         </div>

//         {currState === 'Login' ? (
//           <p> Create a new account? <span onClick={() => setCurrState('Sign Up')}>Click here</span></p>
//         ) : (
//           <p> Already have an account? <span onClick={() => setCurrState('Login')}>Login here</span></p>
//         )}

//         {error && <p className="error">{error}</p>}
//       </form>
//     </div>
//   );
// };

// export default LoginPopup;






import React, { useState } from 'react';
import './LoginPopup.css';
import { assets } from '../../assets/assets';
import { auth, googleProvider } from '../../firebaseConfig';
import { signInWithPopup } from 'firebase/auth';

const LoginPopup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState('Login');
  const [error, setError] = useState('');
  const [role, setRole] = useState('Customer');

  // Google Sign-In function
  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const userCredential = result.user;
      console.log('User logged in: ', userCredential);
      
      // Close the login popup after successful login
      setShowLogin(false);
    } catch (err) {
      setError('Error logging in with Google: ' + err.message);
    }
  };

  // Form submission for regular login or sign-up
  const handleSubmit = (e) => {
    e.preventDefault();
    if (currState === 'Login') {
      console.log("Logging in user...");
    } else {
      console.log("Creating new account...");
      console.log("Selected role:", role);
    }
  };

  return (
    <div className="login-popup">
      <form className="login-popup-container" onSubmit={handleSubmit}>
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="close" />
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

          {currState === 'Sign Up' && (
            <select value={role} onChange={(e) => setRole(e.target.value)} required>
              <option value="Customer">Customer</option>
              <option value="Stall Owner">Stall Owner</option>
            </select>
          )}
        </div>

        <button type="submit">{currState === 'Sign Up' ? 'Create account' : 'Login'}</button>

        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>

        {currState === 'Login' ? (
          <p> Create a new account? <span onClick={() => setCurrState('Sign Up')}>Click here</span></p>
        ) : (
          <p> Already have an account? <span onClick={() => setCurrState('Login')}>Login here</span></p>
        )}

        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
};

export default LoginPopup;
