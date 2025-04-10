import React from 'react';
import { FiUsers, FiShoppingBag, FiTrendingUp, FiPieChart } from 'react-icons/fi';
import './Dashboard.css';

const Dashboard = () => {
  // Sample data - replace with your actual data
  const stats = {
    totalCustomers: 1243,
    activeStalls: 87,
    newCustomersThisMonth: 142,
    monthlyGrowth: 12.5
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
      
      {/* Stats Cards */}
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

        <div className="stat-card">
          <div className="stat-icon">
            <FiTrendingUp />
          </div>
          <div className="stat-content">
            <h3>Monthly Growth</h3>
            <p>{stats.monthlyGrowth}%</p>
            <span className="stat-trend positive">
              ↑ {stats.monthlyGrowth}% from last month
            </span>
          </div>
        </div>
      </div>

      {/* Recent Customers Table */}
      <div className="dashboard-section">
        <div className="section-header">
          <h3>
            <FiUsers className="section-icon" />
            Recent Customers
          </h3>
          <button className="view-all-btn">View All</button>
        </div>
        
        <div className="customers-table">
          <div className="table-header">
            <div className="table-cell">Customer Name</div>
            <div className="table-cell">Join Date</div>
            <div className="table-cell">Total Orders</div>
            <div className="table-cell">Actions</div>
          </div>
          
          {recentCustomers.map(customer => (
            <div className="table-row" key={customer.id}>
              <div className="table-cell">{customer.name}</div>
              <div className="table-cell">{customer.joined}</div>
              <div className="table-cell">{customer.orders}</div>
              <div className="table-cell">
                <button className="action-btn">View</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;