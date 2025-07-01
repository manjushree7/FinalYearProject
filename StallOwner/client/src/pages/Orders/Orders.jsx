import React, { useState } from 'react';
import './Orders.css';


// Sample initial orders data
const initialOrders = [
  { id: 1, customer: 'Hari', item: 'Veg Salad', status: 'Preparing' },
  { id: 2, customer: 'Maya', item: 'Chicken Sandwich', status: 'On the way' },
  { id: 3, customer: 'Ram', item: 'Raspberry Cheesecake', status: 'Preparing' },
  { id: 4, customer: 'Sita', item: 'Veg Meal', status: 'Delivered' },
];

const statusOptions = ['Preparing', 'On the way', 'Delivered'];

const Orders = () => {
  const [orders, setOrders] = useState(initialOrders);

  const updateOrderStatus = (orderId, newStatus) => {
    setOrders(prevOrders =>
      prevOrders.map(order =>
        order.id === orderId ? { ...order, status: newStatus } : order
      )
    );
  };

  const groupedOrders = statusOptions.reduce((acc, status) => {
    acc[status] = orders.filter(order => order.status === status);
    return acc;
  }, {});

  return (
    <div className="orders-page">
      <h1>Orders Management</h1>

      <div className="orders-container">
        {statusOptions.map(status => (
          <div key={status} className={`orders-section status-${status.replace(/\s+/g, '-').toLowerCase()}`}>
            <h2 className="section-title">{status}</h2>

            {groupedOrders[status].length === 0 ? (
              <p className="no-orders">No orders in this section.</p>
            ) : (
              <table className="orders-table">
                <thead>
                  <tr>
                    <th>Order ID</th>
                    <th>Customer</th>
                    <th>Item</th>
                    <th>Change Status</th>
                  </tr>
                </thead>
                <tbody>
                  {groupedOrders[status].map(order => (
                    <tr key={order.id} className={`order-row status-${order.status.replace(/\s+/g, '-').toLowerCase()}`}>
                      <td>{order.id}</td>
                      <td>{order.customer}</td>
                      <td>{order.item}</td>
                      <td>
                        <select
                          value={order.status}
                          onChange={e => updateOrderStatus(order.id, e.target.value)}
                        >
                          {statusOptions.map(option => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
