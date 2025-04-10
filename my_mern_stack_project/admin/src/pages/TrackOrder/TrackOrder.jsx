import React, { useState } from 'react';
import { FiSearch, FiFilter } from 'react-icons/fi';
import './TrackOrder.css';
import { Link } from 'react-router-dom';

const TrackOrder = () => {
  const [orders, setOrders] = useState([
    { id: '#ORD-1001', customer: 'John Doe', date: '2023-05-15', status: 'Delivered', amount: 'Rs 125.00' },
    { id: '#ORD-1002', customer: 'Jane Smith', date: '2023-05-14', status: 'Delivered', amount: 'Rs 89.50' }, 
    { id: '#ORD-1003', customer: 'Robert Johnson', date: '2023-05-13', status: 'Processing', amount: 'Rs 215.75' },
    { id: '#ORD-1004', customer: 'Emily Davis', date: '2023-05-12', status: 'Cancelled', amount: 'Rs 45.25' },
    { id: '#ORD-1005', customer: 'Michael Brown', date: '2023-05-11', status: 'Delivered', amount: 'Rs 175.50' },
    { id: '#ORD-1006', customer: 'Sarah Wilson', date: '2023-05-10', status: 'Processing', amount: 'Rs 95.00' },
  ]);

  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
    console.log('Search query:', event.target.value); // Log the search query
  };

  const filteredOrders = orders.filter((order) => {
    const isFiltered = (
      order.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.status.toLowerCase().includes(searchQuery.toLowerCase())
    );
    console.log('Filtered Orders:', isFiltered ? order : 'No match'); // Log filtered orders
    return isFiltered;
  });

  const handleFilter = () => {
    console.log('Filter button clicked');
    // Add filter logic here if needed
  };

  return (
    <div className="orders-page">
      <div className="orders-header">
        <h2>Order List</h2>
        <div className="orders-actions">
          <div className="search-box">
            <FiSearch className="search-icon" />
            <input 
              type="text" 
              placeholder="Search orders..." 
              value={searchQuery} 
              onChange={handleSearch} 
              id="search-orders" // Added unique id
            />
          </div>
          <button className="filter-btn" onClick={handleFilter}>
            <FiFilter /> Filters
          </button>
        </div>
      </div>

      <div className="orders-table-container">
        <table className="orders-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Date</th>
              <th>Status</th>
              <th>Amount</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.customer}</td>
                <td>{order.date}</td>
                <td>
                  {/* Apply dynamic class based on order status */}
                  <span className={`status-badge status-${order.status.toLowerCase()}`}>
                    {order.status}
                  </span>
                </td>
                <td>{order.amount}</td>
                <td>
                  <button className="delete-btn">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TrackOrder;
