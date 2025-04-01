import React from "react";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Footer from "./components/Footer/Footer";
import LoginPopup from './components/LoginPopup/LoginPopup';
import Stalls from "./pages/Stalls/Stalls";
import StallList from "./pages/Stalls/StallList";
import Search from "./pages/Search/Search";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);

   return (
     <>
       {showLogin ? <LoginPopup /> : null}
       <div className="app">
         <Navbar setShowLogin={setShowLogin} /> {/* Navbar placed at the top */}
         <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/cart" element={<Cart />} />
           <Route path="/order" element={<PlaceOrder />} />
           <Route path="/stalls" element={<Stalls />} />
           <Route path="/stall-list" element={<StallList />} />
           <Route path="/search" element={<Search />} />
         </Routes>
       </div>
       <Footer />
     </>
   );
 };

 export default App;

