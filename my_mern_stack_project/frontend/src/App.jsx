import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Footer from "./components/Footer/Footer";
import LoginPopup from './components/LoginPopup/LoginPopup';
import Stalls from "./pages/Stalls/Stalls";
import StallList from "./pages/Stalls/StallList";
import StallDetails from "./pages/Stalls/StallDetails";  // Import StallDetails component
import Search from "./pages/Search/Search";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : null}
      <div className="app">
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
          <Route path="/stalls" element={<Stalls />} />
          <Route path="/stall-list" element={<StallList />} />
          <Route path="/stall/:id" element={<StallDetails />} />  {/* Dynamic route for Stall Details */}
          <Route path="/search" element={<Search />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
