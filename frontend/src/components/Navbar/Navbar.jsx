import React, { useContext, useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import user_icon1 from '../../assets/user_icon1.jpg';  // Direct import of profile image

const Navbar = ({ setShowLogin, isLoggedIn /* , onLogout */ }) => {
  const [menu, setMenu] = useState("home");
  const { getTotalCartAmount } = useContext(StoreContext);
  const navigate = useNavigate();

  const handleContactClick = (e) => {
    e.preventDefault();
    setMenu("contact-us");

    if (window.location.pathname !== '/' && window.location.pathname !== '/home') {
      navigate('/');
    }

    setTimeout(() => {
      const footer = document.getElementById('footer');
      if (footer) {
        footer.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleMenuClick = (e) => {
    e.preventDefault();
    setMenu("menu");

    if (window.location.pathname !== '/' && window.location.pathname !== '/home') {
      navigate('/');
      setTimeout(() => {
        scrollToMenu();
      }, 300);
    } else {
      scrollToMenu();
    }
  };

  const scrollToMenu = () => {
    const menuSection = document.getElementById('explore-menu');
    if (menuSection) {
      menuSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className='navbar'>
      <Link to='/'><img src={assets.logo} alt="logo" className='logo' /></Link>

      <ul className="navbar-menu">
        <Link to='/' onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>home</Link>
        <a href="#explore-menu" onClick={handleMenuClick} className={menu === "menu" ? "active" : ""}>menu</a>
        <Link to='/stalls' onClick={() => setMenu("stall")} className={menu === "stall" ? "active" : ""}>stalls</Link>
        <Link to='/events' onClick={() => setMenu("events")} className={menu === "events" ? "active" : ""}>events</Link>
        <Link to='#' onClick={handleContactClick} className={menu === "contact-us" ? "active" : ""}>contact us</Link>
      </ul>

      <div className="navbar-right">
        <div className="navbar-icon">
          <Link to="/search">
            <img src={assets.search_icon} alt="search" />
          </Link>
        </div>

        <div className="navbar-search-icon">
          <Link to='/cart'>
            <img src={assets.basket_icon} alt="cart" />
          </Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>

        {/* Show Sign in only if NOT logged in */}
        {!isLoggedIn && (
          <button onClick={() => setShowLogin(true)}>Sign in</button>
        )}

        {/* Show profile icon ONLY if logged in */}
        {isLoggedIn && (
          <Link to="/profile" className="profile-avatar">
            <img src={user_icon1} alt="profile" />
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
