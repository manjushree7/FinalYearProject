import React from 'react';
import { FiShoppingBag, FiSearch, FiFilter } from 'react-icons/fi';
import './Orders.css';

const Orders = () => {
  // Updated order statuses with more distinct meanings
  const orders = [
    { id: '#ORD-1001', customer: 'John Doe', date: '2023-05-15', status: 'Delivered', amount: 'Rs 125.00' },
    { id: '#ORD-1002', customer: 'Jane Smith', date: '2023-05-14', status: 'Delivered', amount: 'Rs 89.50' }, 
    { id: '#ORD-1003', customer: 'Robert Johnson', date: '2023-05-13', status: 'Processing', amount: 'Rs 215.75' },
    { id: '#ORD-1004', customer: 'Emily Davis', date: '2023-05-12', status: 'Cancelled', amount: 'Rs 45.25' },
    { id: '#ORD-1005', customer: 'Michael Brown', date: '2023-05-11', status: 'Delivered', amount: 'Rs 175.50' },
    { id: '#ORD-1006', customer: 'Sarah Wilson', date: '2023-05-10', status: 'Processing', amount: 'Rs 95.00' }, 
  ];

  const getStatusClass = (status) => {
    switch (status.toLowerCase()) {
      case 'delivered':
        return 'status-delivered'; // Green - Final completed state
      case 'processing':
        return 'status-processing'; // Yellow - Being prepared
      case 'cancelled':
        return 'status-cancelled'; // Red - Order cancelled
      default:
        return '';
    }
  };  

  return (
    <div className="orders-page">
      <div className="orders-header">
        <h2>
          Order List
        </h2>
        <div className="orders-actions">
          <div className="search-box">
            <FiSearch className="search-icon" />
            <input type="text" placeholder="Search orders..." />
          </div>
          <button className="filter-btn">
            <FiFilter /> Filters
          </button>
        </div>
      </div>

      <div className="order-cards-container">
        <div className="order-card">
          <h3>Total Orders</h3>
          <p>120</p>
        </div>
        <div className="order-card">
          <h3>Pending Orders</h3>
          <p>45</p>
        </div>
        <div className="order-card">
          <h3>Delivered Orders</h3>
          <p>75</p>
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
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.customer}</td>
                <td>{order.date}</td>
                <td>
                  <span className={`status-badge ${getStatusClass(order.status)}`}>
                    {order.status}
                  </span>
                </td>
                <td>{order.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;