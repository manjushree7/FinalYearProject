import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiBell } from 'react-icons/fi';
import { useNotifications } from '../../context/NotificationContext'; // Updated import path
import './Navbar.css';
import logo from '../../assets/logo.png';

const Navbar = () => {
  const navigate = useNavigate();
  const [showNotifications, setShowNotifications] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const notificationsRef = useRef(null);
  
  const { 
    notifications, 
    markAsRead, 
    markAllAsRead 
  } = useNotifications();

  const handleProfileClick = () => {
    navigate('/stallowner/profile');
  };

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  const displayedNotifications = showAll 
    ? notifications 
    : notifications.slice(0, 3);

  const unreadCount = notifications.filter(n => !n.read).length;

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (notificationsRef.current && !notificationsRef.current.contains(event.target)) {
        setShowNotifications(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="navbar">
      <div className="navbar-content">
        <div className="logo-container">
          <img src={logo} alt="ShopLocally" className="logo" />
        </div>
        
        <div className="navbar-right">
          <div className="notification-wrapper" ref={notificationsRef}>
            <button 
              className="notification-btn"
              onClick={() => setShowNotifications(!showNotifications)}
              aria-label="Notifications"
            >
              <FiBell size={20} color="#555" />
              {unreadCount > 0 && (
                <span className="notification-badge">{unreadCount}</span>
              )}
            </button>
            
            {showNotifications && (
              <div className="notifications-popup">
                <div className="notifications-header">
                  <h4>Notifications</h4>
                  {unreadCount > 0 && (
                    <span 
                      className="mark-all-read" 
                      onClick={markAllAsRead}
                      aria-label="Mark all notifications as read"
                    >
                      Mark all as read
                    </span>
                  )}
                </div>
                <div className="notifications-list">
                  {displayedNotifications.map(notification => (
                    <div 
                      key={notification.id} 
                      className={`notification-item ${notification.read ? 'read' : 'unread'} ${notification.isApproval ? 'approval' : ''}`}
                      onClick={() => markAsRead(notification.id)}
                      aria-label={notification.read ? 'Read notification' : 'Unread notification'}
                    >
                      <p className="notification-text">{notification.text}</p>
                      <span className="notification-time">{notification.time}</span>
                    </div>
                  ))}
                </div>
                <div 
                  className="notifications-footer" 
                  onClick={toggleShowAll}
                  aria-label={showAll ? 'Show fewer notifications' : 'Show all notifications'}
                >
                  {showAll ? 'Show less' : 'View all notifications'}
                </div>
              </div>
            )}
          </div>
          
          <div 
            className="profile-section" 
            onClick={handleProfileClick}
            aria-label="User profile"
          >
            <div className="profile-info">
              <span className="user-name">Sarah Johnson</span>
              <span className="user-role">STALL OWNER</span>
            </div>
            <img 
              src="https://randomuser.me/api/portraits/women/44.jpg" 
              alt="Profile" 
              className="profile-pic" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;