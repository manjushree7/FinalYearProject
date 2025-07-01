import React, { useEffect, useState } from 'react';
import './TrackOrder.css';

const initialOrders = [
  { id: 1, customer: 'Hari', item: 'Veg Salad', status: 'Incoming' },
  { id: 2, customer: 'Maya', item: 'Chicken Sandwich', status: 'Incoming' },
  { id: 3, customer: 'Ram', item: 'Raspberry Cheesecake', status: 'Incoming' },
  { id: 4, customer: 'Sita', item: 'Veg Meal', status: 'Incoming' },
  { id: 5, customer: 'John', item: 'Pizza', status: 'Incoming' },
  { id: 6, customer: 'Rita', item: 'Burger', status: 'Incoming' },
];

const TrackOrder = () => {
  const [orders, setOrders] = useState(initialOrders);
  const [timers, setTimers] = useState({});

  // Update orders status
  const moveToNextStage = (orderId, newStatus) => {
    setOrders(prev =>
      prev.map(order =>
        order.id === orderId ? { ...order, status: newStatus } : order
      )
    );

    if (newStatus === 'Preparing') {
      const currentTime = new Date();
      setTimers(prev => ({
        ...prev,
        [orderId]: { start: currentTime, timeLimit: prev[orderId]?.timeLimit || 0 },
      }));
    } else if (newStatus === 'On The Way') {
      setTimers(prev => {
        const updated = { ...prev };
        delete updated[orderId];
        return updated;
      });
    }
  };

  // Set time to complete and move to Preparing
  const setTimeAndMove = (orderId, timeLimit) => {
    const now = new Date();
    setTimers(prev => ({
      ...prev,
      [orderId]: { start: now, timeLimit: parseInt(timeLimit) },
    }));
    moveToNextStage(orderId, 'Preparing');
  };

  // Automatically highlight overdue orders in Preparing
  const isOverdue = (orderId) => {
    const timer = timers[orderId];
    if (!timer) return false;
    const now = new Date();
    const elapsed = (now - new Date(timer.start)) / (1000 * 60); // in minutes
    return elapsed > timer.timeLimit;
  };

  const groupedOrders = {
    Incoming: orders.filter(order => order.status === 'Incoming'),
    Preparing: orders.filter(order => order.status === 'Preparing'),
    'On The Way': orders.filter(order => order.status === 'On The Way'),
  };

  return (
    <div className="orders-page">
      <h1>Order Tracking</h1>
      <div className="orders-container">
        {Object.entries(groupedOrders).map(([status, sectionOrders]) => (
          <div key={status} className="orders-section">
            <h2 className="section-title">{status} Orders</h2>
            {sectionOrders.length === 0 ? (
              <p className="no-orders">No orders in this section.</p>
            ) : (
              <table className="orders-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Customer</th>
                    <th>Item</th>
                    {status === 'Incoming' && <th>Time to Make (min)</th>}
                    {status !== 'Incoming' && <th>Actions</th>}
                  </tr>
                </thead>
                <tbody>
                  {sectionOrders.map(order => (
                    <tr
                      key={order.id}
                      className={`order-row ${
                        isOverdue(order.id) && status === 'Preparing' ? 'overdue' : ''
                      }`}
                    >
                      <td>{order.id}</td>
                      <td>{order.customer}</td>
                      <td>{order.item}</td>
                      {status === 'Incoming' ? (
                        <td>
                          <input
                            type="number"
                            placeholder="e.g. 10"
                            onKeyDown={e => {
                              if (e.key === 'Enter' && e.target.value) {
                                setTimeAndMove(order.id, e.target.value);
                              }
                            }}
                          />
                        </td>
                      ) : (
                        <td>
                          <button
                            onClick={() =>
                              moveToNextStage(
                                order.id,
                                status === 'Preparing' ? 'On The Way' : 'Completed'
                              )
                            }
                          >
                            Done
                          </button>
                        </td>
                      )}
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

export default TrackOrder;
