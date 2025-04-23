import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
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

const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div className="app-container">
      {showLogin && <LoginPopup setShowLogin={setShowLogin} />}
      <Navbar setShowLogin={setShowLogin} />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
          <Route path="/stalls" element={<Stalls />} />
          <Route path="/stall-list" element={<StallList />} />
          <Route path="/stall/:id" element={<StallDetails />} />
          <Route path="/search" element={<Search />} />
          <Route path="/events" element={<Events />} />
          <Route path="/event/:id" element={<EventDetails />} />
        </Routes>
      </main>
      {/* Footer is REMOVED here (add it manually to pages where needed) */}
    </div>
  );
};

export default App;