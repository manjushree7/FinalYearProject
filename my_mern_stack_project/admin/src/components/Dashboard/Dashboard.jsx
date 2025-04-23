// Dashboard.jsx
import React from 'react';
import { FiUsers, FiShoppingBag, FiTrendingUp } from 'react-icons/fi';
import './Dashboard.css';

const Dashboard = () => {
  const stats = {
    totalCustomers: 45,
    activeStalls: 7,
    newCustomersThisMonth: 21,
  };

  const recentCustomers = [
    { id: 1, name: 'John Doe', joined: '2023-05-15', orders: 12 },
    { id: 2, name: 'Jane Smith', joined: '2023-05-10', orders: 8 },
    { id: 3, name: 'Robert Johnson', joined: '2023-05-05', orders: 5 },
    { id: 4, name: 'Emily Davis', joined: '2023-04-28', orders: 3 }
  ];

  return (
    <div className="dashboard">
      <h2 className="dashboard-title">Dashboard Overview</h2>
      
      <div className="dashboard-layout">
        {/* Left Column - Stats Cards */}
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon">
              <FiUsers />
            </div>
            <div className="stat-content">
              <h3>Total Customers</h3>
              <p>{stats.totalCustomers.toLocaleString()}</p>
              <span className="stat-trend positive">
                +{stats.newCustomersThisMonth} this month
              </span>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">
              <FiShoppingBag />
            </div>
            <div className="stat-content">
              <h3>Active Stalls</h3>
              <p>{stats.activeStalls}</p>
              <span className="stat-trend">
                View all stalls
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;