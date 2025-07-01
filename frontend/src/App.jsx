import React, { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import LoginPopup from './components/LoginPopup/LoginPopup';
import Stalls from "./pages/Stalls/Stalls";
import StallList from "./pages/Stalls/StallList";
import StallDetails from "./pages/Stalls/StallDetails";
import Search from "./pages/Search/Search";
import LandingPage from './pages/LandingPage/LandingPage.jsx';
import Events from './pages/Events/Events.jsx';
import EventDetails from './pages/Events/EventDetails';
import PaymentSuccess from './pages/PlaceOrder/PaymentSuccess';
import PaymentFailure from './pages/PlaceOrder/PaymentFailure';
import ProfilePage from './pages/ProfilePage/ProfilePage.jsx';
import useStore from './zustand/store.jsx';

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const isAuthenticated = useStore(state => state.isAuthenticated);

  return (
    <div className="app-container">
      {showLogin && (
        <LoginPopup setShowLogin={setShowLogin} />
      )}

      <Navbar
        key={isAuthenticated ? "logged-in" : "logged-out"}
        setShowLogin={setShowLogin}
        isLoggedIn={isAuthenticated}
      />

      <main className="main-content">
        <Routes>
          <Route
            path="/"
            element={
              isAuthenticated ? (
                <Navigate to="/home" replace />
              ) : (
                <LandingPage showLogin={showLogin} setShowLogin={setShowLogin} />
              )
            }
          />
          <Route path="/home" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
          <Route path="/stalls" element={<Stalls />} />
          <Route path="/stall-list" element={<StallList />} />
          <Route path="/stall/:id" element={<StallDetails />} />
          <Route path="/search" element={<Search />} />
          <Route path="/events" element={<Events />} />
          <Route path="/event/:id" element={<EventDetails />} />
          <Route path="/payment-success" element={<PaymentSuccess />} />
          <Route path="/payment-failure" element={<PaymentFailure />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
