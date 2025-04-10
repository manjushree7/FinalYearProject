import React from 'react';
import { NavLink } from 'react-router-dom';
import { FiHome, FiShoppingBag, FiUsers, FiArchive, FiSettings } from 'react-icons/fi';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="admin-sidebar">
      <nav className="sidebar-nav">
        <div className="nav-section">
          <h4 className="section-title">Dashboard</h4>
          <NavLink to="/dashboard" className="nav-item" end>
            <FiHome className="nav-icon" />
            <span>Overview</span>
          </NavLink>
        </div>

        <div className="nav-section">
          <h4 className="section-title">Orders</h4>
          <NavLink to="/orders" className="nav-item" end>
            <FiShoppingBag className="nav-icon" />
            <span>Order List</span>
          </NavLink>
          <NavLink to="/orders/track" className="nav-item">
            <FiShoppingBag className="nav-icon" />
            <span>Track Order</span>
          </NavLink>
        </div>

        <div className="nav-section">
          <h4 className="section-title">Management</h4>
          <NavLink to="/menu" className="nav-item" end>
            <FiArchive className="nav-icon" />
            <span>Menu Items</span>
          </NavLink>
          <NavLink to="/customers" className="nav-item" end>
            <FiUsers className="nav-icon" />
            <span>Customers</span>
          </NavLink>
          <NavLink to="/stalls" className="nav-item" end>
            <FiUsers className="nav-icon" />
            <span>Stalls</span>
          </NavLink>
        </div>

        {/* <div className="nav-section">
          <NavLink to="/settings" className="nav-item" end>
            <FiSettings className="nav-icon" />
            <span>Settings</span>
          </NavLink>
        </div> */}

        <div className="sidebar-cta">
          <h4>Share your stall with community</h4>
          <button className="upload-btn">
            Add New Stall
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;