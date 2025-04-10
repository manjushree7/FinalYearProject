import React from 'react';
import { NavLink } from 'react-router-dom';
import { FiHome, FiShoppingBag, FiUsers, FiArchive, FiSettings } from 'react-icons/fi';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="admin-sidebar">
      {/* Main Navigation */}
      <nav className="sidebar-nav">
        <div className="nav-section">
          <h4 className="section-title">Dashboard</h4>
          <NavLink to="/dashboard" className="nav-item">
            <FiHome className="nav-icon" />
            <span>Overview</span>
          </NavLink>
        </div>

        <div className="nav-section">
          <h4 className="section-title">Orders</h4>
          <NavLink to="/orders" className="nav-item">
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
          <NavLink to="/menu" className="nav-item"> 
            <FiArchive className="nav-icon" />
            <span>Menu Items</span>
          </NavLink>
          <NavLink to="/customers" className="nav-item">
            <FiUsers className="nav-icon" />
            <span>Customers</span>
          </NavLink>
        </div>

        <div className="nav-section">
          <NavLink to="/settings" className="nav-item">
            <FiSettings className="nav-icon" />
            <span>Settings</span>
          </NavLink>
        </div>

        {/* CTA Section */}
        <div className="sidebar-cta" style={{ marginTop: '20px' }}>
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
