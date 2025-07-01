import React, { createContext, useState, useContext } from 'react';
import './Notification.css';

const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([
    { id: 1, text: 'New order received #1234', time: '2 mins ago', read: false },
    { id: 2, text: 'Customer review received', time: '1 hour ago', read: false },
    { id: 3, text: 'Payment processed for order #1228', time: '3 hours ago', read: true }
  ]);

  const addNotification = (notification) => {
    const newNotification = {
      id: Date.now(),
      text: notification.text,
      time: new Date().toLocaleTimeString(),
      read: false,
      isApproval: notification.isApproval || false
    };
    setNotifications(prev => [newNotification, ...prev]);
  };

  const markAsRead = (id) => {
    setNotifications(prev => 
      prev.map(n => n.id === id ? { ...n, read: true } : n)
    );
  };

  const markAllAsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
  };

  return (
    <NotificationContext.Provider 
      value={{ 
        notifications, 
        addNotification, 
        markAsRead,
        markAllAsRead,
        setNotifications 
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotifications = () => useContext(NotificationContext);