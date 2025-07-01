import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FiHome, FiShoppingBag, FiCalendar, FiPackage, FiTruck, FiList } from 'react-icons/fi';
import './Sidebar.css';
import { useNotifications } from '../../context/NotificationContext';

const Sidebar = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    stallName: '',
    stallType: '',
    ownerName: '',
    contact: '',
    description: ''
  });
  const { addNotification } = useNotifications();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Stall Request:", formData);

    // Show confirmation alert
    const isConfirmed = window.confirm("Are you sure you want to submit this event request?");
    
    if (isConfirmed) {
      alert("Request has been sent! You'll be notified when approved.");
      
      // Simulate approval after 5-10 seconds (like real processing time)
      const approvalTime = Math.floor(Math.random() * 5000) + 5000; // 5-10 seconds
      
      setTimeout(() => {
        addNotification({
          text: `Your stall "${formData.stallName}" has been approved for the event! You can now move your stall to the designated location.`,
          isApproval: true
        });
        
        // Additional confirmation alert
        alert(`Your stall "${formData.stallName}" has been approved! Check notifications for details.`);
      }, approvalTime);

      // Clear the form
      setFormData({
        stallName: '',
        stallType: '',
        ownerName: '',
        contact: '',
        description: ''
      });

      setShowForm(false);
    }
  };

  return (
    <div className="stall-sidebar">
      <nav className="sidebar-nav">
        <div className="nav-section">
          <h2 className="section-title">Dashboard</h2>
          <NavLink to="/" className="nav-item" end>
            <FiHome className="nav-icon" />
            <span>Overview</span>
          </NavLink>
        </div>

        <div className="nav-section">
          <h2 className="section-title">STALL MANAGEMENT</h2>
          <NavLink to="/my-items" className="nav-item">
            <FiShoppingBag className="nav-icon" />
            <span>My Items</span>
          </NavLink>
          <NavLink to="/stalls" className="nav-item">
            <FiList className="nav-icon" />
            <span>All Stalls</span>
          </NavLink>
        </div>

        <div className="nav-section">
          <h2 className="section-title">EVENTS</h2>
          <NavLink to="/events" className="nav-item">
            <FiCalendar className="nav-icon" />
            <span>Events</span>
          </NavLink>
        </div>

        <div className="nav-section">
          <h2 className="section-title">ORDERS</h2>
          <NavLink to="/orders" className="nav-item">
            <FiPackage className="nav-icon" />
            <span>Orders</span>
          </NavLink>
          <NavLink to="/track-orders" className="nav-item">
            <FiTruck className="nav-icon" />
            <span>Track Order</span>
          </NavLink>
        </div>

        <div className="sidebar-cta">
          <h4>Join an Upcoming Event</h4>
          <button 
            className="action-btn" 
            onClick={() => setShowForm(true)}
            aria-label="Join event"
          >
            Join Event
          </button>
        </div>
      </nav>

      {showForm && (
        <div className="modal-overlay">
          <div className="modal-form">
            <button 
              className="close-btn" 
              onClick={() => setShowForm(false)}
              aria-label="Close modal"
            >
              ×
            </button>
            <h3>Request to Join Event</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="stallName">Stall Name</label>
                <input
                  id="stallName"
                  type="text"
                  name="stallName"
                  placeholder="Enter stall name"
                  value={formData.stallName}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="stallType">Stall Type</label>
                <input
                  id="stallType"
                  type="text"
                  name="stallType"
                  placeholder="Food, Art, Crafts, etc."
                  value={formData.stallType}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="ownerName">Owner Name</label>
                <input
                  id="ownerName"
                  type="text"
                  name="ownerName"
                  placeholder="Your full name"
                  value={formData.ownerName}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="contact">Contact Information</label>
                <input
                  id="contact"
                  type="text"
                  name="contact"
                  placeholder="Phone or email"
                  value={formData.contact}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea
                  id="description"
                  name="description"
                  placeholder="Describe what you'll be offering"
                  value={formData.description}
                  onChange={handleChange}
                  rows="4"
                />
              </div>
              
              <div className="modal-buttons">
                <button type="submit" className="submit-btn">
                  Submit Request
                </button>
                <button 
                  type="button" 
                  className="cancel-btn"
                  onClick={() => setShowForm(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;