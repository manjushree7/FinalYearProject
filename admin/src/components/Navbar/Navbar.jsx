import React from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="navbar-content">
        <div className="logo-container">
          <img className='logo' src={assets.logo} alt="ShopLocally Logo" />
        </div>
        <div className="profile-container">
          <div className="profile-info">
            <span className="greeting">Good Morning!</span>
            <span className="admin-label">Admin</span>
          </div>
          <img className='profile' src={assets.profile_image} alt="Admin Profile" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;