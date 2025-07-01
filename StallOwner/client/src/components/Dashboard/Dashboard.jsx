// Dashboard.jsx
import React from 'react';
import { FiUsers, FiShoppingBag } from 'react-icons/fi';
import './Dashboard.css';
import { Navigate } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h2 className="dashboard-title">Dashboard Overview</h2>
      
      <div className="dashboard-content">
        {/* Stats Section */}
        <div className="stats-container">
          <div className="stat-card">
            <div className="stat-icon">
              <FiUsers />
            </div>
            <div className="stat-content">
              <h3>Total Customers</h3>
              <p>45</p>
              <span className="stat-trend positive">
                +21 this month
              </span>
            </div>
          </div>
          
          <div className="stat-card">
            <div className="stat-icon">
              <FiShoppingBag />
            </div>
            <div className="stat-content">
              <h3>Average Orders</h3>
              <p>24/day</p>
              <span className="stat-trend">
                View order analytics
              </span>
            </div>
          </div>
        </div>

        {/* Compact Action Sections */}
        <div className="action-sections">
          <div className="action-section">
            <h3>Manage your food items</h3>
            <button className="action-button" onClick={Navigate}>
              Add New Food Items
            </button>
          </div>
          
          <div className="action-section">
            <h3>Join events with community</h3>
            <button className="action-button">
              Request To Participate In Event
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;