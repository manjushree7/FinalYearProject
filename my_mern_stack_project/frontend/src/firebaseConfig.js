// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAg3GLged2o7Nd1TSPfTiY3TUltEkVb3jg",
//   authDomain: "shoplocally-ed2ae.firebaseapp.com",
//   projectId: "shoplocally-ed2ae",
//   storageBucket: "shoplocally-ed2ae.firebasestorage.app",
//   messagingSenderId: "979291022855",
//   appId: "1:979291022855:web:9834a142b03caa5ee2eca2",
//   measurementId: "G-4CB0B4CEN9"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);


import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAg3GLged2o7Nd1TSPfTiY3TUltEkVb3jg",
  authDomain: "shoplocally-ed2ae.firebaseapp.com",
  projectId: "shoplocally-ed2ae",
  storageBucket: "shoplocally-ed2ae.firebasestorage.app",
  messagingSenderId: "979291022855",
  appId: "1:979291022855:web:9834a142b03caa5ee2eca2",
  measurementId: "G-4CB0B4CEN9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Firebase Auth initialization
const googleProvider = new GoogleAuthProvider(); // Google authentication provider

export { auth, googleProvider };
